# Sentry triage log (coupleai / fono)

Statuses: new | pr-open | fixed | monitoring | escalate

## 2026-11-25

Open sentry/ PRs checked: could not list via `gh pr list` (GraphQL blocked in this environment); no sentry/ branches exist on origin.

### FONO-6 — `Error: audio_start_narrowband`
- First seen 2026-10-15, last seen 2026-11-24 19:15 UTC; 18 events, 1 user (regressed). Release com.nihtavci.fono@1.1.0+122, iPhone17,2, iOS 27.2.1.
- Source: deliberate diagnostic report, `reportAudioDiag` (lib/audioDiag.ts:43) called from `startEngine` (hooks/useTalkSession.ts:4958). Event context: hands-free, BluetoothHFP output, 16 kHz session rate, voice processing enabled, vpioSetupCount 0.
- Root cause: **cause unconfirmed**. `lib/audioDiag.ts`, `hooks/useTalkSession.ts` and the talk-loop code do not exist in origin/main of this repo (hooks/ has no useTalkSession), so the frames cannot be read or traced. Not fixed, no guess-fix.
- Status: new (attempts: 0). Seen in 1 daily run so far.
- Next run: if the talk code lands in main, trace `audioDiagProblem` narrowband detection for Bluetooth HFP (16 kHz) sessions. Likely expected behavior for HFP, may only need downgrading to a breadcrumb/warning.

## 2026-11-26

Open sentry/ PRs: `gh pr list` blocked (GraphQL); checked via origin branches only. Prior log branches (sentry/log-*) are unmerged, so main has no LOG.md; this entry carries the 11-25 entry forward.

### FONO-G — `Error: Failed to set install_timestamp!`
- First seen 2026-11-25 20:48 UTC, last 21:48; 3 events, 0 users identified (no Sentry user set). Release com.nihtavci.fono@1.1.0+123, iPhone17,2, iOS 27.2.1, handled=yes.
- Root cause: `Prefs.setInt` (store/mmkv.ts:84 in release) calls native `prefsStorage.set` with no guard; native MMKV write throws, and the throw escapes the mount effect in app/(app)/_layout.tsx:208-210 (`Prefs.setInt('install_timestamp', now)`). Why the native write fails (likely low device storage; event shows ~190 MB free memory) is not provable from the event.
- Fix (client, needs new build): shared `_safeSet` in store/mmkv.ts used by `Prefs.set/setBool/setInt`; on native failure it falls back to the in-memory map. Test: `__tests__/prefs-write-failure.test.ts`.
- Evidence: `npx jest __tests__/prefs-write-failure.test.ts` fails before the fix, passes after; full `npx jest` 11 suites / 59 tests pass. `npm run typecheck` reports 8 pre-existing errors in other files (className typings, lib/appsflyer.ts), none in changed files.
- Status: pr-open (attempts: 1). Next run: check FONO-G count drops after build 124+ ships.

### FONO-6 — carried over, not re-listed in 24h window today. Status unchanged: new, cause unconfirmed (talk-loop code absent from main).
