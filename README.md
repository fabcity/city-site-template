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
3. **Edit `city.json`.** In your fork, click `city.json`, then the **pencil icon** (Edit this file). Change the values — only the text on the **right side** of each colon, between quotes. Never change the words on the left (they are the shared network format). Click **Commit changes** when done.
4. **Upload your images.** Open the `assets` folder → **Add file → Upload files** → drag your photos in → commit. Make sure filenames in `city.json` match exactly (e.g. `assets/hero.jpg`).
5. **Publish with GitHub Pages.** In your fork: **Settings → Pages → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save.** After a minute your site is live at `https://YOURNAME.github.io/city-site-template/`. This is your working preview — check it after every change.
6. **Replace every piece of sample content**, then set `"is_sample": false`. Until then the page shows a "Sample content" ribbon on purpose.
7. **Request your subdomain** (active members): submit the [subdomain request form](SUBDOMAIN_FORM_URL) with your city name, desired subdomain and your GitHub Pages address. The Foundation reviews it and creates the DNS record — you'll hear back within 10 working days, usually faster.
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
- `local_site_url` *(optional)* — if your city already runs a full website, put its address here and the page shows a **"Visit our full website"** button right in the hero. Your fab.city page then works as your networked front door.

**`contact`** — public email plus social links. Entries with an empty `url` are hidden.

**`analytics`** *(optional, schema 1.1)* — privacy-first visitor counts via [Plausible](https://plausible.io) (paid by you, cookieless). Set **both** `plausible_domain` (e.g. `"zagreb.fab.city"`) **and** `privacy_url` (a page you publish describing what you measure). Analytics load only when both are set **and** the site is live (`is_sample: false`); the privacy link appears in your footer. Leave both empty for no tracking at all — the template sets no cookies and calls no trackers by default. Local privacy compliance is your responsibility.

**`data_snapshot`** — up to 6 numbers that prove your city is alive: labs, organizations, projects, people, material flows. Values are text, so `"120+"` is fine.

**`ecosystem`** — the real organizations in your city: fab labs, makerspaces, universities, NGOs, companies, city offices. One line each on what they actually contribute. If `logo` is empty, a colored block with the organization's initials is shown — that looks intentional, not broken. Add `lat` and `lng` (decimal coordinates — right-click a spot in Google Maps to copy them) and the organization appears on the section's **map view**; leave them out and it shows in the grid only. The map loads the open-source Leaflet library and OpenStreetMap-based tiles from a CDN, only when a visitor opens it.

**`projects`** — what is actually being made. `status` is free text (`Active`, `Pilot`, `Completed`…). Two sentences max in `summary`: what it makes, who it serves.

**`news`** — date (`YYYY-MM-DD`), headline, one or two sentences. Newest first is automatic; the page shows the 6 most recent. Just keep appending entries.

**`events`** — the list opens on upcoming dates, and visitors can flip to past ones or browse any month in the calendar view. Keep past events in the file — they are your public track record, and nothing needs cleaning up.

**`ui_labels`** — every button and section label, so you can translate the page into your own language by editing this block alone. The template also understands these optional extra keys for a fully translated page: `network_since`, `cta_explore`, `visit_local_site`, `read_more`, `contact`, `sample_notice`, `view_grid`, `view_map`, `view_list`, `view_calendar`, `show_past`, `show_upcoming`, `today`, `no_events_month`, `privacy`.

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
3. Locally: `node scripts/validate.js`.

If your page shows the error card, invalid JSON is almost always the reason.

## Updates

Template updates are announced on the network's [Hylo group](https://www.hylo.com/groups/fab-city-network/discussions). **Nothing changes on your site automatically.** To apply an update, open your fork on GitHub and click **Sync fork → Update branch** — your `city.json` and images are never touched by updates, so there is nothing to merge. Release notes live in [CHANGELOG.md](CHANGELOG.md).

## What you can change — and what you can't

**Yours:** all content in `city.json`, your images, your language.

**Fixed across all network sites (do not modify):**
- `index.html` — with one sanctioned exception: the clearly commented `og:` block in `<head>` (three lines) may be edited for nicer social-sharing previews.
- The `city.json` field names and structure (they are the shared network format).
- The page structure, the Fab City identity (colors, typography, logo system, hexagonal modules), and the network zone in the footer.
- The federation contract: your site serves its content at `https://yourcity.fab.city/city.json`, which fab.city can read to aggregate news and data from the whole network.

Want more freedom than that? That's Path B — see [Two ways to use it](#two-ways-to-use-it).

## License

Code: [MIT](LICENSE.md) — open, like the rest of the network's tools. The **Fab City name, logo and lockup system are trademarks of the Fab City Foundation** and are not covered by the code license: representing a place as part of the Fab City Network, and any `*.fab.city` subdomain, is for active members within the brand rules. Font: Funnel Sans, [SIL Open Font License 1.1](assets/fonts/OFL.txt).

## Questions

Start with the implementation guide and this README, then the network conversation on [Hylo](https://www.hylo.com/groups/fab-city-network/discussions). If you're stuck:

- **Content, editorial, brand communications** — Jeanne, jeanne@fab.city
- **Membership, participation, network questions** — Lars, lars@fab.city
- **Subdomains, DNS, GitHub, technical issues** — Lucas, luc@fab.city

Responses within 10 working days, usually faster. The Foundation maintains this template; it does not build, edit or debug individual city sites.
