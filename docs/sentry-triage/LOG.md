# Sentry triage log (coupleai / fono)

Per-issue fields: first seen, run dates seen, root cause, fix commit, PR, status, attempts.
Earlier entries live in open log PRs #1-#4 (FONO-D: cause unconfirmed).

## 2026-11-09
- Query: unresolved, lastSeen -24h, project fono -> 1 issue.
- FONO-A (App Hanging >2000ms, culprit GrMtlPipelineStateBuilder::finalize): first seen 2026-10-20, 3 events / 3 users total, 1 in window (release 1.1.0+97, iPhone16,1, iOS 27.2).
  Main thread blocked in Skia (RNSkia) Metal fragment-shader compile (FillRRectOp -> newRenderPipelineState -> MTLCompilerScheduler). No first-party frames. Status: ignored: third-party Skia/Metal shader-compile hang, low volume, cause in app code unconfirmed. Seen in runs: 2026-11-09.
- No fix PR. Next run: escalate if FONO-A event count grows or it appears in 3+ daily runs.
