# Quickstart: Image Caption Styling

## Verify the Change

1. Start dev server:
   ```bash
   pnpm dev
   ```

2. Open a blog post with images (e.g., `/posts/ai-guide-for-executive`)

3. Check caption styling:
   - Caption text should be smaller than body text
   - Caption should appear muted/lighter
   - Caption should be close to the image (minimal gap)
   - Caption should be centered

4. Toggle dark mode and verify caption remains readable

5. Resize to mobile viewport and verify legibility

## Files Changed

- `src/styles/base.css` — Updated `.prose` figcaption utilities
