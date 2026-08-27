# Contributing & reporting problems

**Found a bug in the template?** Open an issue in this repository: what you expected, what happened, a link to your page, and your `city.json` if relevant. Screenshots help.

**Content problems on your own page** (invalid JSON, missing images) are covered by the README and the implementation guide — start there and with the automatic check on your commits.

**Pull requests** are welcome for fixes and translations of label defaults. Anything that changes `city.json` field names or structure is a network-level decision (the schema is a shared contract across all city sites) — propose it in an issue first; final call normally sits with the Foundation (luc@fab.city).

**Modified forks:** if you changed `index.html` beyond the sanctioned `og:` block, you are running an adapted site — updates and support for those changes are yours.

**Maintainer rule (Foundation):** after a release, updates never touch `city.json` or anything in `assets/` — those files belong to the cities in their forks. This is what keeps **Sync fork** a one-click, conflict-free operation for every city. Sample-content changes are allowed only in a major release, announced with lead time.

Response time for issues: within 10 working days, usually faster.
