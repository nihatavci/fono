# Sentry Triage Log

Per-issue fields: first seen, run dates seen, root cause, fix commit, PR link, status (new | pr-open | fixed | monitoring | escalate), attempts.

## 2026-11-21
- Sentry coupleai/fono: 0 unresolved issues in last 24h (also 0 in last 7d).
- Issues seen: none. Fixes: none. PRs: none.
- Note: `gh pr list` (GraphQL) is blocked in this environment; open sentry/ PRs were not checked via CLI. No prior log existed.
- Next run: nothing to verify.

## 2026-11-22
- Sentry coupleai/fono, last 24h: 2 unresolved issues.
- **FONO-E** (new, 3 events, 1 user, build 118, iPhone17,2, iOS 27.2.1): `TypeError: undefined is not a function` at `components/zumi/ZumiRive.tsx:99` (`setNum`), called from the effect cleanup at `:189` (`setNum('emphasis', 0)`) during unmount on the talk screen. Hypothesis from the Sentry frames only: `instance.numberProperty(name)` returns an object whose `.set` is undefined, or the Rive instance is already disposed at unmount. Status: **cause unconfirmed, no fix**. `components/zumi/` does not exist in this repo (origin/main is a single "Initial commit"; no branch has it). Client fix when found. Attempts: 0.
- **FONO-6** (regressed, 16 events lifetime, 2 users, first seen 2026-10-15, last 2026-11-21, build 117): handled diagnostic `audio_start_narrowband` from `lib/audioDiag.ts:43`, called at `hooks/useTalkSession.ts:4537`. Context: BluetoothHFP output, 16 kHz narrowband, hands-free. This is a deliberate diagnostic report, likely device/route state and not a code bug. Neither file exists in this repo. Status: **cause unconfirmed, no fix**. Attempts: 0.
- Other issues: none. Fixes: none. PRs: none opened for fixes.
- Environment notes: `gh pr list` (GraphQL) is blocked, so the REST API was used. Open sentry/ PRs are log-only PRs #1-#17. The log lives only on the unmerged log branches, so this branch is based on sentry/log-2026-11-21. `gitleaks` is not installed.
- Next run: confirm the app source (components/zumi, hooks/useTalkSession.ts, lib/audioDiag.ts) is synced into this repo. Check whether FONO-E recurs (day 2 of seen) and whether FONO-6 recurs on builds after 117.

## 2026-11-23
- Sentry coupleai/fono, last 24h: 0 unresolved issues.
- FONO-E and FONO-6 (from 2026-11-22) did not recur in the window; both remain "cause unconfirmed" (source files absent from this repo). Fixes: none.
- Environment notes: `gh pr list` GraphQL blocked (403); REST used for PRs.
- Next run: confirm app source is synced into this repo; watch FONO-E / FONO-6 recurrence.
