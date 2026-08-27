#!/usr/bin/env node
/* Guards the three-way contract: city.schema.json (published shape),
   scripts/validate.js (commit check) and validate.html (hosted checker) must
   agree. They drifted once — the hosted checker passed files the schema
   rejected — so this runs in CI. Zero dependencies. Exit 0 = they agree. */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const read = f => fs.readFileSync(path.join(ROOT, f), "utf8");
const fails = [];
const check = (ok, msg) => { if (!ok) fails.push(msg); };

/* ── 1 · pull validateData() out of the hosted checker ───────────────── */
const page = read("validate.html");
const from = page.indexOf("function validateData(d){");
const to = page.indexOf("function excerptAt(");
check(from > -1 && to > from, "validate.html: could not locate validateData() — did the markers change?");
const helpers = `const isStr=v=>typeof v==="string",isArr=v=>Array.isArray(v),dateRe=/^\\d{4}-\\d{2}-\\d{2}$/;`;
const browserValidate = from > -1 && to > from
  ? new Function(`${helpers}${page.slice(from, to)}return validateData;`)()
  : () => ({ errors: ["EXTRACTION FAILED"], warns: [] });

/* ── 2 · run the commit check as the Action runs it ──────────────────── */
const tmp = fs.mkdtempSync(path.join(require("os").tmpdir(), "fc-"));
function nodeValidate(obj) {
  fs.writeFileSync(path.join(tmp, "city.json"), JSON.stringify(obj));
  try {
    execFileSync(process.execPath, [path.join(ROOT, "scripts/validate.js")], { cwd: tmp, stdio: "pipe" });
    return { errors: [] };
  } catch (e) {
    const out = String(e.stdout) + String(e.stderr);
    return { errors: out.split("\n").filter(l => l.trim().startsWith("✗")).map(l => l.replace(/^\s*✗\s*/, "")) };
  }
}

/* ── 3 · fixtures: one per rule, plus the shipped file ───────────────── */
const ok = extra => Object.assign({ schema_version: "1.1", city: { name: "T", differential: "d" } }, extra);
const FIXTURES = {
  "shipped city.json":            JSON.parse(read("city.json")),
  "minimal valid":                ok(),
  "bad schema_version":           ok({ schema_version: "9.9" }),
  "missing city":                 { schema_version: "1.1" },
  "blank city.name":              { schema_version: "1.1", city: { name: "   " } },
  "bad city.type":                ok({ city: { name: "T", type: "metropolis" } }),
  "bad subdomain":                ok({ city: { name: "T", subdomain: "Bad_Sub" } }),
  "joined_year as string":        ok({ city: { name: "T", joined_year: "2015" } }),
  "joined_year too early":        ok({ city: { name: "T", joined_year: 1999 } }),
  "bad language code":            ok({ city: { name: "T", language: "croatian!" } }),
  "good language code":           ok({ city: { name: "T", language: "pt-BR" } }),
  "is_sample quoted":             ok({ is_sample: "false" }),
  "analytics without privacy":    ok({ analytics: { plausible_domain: "a.fab.city", privacy_url: "" } }),
  "bad news date":                ok({ news: [{ date: "5/3/26", title: "x" }] }),
  "news without title":           ok({ news: [{ date: "2026-01-01" }] }),
  "lat as string":                ok({ ecosystem: [{ name: "o", lat: "45.1", lng: 15.9 }] }),
  "ecosystem without name":       ok({ ecosystem: [{ summary: "s" }] }),
  "project without title":        ok({ projects: [{ status: "Active" }] }),
  "stat missing value":           ok({ data_snapshot: [{ label: "l" }] }),
  "seven stats (warn, not error)":ok({ data_snapshot: Array.from({ length: 7 }, (_, i) => ({ label: "l" + i, value: "v" })) }),
};

for (const [name, obj] of Object.entries(FIXTURES)) {
  const a = nodeValidate(obj).errors.slice().sort();
  const b = browserValidate(obj).errors.slice().sort();
  check(JSON.stringify(a) === JSON.stringify(b),
    `"${name}": commit check and hosted checker disagree\n      validate.js : ${JSON.stringify(a)}\n      validate.html: ${JSON.stringify(b)}`);
}
fs.rmSync(tmp, { recursive: true, force: true });

/* ── 4 · the published schema must declare the same constants ────────── */
const s = JSON.parse(read("city.schema.json"));
const rules = read("scripts/validate.js");
const cityProps = s.properties.city.properties;
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

check(eq(s.properties.schema_version.enum, ["1.0", "1.1"]),
  "city.schema.json: schema_version enum is no longer [1.0, 1.1] — update scripts/validate.js and validate.html to match");
check(rules.includes(JSON.stringify(s.properties.schema_version.enum).replace(/"/g, '"')),
  "scripts/validate.js does not enforce the schema's schema_version enum");
check(eq(cityProps.type.enum, ["city", "region", "country", "island"]),
  "city.schema.json: city.type enum changed — update both validators and TYPE_META in index.html");
check(cityProps.subdomain.pattern === "^[a-z0-9-]*$",
  "city.schema.json: city.subdomain pattern changed — update both validators");
check(cityProps.joined_year.minimum === 2011 && cityProps.joined_year.type === "integer",
  "city.schema.json: joined_year constraint changed — update both validators");
check(rules.includes("d.city.joined_year >= " + cityProps.joined_year.minimum),
  "scripts/validate.js does not enforce the schema's joined_year minimum");
check(!!cityProps.language && rules.includes("d.city.language"),
  "city.language is in one place but not the other (schema vs scripts/validate.js)");
check(s.properties.data_snapshot.maxItems === undefined,
  "city.schema.json declares data_snapshot.maxItems, which would make extra rows a hard error; the renderer just shows the first 6 and both validators only warn");

/* ── 5 · index.html must render every label the validators know about ── */
const html = read("index.html");
for (const k of ["claim", "network_zone", "fork_cta", "skip_to_content", "aria_intro", "aria_data", "aria_sections", "aria_top", "aria_prev_month", "aria_next_month"])
  check(html.includes('L("' + k + '")'), `index.html declares ui_label "${k}" but never uses it — a translated page would keep English there`);
check(/documentElement\.lang\s*=/.test(html), "index.html never sets <html lang> from city.language");

/* ── report ─────────────────────────────────────────────────────────── */
if (fails.length) {
  console.error(`consistency-test: ${fails.length} problem(s)`);
  fails.forEach(f => console.error("  ✗ " + f));
  process.exit(1);
}
console.log(`consistency-test: schema, commit check, hosted checker and index.html agree ✓ (${Object.keys(FIXTURES).length} fixtures)`);
