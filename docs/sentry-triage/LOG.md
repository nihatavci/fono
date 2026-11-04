# Sentry Triage Log (coupleai / fono)

Statuses: new | pr-open | fixed | monitoring | escalate

## 2026-11-04
| Issue | First seen | Events/Users | Status | Notes |
|---|---|---|---|---|
| FONO-C | 2026-11-03 | 1 / 1 | new (cause unconfirmed) | App hang >2s, main thread in Skia `SkSVGClipPath::resolveClip` -> `SkOpSegment::rayCheck`, via RNSkia `ImageSVGCmd::draw` called from a worklet recorder. No first-party `ImageSVG`/`useSVG` usage found in repo (grep), so the SVG source is likely a dependency or an asset. Build 1.1.0+104, iOS 27.0.1 (beta OS), free_memory ~90MB. Single event; no fix attempted. |
| FONO-9 | 2026-10-18 | 4 / 1 | new (cause unconfirmed) | WatchdogTermination (likely OOM) while foreground, build 106, iOS 26.6.1. No stack trace/breadcrumb evidence of cause. Seen 10-18 and 11-03. No fix attempted. |

Next run: check whether FONO-C recurs on other users/OS versions; if FONO-9 recurs on a 3rd run, escalate. Consider adding memory-usage breadcrumbs.
No fixes or PRs this run.
