# Your city's Fab City site

This repository is the official website template for members of the [Fab City Network](https://fab.city). Fork it, fill in **one content file**, publish it free on GitHub Pages, and the Foundation connects it to your network subdomain — `yourcity.fab.city`. No coding, no hosting bills, no design work.

The template ships filled with **sample content for Fab City Zagreb** so you can see what a finished page looks like. Everything in it is replaceable through a single file.

Using the template is **optional**. It exists so any member can have a strong, recognizable, accessible site in an afternoon — and so the network looks like a network. See [Two ways to use it](#two-ways-to-use-it) if you already have a website or want to build your own.

## How it works

- **`index.html`** — the site itself. Design, logo, layout, behavior. Managed by the Foundation. **Never edit it** (one small exception below).
- **`city.json`** — your content. Text, numbers, links, images, language. **This is the only file you edit.**
- **`assets/`** — your images (photos, logos). You upload files here.

Everything you type into `city.json` appears on the page automatically. Empty sections (no projects yet, no events yet) simply don't appear — a short page is fine.

## Two ways to use it

**Path A — this repository (recommended).** Fork, edit `city.json`, done. The Foundation maintains the design; you maintain the content. Updates arrive as one click, never automatically.

**Path B — adapt it.** You may rebuild or adapt the template in any CMS, site builder or framework, or keep your existing website. Three elements are required on any site using a fab.city subdomain: the **Fab City lockup in the header**, a **link to fab.city**, and the **"Part of the Fab City Network" line**. Everything else — colors, typefaces, the `city.json` feed, the footer network block — is recommended, not required. The implementation guide covers Path B in detail. Adapted sites are built, hosted and maintained entirely by the city; the Foundation supports the template as shipped here.

Either way, any **active member** of the network can request a subdomain — including for an existing site that never touches this template.

## Set up your site (Path A)

You only need a free GitHub account and a web browser.

1. **Fork this repository.** Click **Fork** (top right) → **Create fork**. You now have your own copy.
2. **Switch on the automatic file check** *(one click, once)*. In your fork, open the **Actions** tab and click **"I understand my workflows, go ahead and enable them"**. From then on every commit gets a ✓ or ✗ — a red ✗ means `city.json` has an error; open the check's log to see exactly what to fix. Skipped it? No problem — you can always paste your file into the [online checker](https://fabcity.github.io/city-site-template/validate.html) instead.
3. **Edit `city.json`.** In your fork, click `city.json`, then the **pencil icon** (Edit this file). Change only what is on the **right side** of each colon; never change the words on the left (they are the shared network format). Keep every value in the shape it already has: text stays inside `"straight quotes"`, and the values that are **not** quoted must stay unquoted — `joined_year` (a year, e.g. `2015`), `is_sample` (`true` or `false`), and `lat` / `lng` (decimal numbers). Putting quotes around those is the most common error the checker reports. Click **Commit changes** when done.
4. **Upload your images.** Open the `assets` folder → **Add file → Upload files** → drag your photos in → commit. Make sure filenames in `city.json` match exactly (e.g. `assets/hero.jpg`).
5. **Publish with GitHub Pages.** In your fork: **Settings → Pages → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save.** After a minute your site is live at `https://YOURNAME.github.io/city-site-template/`. This is your working preview — check it after every change.
6. **Replace every piece of sample content**, then set `"is_sample": false`. Until then the page shows a "Sample content" ribbon on purpose.
7. **Request your subdomain** (active members): submit the [subdomain request form](https://airtable.com/appEQIJOvZOf8urci/pagVZURLwyu5BtYQl/form). It asks for the subdomain you want, your designation (Fab City / Region / Country / Island), your path (**A — Template fork** for this repository), your city or region name, a contact name and email, and a tick confirming you accept the network's conditions. **On Path A, fill in your GitHub username as well** — the Foundation cannot create your DNS record without it. Optional: a separate technical contact, your page address from step 5, and a message. You'll hear back within 10 working days, usually faster.
8. **Connect the subdomain.** When the Foundation confirms, go to **Settings → Pages → Custom domain**, enter `yourcity.fab.city`, save, and once the check passes tick **Enforce HTTPS**. GitHub issues the certificate automatically. You're live.

## Editing guide

**`city`**
- `name`, `country` — as they should appear on the page.
- `subdomain` — your subdomain, lowercase (`zagreb` → zagreb.fab.city).
- `type` — your network designation: `"city"`, `"region"`, `"country"` or `"island"`. This sets your color everywhere — red for Fab Cities, green for Fab Regions, black for Fab Countries, blue for Fab Islands, exactly as on the [fab.city](https://fab.city) network map — and writes your name into the Fab City logo lockup. Use the designation the Foundation gave you.
- `joined_year` — the year you joined the network.
- `differential` — **the most important line on the page.** One sentence on what YOUR city actually does in the network. Concrete, no slogans.
- `description` — two or three sentences. Real scope, real focus areas.
- `hero_image` — path to your main photo, e.g. `assets/hero.jpg`.
- `local_site_url` *(optional)* — if your city already runs a full website, put its address here and the page shows a **"Visit our full website"** button right in the hero. Your fab.city page then works as your networked front door. Note: the hero holds one secondary button, so setting this **replaces** the "Contact" button — your email still appears in the footer either way.
- `language` *(optional)* — the language code of the page you wrote (`"hr"`, `"pt-BR"`, `"fr"`). Set it whenever you translate `ui_labels`, so screen readers pronounce your page correctly and browsers offer to translate it. Leave it out for English.

**`contact`** — public email plus social links. Entries with an empty `url` are hidden.

**`analytics`** *(optional, schema 1.1)* — privacy-first visitor counts via [Plausible](https://plausible.io) (paid by you, cookieless). Set **both** `plausible_domain` (e.g. `"zagreb.fab.city"`) **and** `privacy_url` (a page you publish describing what you measure). The tracker loads only when both are set **and** the site is live (`is_sample: false`). Leave both empty for no tracking at all — the template sets no cookies and calls no trackers by default. Local privacy compliance is your responsibility.

`privacy_url` is also the page's one **legal-notice slot**, and it works on its own: fill in `privacy_url` and leave `plausible_domain` empty, and the footer gets a link with no tracker anywhere on the page. If your jurisdiction requires a published notice — a German or Austrian *Impressum*, a privacy statement, a cookie notice — point `privacy_url` at it and rename the link with the `privacy` key in `ui_labels` (`"privacy": "Impressum"`). Whether you need one, and what it must contain, is yours to check; the template only gives you somewhere to put it.

**`data_snapshot`** — up to 6 numbers that prove your city is alive: labs, organizations, projects, people, material flows. Values are text, so `"120+"` is fine.

**`ecosystem`** — the real organizations in your city: fab labs, makerspaces, universities, NGOs, companies, city offices. One line each on what they actually contribute. If `logo` is empty, a colored block with the organization's initials is shown — that looks intentional, not broken. Add `lat` and `lng` (decimal coordinates — right-click a spot in Google Maps to copy them) and the organization appears on the section's **map view**; leave them out and it shows in the grid only. The map loads the open-source Leaflet library and OpenStreetMap-based tiles from a CDN, only when a visitor opens it.

**`projects`** — what is actually being made. `status` is free text (`Active`, `Pilot`, `Completed`…). Two sentences max in `summary`: what it makes, who it serves.

**`news`** — date (`YYYY-MM-DD`), headline, one or two sentences. Newest first is automatic; the page shows the 6 most recent. Just keep appending entries.

**`events`** — the list opens on upcoming dates, and visitors can flip to past ones or browse any month in the calendar view. Keep past events in the file — they are your public track record, and nothing needs cleaning up.

**`ui_labels`** — every button, section label and screen-reader label on the page, so you can translate it by editing this block alone. Add `city.language` at the same time. The five keys shipped in `city.json` are the ones you will always want; the template also understands these optional extra keys, and falls back to English for any you leave out:

`network_since`, `cta_explore`, `visit_local_site`, `read_more`, `contact`, `sample_notice`, `view_grid`, `view_map`, `view_list`, `view_calendar`, `show_past`, `show_upcoming`, `today`, `no_events_month`, `privacy`, `claim` (the footer line under the lockup), `network_zone` (the footer heading over the network links), `fork_cta`, `skip_to_content`, and the screen-reader labels `aria_top`, `aria_sections`, `aria_intro`, `aria_data`, `aria_prev_month`, `aria_next_month`.

**One exception:** the error card shown when `city.json` cannot be read stays in English. It has to work when the file it would read its labels from is the broken file. The names of the network's own links (Fab City, Fab City Index, Fab City Blog, Hylo, PLANETAI) also stay as they are — they are proper names.

## Images

- Hero photo: at least 1200px wide, JPG preferred.
- Project photos: at least 800px wide.
- Organization logos: square-ish PNG on transparent or white.
- Keep each file under ~400 KB — your page is shown from phones at events, often on bad connections.
- A missing or misnamed image renders as a styled placeholder, never a broken icon.

## Content rules

These come from the network, and they matter:

- **Publish real organizations and real projects, or publish nothing.** A short true page beats a long generic one.
- Every sentence must contain something specific to your city. Banned: "a community of makers and innovators", "driving sustainable change", and anything else that could describe any city on Earth.
- Flip `is_sample` to `false` only when every placeholder is gone.
- News older than six months reads as a dead city. Fewer entries, but real ones.

## Keep the JSON valid

`city.json` must stay valid JSON: no comments, no trailing commas, straight quotes (`"`, not `“”`). Three ways to check, easiest first:

1. **The network's online checker** — paste your file (or your page address) into [the city.json checker](https://fabcity.github.io/city-site-template/validate.html). Nothing to install, tells you exactly what to fix.
2. **The automatic commit check** — once enabled (setup step 2), every commit shows a ✓ or ✗.
3. Locally, if you have [Node](https://nodejs.org) installed: `node scripts/validate.js`, run from the folder that contains `city.json`. Same rules as the other two; useful if you edit the file on your own computer.

All three apply the same rules, and a test in this repository fails if they ever stop agreeing. `city.schema.json` is the same shape written as a JSON Schema, for anyone generating `city.json` from a CMS or another tool (see the implementation guide, Path B).

If your page shows the error card, invalid JSON is almost always the reason.

## Updates

Template updates are announced on the network's [Hylo group](https://www.hylo.com/groups/fab-city-network/discussions). **Nothing changes on your site automatically.** To apply an update, open your fork on GitHub and click **Sync fork → Update branch**. Updates never touch `city.json` or anything in `assets/` (see [CONTRIBUTING.md](CONTRIBUTING.md)), so your content and images come through untouched. Release notes live in [CHANGELOG.md](CHANGELOG.md).

Two things worth knowing about that button:

- **Never click "Discard N commits"** in the Sync fork dialog. GitHub offers it when your fork has its own commits — which it always will, because your content *is* those commits. It would throw your content away. **Update branch** is the one you want, always.
- If GitHub says the branch has conflicts it cannot resolve automatically, don't fight it — write to luc@fab.city with a link to your fork. That normally means `index.html` was edited in the fork, and it is quicker to fix once than to guess at.

**Deleted a template file by accident?** Sync fork will *not* bring it back — a deletion in your fork is one of your own changes, and updates merge around it. Open the file in [the template repository](https://github.com/fabcity/city-site-template), use **Download raw file**, then upload it to the same folder in your fork. A missing `assets/fonts/FunnelSans.ttf` is the usual case, and it shows up as the page falling back to a plain system typeface.

## What you can change — and what you can't

**Yours:** all content in `city.json`, your images, your language.

**Fixed across all network sites (do not modify):**
- `index.html` — with one sanctioned exception: the clearly commented `og:` block in `<head>` (three lines) may be edited for nicer social-sharing previews. Worth doing once your subdomain is live: the shipped `og:image` is a relative path, which most chat apps and social networks won't resolve, so set it to the full address — `https://yourcity.fab.city/assets/hero.jpg` — and put your city in `og:title`. Updates from upstream leave these three lines alone, so the edit is safe to keep.
- The `city.json` field names and structure (they are the shared network format).
- The page structure, the Fab City identity (colors, typography, logo system, hexagonal modules), and the network zone in the footer.
- The federation contract: your site serves its content at `https://yourcity.fab.city/city.json`, which fab.city can read to aggregate news and data from the whole network.

Want more freedom than that? That's Path B — see [Two ways to use it](#two-ways-to-use-it).

## License

Code: [MIT](LICENSE.md) — open, like the rest of the network's tools. The **Fab City name, logo and lockup system are trademarks of the Fab City Foundation** and are not covered by the code license: representing a place as part of the Fab City Network, and any `*.fab.city` subdomain, is for active members within the brand rules. Full brand and third-party notices: [TRADEMARK.md](TRADEMARK.md). Font: Funnel Sans, [SIL Open Font License 1.1](assets/fonts/OFL.txt).

## Questions

Start with the implementation guide and this README, then the network conversation on [Hylo](https://www.hylo.com/groups/fab-city-network/discussions). If you're stuck:

- **Content, editorial, brand communications** — Jeanne, jeanne@fab.city
- **Membership, participation, network questions** — Lars, lars@fab.city
- **Subdomains, DNS, GitHub, technical issues** — Lucas, luc@fab.city

Responses within 10 working days, usually faster. The Foundation maintains this template; it does not build, edit or debug individual city sites.
