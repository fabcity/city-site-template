# Changelog

Updates are announced on the Fab City Network Hylo group. They never change your live site automatically — you apply them with **Sync fork** on GitHub, whenever you are ready.

## 1.2.0 — unreleased (audit fixes, 2026-08-27)

Nothing here changes how you write `city.json`; every addition is optional and existing files keep working.

- Optional `city.language` (a code like `"hr"`) sets the page's `lang` attribute, so screen readers and browser translation treat a translated page correctly
- The rest of the page chrome is translatable from `ui_labels` too — the footer claim, the footer network heading, the "Fork this site on GitHub" link, the skip link and the screen-reader labels. The error card stays in English on purpose: it runs when `city.json` is the thing that failed
- Fixed a 3px sideways scrollbar on 358–380px-wide phones (iPhone SE and mini sizes)
- Contrast: calendar event titles and the online checker's verdict banner were below WCAG AA for normal text; both now sit on FAB Black with the designation colour as the signal
- The grid/map and list/calendar switches have accessible names
- `city.schema.json` no longer treats a seventh `data_snapshot` entry as an error — the page shows the first six and both validators warn, which is the actual behaviour
- Both validators now check `schema_version`, `joined_year` and `city.language`, matching what `city.schema.json` already declared
- New `scripts/consistency-test.js` (zero dependencies, runs in CI): fails if `city.schema.json`, `scripts/validate.js`, `validate.html` and `index.html` stop agreeing
- `LICENSE.md` is now the plain MIT text so GitHub recognises it; brand and third-party notices moved to `TRADEMARK.md`
- README corrections: which four values must stay unquoted, the real list of subdomain-form fields, what **Sync fork** does and does not restore, a warning never to click **Discard commits**, `og:image` needing an absolute URL, `local_site_url` replacing the Contact button, and `privacy_url` doubling as the legal-notice slot
- CONTRIBUTING: maintainer rules now also forbid upstream edits to the `og:` values and require the consistency test before a release

## 1.1.0 — 2026-08-25

- Display type and generated logo lockups now use **Funnel Sans** (SIL OFL 1.1); the proprietary Circular font is no longer distributed with the template
- `city.json` schema 1.1: optional `analytics` block (`plausible_domain` + `privacy_url`, both required, loads only on live sites); optional `city.local_site_url` adds a "Visit our full website" button to the hero
- Privacy link shown in the footer when provided
- Automatic validation of `city.json` on every commit (GitHub Action, enabled once per fork) and a hosted [online checker](https://fabcity.github.io/city-site-template/validate.html) that needs no setup; plus `city.schema.json`, the same shape written as a JSON Schema for tools that generate `city.json`
- The error card now links straight to the online checker
- License: MIT for the code; Fab City brand assets remain trademarks of the Foundation
- LICENSE, CONTRIBUTING, CHANGELOG and font license files
- README: publishing with GitHub Pages, subdomain request flow, update policy

## 1.0.0

- Initial template: single-page city site rendered from `city.json` — hero, data snapshot, ecosystem (grid + map), projects, news, events (list + calendar), generated lockups, four network designations
