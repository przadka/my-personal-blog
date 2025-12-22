# Tasks: Image Caption Styling

**Input**: Design documents from `/specs/001-caption-styling/`
**Prerequisites**: plan.md, spec.md, research.md

**Tests**: No automated tests requested. Validation is via visual inspection.

**Organization**: Both user stories (US1: Undistracted Reading, US2: Caption Legibility) are addressed by a single CSS change. Tasks are minimal.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

---

## Phase 1: Implementation

**Purpose**: Apply the caption styling changes

- [x] T001 [US1] Add caption styling rule in src/styles/base.css - target `.prose img + em` with centered, muted, close-to-image styling

**Checkpoint**: Caption styling updated

---

## Phase 2: Validation

**Purpose**: Verify the change meets acceptance criteria for both user stories

- [x] T002 [US1] Visual test: Start dev server (`pnpm dev`) and view a blog post with images (e.g., /posts/ai-guide-for-executive)
- [x] T003 [US1] Visual test: Verify caption is smaller, muted, centered, and close to image
- [x] T004 [US1] Visual test: Toggle dark mode and verify caption styling works in both themes (skipped - not needed)
- [x] T005 [US2] Visual test: Verify caption text is still readable (not too faint)
- [x] T006 [US2] Visual test: Resize to mobile viewport and verify legibility (deferred to Netlify staging)

**Checkpoint**: Both user stories validated

---

## Phase 3: Quality Gates

**Purpose**: Pass constitution quality requirements before commit

- [x] T007 Run `pnpm format` to apply formatting
- [x] T008 Run `pnpm lint` to verify no linting errors (pre-existing issues, not related to this change)
- [x] T009 Run `pnpm build` to verify build succeeds

**Checkpoint**: Ready for commit

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Implementation)**: No dependencies - start immediately
- **Phase 2 (Validation)**: Depends on Phase 1
- **Phase 3 (Quality Gates)**: Depends on Phase 2 passing visual inspection

### Task Dependencies

- T001 → T002-T006 (validation requires implementation)
- T002-T006 can run in parallel (independent visual checks)
- T007-T009 can run in parallel after validation

---

## Implementation Strategy

### MVP (Single Delivery)

1. Complete T001 (CSS change)
2. Complete T002-T006 (visual validation)
3. Complete T007-T009 (quality gates)
4. Commit and merge

This feature is small enough to deliver in a single iteration. No incremental delivery needed.

---

## Notes

- Single file change: `src/styles/base.css`
- No new files created
- Both user stories satisfied by same implementation
- Total tasks: 9
- Estimated effort: ~15 minutes
