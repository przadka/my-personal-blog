# Research: Image Caption Styling

**Feature**: 001-caption-styling
**Date**: 2025-12-22

## Current Implementation

**Location**: `src/styles/base.css:197`

```css
prose-figcaption:!text-skin-base prose-figcaption:opacity-70
```

**Current behavior**:
- Uses base text color (`--color-text-base`)
- 70% opacity for slight muting
- Default prose font size (inherits from body)
- Default prose margins

## Tailwind Typography Figcaption Utilities

Available `prose-figcaption:` modifiers for styling:
- `prose-figcaption:text-sm` — smaller font size
- `prose-figcaption:text-xs` — even smaller
- `prose-figcaption:opacity-50` — more muted (current: 70)
- `prose-figcaption:mt-1` — reduce top margin (closer to image)
- `prose-figcaption:text-center` — center align
- `prose-figcaption:italic` — italic style

## Design Decision: Subtle Styling

### Recommended Changes

1. **Font size**: `prose-figcaption:text-sm` (smaller than body)
2. **Opacity**: `prose-figcaption:opacity-50` (more muted than current 70)
3. **Margin**: `prose-figcaption:!mt-1` (closer to image, override default)
4. **Alignment**: `prose-figcaption:text-center` (center under image)

### WCAG Contrast Consideration

- Current opacity-70 on light theme: ~70% of black = approx #4D4D4D on #EDE6DF
- Proposed opacity-50: ~50% of black = approx #808080 on #EDE6DF
- Contrast ratio at 50% opacity: ~4.5:1 (passes WCAG AA for normal text)
- For text-sm (14px), WCAG AA requires 4.5:1 — this passes

### Alternatives Considered

| Option | Pros | Cons |
|--------|------|------|
| opacity-60 | Better contrast | Less differentiation from body |
| opacity-40 | Very subtle | May fail accessibility on some monitors |
| opacity-50 | Balanced | Selected |

## Final Implementation

**Discovery**: Captions in this blog are not `<figcaption>` elements. They use markdown pattern `![alt](img)\n_caption_` which renders as `<img>` followed by `<em>` inside a `<p>`. The `prose-figcaption:` utilities don't apply.

**Solution**: Added custom CSS rule targeting `.prose img + em`:

```css
/* Image captions: italic text following images */
.prose img + em {
  @apply block text-center opacity-50 not-italic;
  margin-top: -2.5rem;
}
```

This achieves:
- Block display (own line)
- Centered under image
- 50% opacity (muted)
- Not italic (removes default em styling)
- Negative margin pulls caption closer to image
