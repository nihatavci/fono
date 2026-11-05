# Sentry triage log (coupleai / fono)

Per issue: first seen, run dates seen, root cause, fix commit, PR, status (new | pr-open | fixed | monitoring | escalate), attempts.

## 2026-11-05

Window: unresolved, last 24h. 1 issue found.

### FONO-D — `Error: audio_start_narrowband` (culprit `reportAudioDiag`)
- First seen 2026-11-04 21:40Z; 1 event, 1 user; release com.nihtavci.fono@1.1.0+106 (adhoc), iPhone17,2, iOS 26.6.1. Runs seen: 2026-11-05.
- Event is `handled: yes`: a deliberate diagnostic report, not a crash. Context: output route BluetoothHFP, sessionSampleRate 16000, VoiceChat mode, voice processing on, battery 5%.
- Likely expected behavior (Bluetooth HFP is 16 kHz narrowband), but unconfirmed: no `reportAudioDiag` / `audio_start_narrowband` string exists in this repo at origin/main (single "Initial commit"), so the frames cannot be read.
- Status: **cause unconfirmed**, no fix attempted. Attempts: 0. No PR.
- Next run: check if it recurs or if more users hit it; confirm where reportAudioDiag lives (native module or unsynced source).
