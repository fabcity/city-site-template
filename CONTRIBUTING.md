# Contributing & reporting problems

**Found a bug in the template?** Open an issue in this repository: what you expected, what happened, a link to your page, and your `city.json` if relevant. Screenshots help.

**Content problems on your own page** (invalid JSON, missing images) are covered by the README and the implementation guide — start there and with the automatic check on your commits.

**Pull requests** are welcome for fixes and translations of label defaults. Anything that changes `city.json` field names or structure is a network-level decision (the schema is a shared contract across all city sites) — propose it in an issue first; final call normally sits with the Foundation (luc@fab.city).

**Modified forks:** if you changed `index.html` beyond the sanctioned `og:` block, you are running an adapted site — updates and support for those changes are yours.

## Maintainer rules (Foundation)

These are what keep **Sync fork** a one-click, conflict-free operation for every city:

1. After a release, updates never touch `city.json` or anything in `assets/` — those files belong to the cities in their forks. Sample-content changes are allowed only in a major release, announced with lead time.
2. Never rewrite the three `og:` values in `index.html`. They are the one edit cities are told they may make, and so the only lines in the file where a city's change and ours could collide. Adding a *new* meta tag beside them is fine.
3. Before tagging a release, run `node scripts/consistency-test.js`. A rule added to `scripts/validate.js` must be added to `validate.html` and reflected in `city.schema.json` in the same commit, and a new `ui_labels` key must actually be used in `index.html`. The test fails otherwise, and CI runs it on every push.
4. Schema changes are add-only within `1.x`. Renaming or removing a field is a `2.0`, with migration notes and a Hylo announcement with lead time.

Response time for issues: within 10 working days, usually faster.
