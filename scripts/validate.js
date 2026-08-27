#!/usr/bin/env node
/* Validates city.json. Zero dependencies. Exit 0 = valid, 1 = errors. */
const fs = require("fs");
const errors = [], warns = [];
let raw;
try { raw = fs.readFileSync("city.json", "utf8"); }
catch (e) { console.error("ERROR: city.json not found"); process.exit(1); }
let d;
try { d = JSON.parse(raw); }
catch (e) {
  console.error("ERROR: city.json is not valid JSON. " + e.message);
  console.error("Common causes: a trailing comma, curly quotes from a word processor, a missing quote.");
  process.exit(1);
}
const isStr = v => typeof v === "string";
const isArr = v => Array.isArray(v);
const dateRe = /^\d{4}-\d{2}-\d{2}$/;
function req(cond, msg){ if(!cond) errors.push(msg); }
function warn(cond, msg){ if(!cond) warns.push(msg); }

req(isStr(d.schema_version), "schema_version must be a string like \"1.1\"");
if (isStr(d.schema_version))
  req(["1.0","1.1"].includes(d.schema_version), "schema_version must be \"1.0\" or \"1.1\"");
req(d.city && typeof d.city === "object", "city block is required");
if (d.city) {
  req(isStr(d.city.name) && d.city.name.trim(), "city.name is required");
  if (d.city.type !== undefined)
    req(["city","region","country","island"].includes(d.city.type), "city.type must be city, region, country or island");
  if (d.city.subdomain !== undefined)
    req(/^[a-z0-9-]*$/.test(d.city.subdomain), "city.subdomain must be lowercase letters, numbers, hyphens");
  if (d.city.joined_year !== undefined)
    req(Number.isInteger(d.city.joined_year) && d.city.joined_year >= 2011,
        "city.joined_year must be a whole number 2011 or later, with no quotes around it");
  if (d.city.language !== undefined)
    req(isStr(d.city.language) && /^[a-zA-Z]{2,3}(-[a-zA-Z0-9]{2,8})*$/.test(d.city.language),
        "city.language must be a language code like \"hr\" or \"pt-BR\"");
  warn(isStr(d.city.differential) && d.city.differential.trim(), "city.differential is empty — it is the most important line on the page");
}
if (d.is_sample !== undefined) req(typeof d.is_sample === "boolean", "is_sample must be true or false (no quotes)");
if (d.analytics) {
  const a = d.analytics, hasDom = isStr(a.plausible_domain) && a.plausible_domain.trim(), hasPriv = isStr(a.privacy_url) && a.privacy_url.trim();
  req(!(hasDom && !hasPriv), "analytics.privacy_url is required when analytics.plausible_domain is set");
}
["news","events"].forEach(k => {
  if (!isArr(d[k])) return;
  d[k].forEach((it, i) => {
    req(it && isStr(it.title) && it.title.trim(), k+"["+i+"].title is required");
    req(it && dateRe.test(String(it.date||"")), k+"["+i+"].date must be YYYY-MM-DD");
  });
});
if (isArr(d.ecosystem)) d.ecosystem.forEach((o, i) => {
  req(o && isStr(o.name) && o.name.trim(), "ecosystem["+i+"].name is required");
  if (o && (o.lat !== undefined || o.lng !== undefined))
    req(typeof o.lat === "number" && typeof o.lng === "number", "ecosystem["+i+"]: lat and lng must both be plain numbers");
});
if (isArr(d.projects)) d.projects.forEach((p, i) => req(p && isStr(p.title) && p.title.trim(), "projects["+i+"].title is required"));
if (isArr(d.data_snapshot)) {
  warn(d.data_snapshot.length <= 6, "data_snapshot: only the first 6 entries are shown");
  d.data_snapshot.forEach((s, i) => req(s && isStr(s.label) && isStr(s.value), "data_snapshot["+i+"] needs label and value (both text)"));
}
if (warns.length) { console.log("Warnings:"); warns.forEach(w => console.log("  ⚠ " + w)); }
if (errors.length) { console.error("city.json has " + errors.length + " error(s):"); errors.forEach(e => console.error("  ✗ " + e)); process.exit(1); }
console.log("city.json is valid ✓");
