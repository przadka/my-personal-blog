# Feature Specification: Image Caption Styling

**Feature Branch**: `001-caption-styling`
**Created**: 2025-12-22
**Status**: Draft
**Input**: User description: "Make image captions less distracting with subtle styling or alternative layout"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Undistracted Reading Flow (Priority: P1)

As a reader scrolling through a blog post, I want image captions to be visually subordinate to the main content so that my reading flow is not interrupted by caption text that competes with body paragraphs.

**Why this priority**: This is the core problem—captions currently have similar visual weight to body text, creating distraction.

**Independent Test**: View any blog post with images and verify captions are visually distinct and subordinate to body text.

**Acceptance Scenarios**:

1. **Given** a blog post with images, **When** I scroll past an image, **Then** the caption is immediately recognizable as supplementary information (not body text)
2. **Given** light and dark themes, **When** viewing captions in either theme, **Then** the caption styling remains appropriately subtle in both

---

### User Story 2 - Caption Legibility (Priority: P2)

As a reader, I want captions to still be readable when I need to understand image context, even though they are visually subtle.

**Why this priority**: While reducing distraction is primary, captions must remain functional.

**Independent Test**: View captions and verify text is legible without straining.

**Acceptance Scenarios**:

1. **Given** a caption with source attribution (e.g., "Source: METR"), **When** I look at the caption, **Then** I can read it without difficulty
2. **Given** a longer caption, **When** displayed, **Then** it remains readable and doesn't feel cramped

---

### Edge Cases

- Very long captions (multiple sentences) should remain readable
- Captions should work with both light and dark themes
- Mobile viewport should not make captions too small to read

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Captions MUST be visually distinguishable from body paragraph text
- **FR-002**: Captions MUST be legible in both light and dark themes
- **FR-003**: Captions MUST maintain adequate contrast for accessibility
- **FR-004**: Caption styling MUST use Tailwind utility classes only (per constitution: no new `@apply`, prefer utilities)
- **FR-005**: Caption styling MUST work on mobile viewports

### Design Approach

**Subtle Styling** (selected):
- Smaller font size than body text
- Lighter/muted color for reduced visual weight
- Reduced margin between image and caption (closer proximity creates visual grouping)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Captions are visually distinguishable from body text at a glance (verifiable via visual inspection)
- **SC-002**: Caption text passes WCAG AA contrast requirements in both themes
- **SC-003**: Captions remain readable on mobile devices (minimum effective font size)
- **SC-004**: No regression in existing blog post layouts

## Assumptions

- Images in blog posts use standard markdown syntax `![alt text](path)` which generates `<figure>` with `<figcaption>`
- Current caption styling is defined in `src/styles/base.css` via Tailwind prose utilities
- Both light and dark themes must be supported
- No changes to markdown authoring workflow required
