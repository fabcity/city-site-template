# Changelog

Updates are announced on the Fab City Network Hylo group. They never change your live site automatically — you apply them with **Sync fork** on GitHub, whenever you are ready.

## 1.1.0 — 2026-08-25

- Display type and generated logo lockups now use **Funnel Sans** (SIL OFL 1.1); the proprietary Circular font is no longer distributed with the template
- `city.json` schema 1.1: optional `analytics` block (`plausible_domain` + `privacy_url`, both required, loads only on live sites); optional `city.local_site_url` adds a "Visit our full website" button to the hero
- Privacy link shown in the footer when provided
- `city.schema.json` + automatic validation of `city.json` on every commit (GitHub Action, enabled once per fork) and a hosted [online checker](https://fabcity.github.io/city-site-template/validate.html) that needs no setup
- The error card now links straight to the online checker
- License: MIT for the code; Fab City brand assets remain trademarks of the Foundation
- LICENSE, CONTRIBUTING, CHANGELOG and font license files
- README: publishing with GitHub Pages, subdomain request flow, update policy

## 1.0.0

- Initial template: single-page city site rendered from `city.json` — hero, data snapshot, ecosystem (grid + map), projects, news, events (list + calendar), generated lockups, four network designations
