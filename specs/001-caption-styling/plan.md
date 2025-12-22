# Implementation Plan: Image Caption Styling

**Branch**: `001-caption-styling` | **Date**: 2025-12-22 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-caption-styling/spec.md`

## Summary

Reduce visual distraction from image captions by making them smaller, lighter, and closer to images. This is a CSS-only change to the Tailwind prose utilities in `src/styles/base.css`.

## Technical Context

**Language/Version**: CSS (Tailwind CSS 3.x)
**Primary Dependencies**: Tailwind CSS, @tailwindcss/typography (prose plugin)
**Storage**: N/A
**Testing**: Visual inspection in browser (light/dark themes, mobile viewport)
**Target Platform**: Web (all modern browsers)
**Project Type**: Static site (Astro)
**Performance Goals**: N/A (no runtime impact)
**Constraints**: Must use Tailwind utility classes within existing `@apply` in `.prose` selector
**Scale/Scope**: Single file change (~3 lines modified)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Content-First | PASS | Improves reading experience by reducing caption distraction |
| II. Minimal Complexity | PASS | CSS-only change, no new files, no new dependencies |
| II. No `@apply` directive | PASS | Modifying existing `@apply` block, not adding new one |
| II. Tailwind utilities only | PASS | Using prose-figcaption utilities |
| III. Quality Gates | PASS | Will run lint/format/build before commit |

**Gate Result**: PASS - No violations

## Project Structure

### Documentation (this feature)

```text
specs/001-caption-styling/
├── spec.md              # Feature specification
├── plan.md              # This file
├── research.md          # Phase 0 output
└── checklists/
    └── requirements.md  # Quality checklist
```

### Source Code (repository root)

```text
src/
└── styles/
    └── base.css         # Contains .prose selector with figcaption styling (line 197)
```

**Structure Decision**: Single file modification. No new files needed.

## Complexity Tracking

No constitution violations to justify.
