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
