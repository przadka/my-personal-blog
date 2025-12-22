<!--
  Sync Impact Report
  ===================
  Version change: (new) → 1.0.0
  Added sections:
    - Principle I: Content-First
    - Principle II: Minimal Complexity
    - Principle III: Quality Gates
    - Content Standards section
    - Development Workflow section
    - Governance section
  Templates requiring updates: ✅ None required (initial constitution)
  Follow-up TODOs: None
-->

# Personal Blog Constitution

## Core Principles

### I. Content-First

All development decisions MUST prioritize content authoring and reading experience.

- Blog posts are the core deliverable; everything else supports them
- Markdown remains the primary authoring format
- Changes MUST NOT break existing post URLs or frontmatter compatibility
- New features MUST justify their value to the reader or author experience

### II. Minimal Complexity

The blog MUST remain simple and maintainable by a single developer.

- Prefer Astro components (`.astro`) for static content; use React (`.tsx`) only for client-side interactivity
- Avoid custom CSS; use Tailwind utility classes exclusively
- Never use Tailwind `@apply` directive
- No unnecessary abstractions—three similar lines beat a premature helper
- Dependencies MUST be justified; avoid adding packages for single-use cases

### III. Quality Gates

All changes MUST pass quality checks before merge.

- TypeScript types MUST pass (`astro check`)
- Linting MUST pass (`pnpm lint`)
- Formatting MUST be applied (`pnpm format`)
- Build MUST succeed (`pnpm build`)

## Content Standards

Blog post frontmatter MUST include:
- `title` — Post title
- `pubDatetime` — Publication timestamp (ISO format)
- `description` — SEO/preview description
- `author` — Defaults to site author if omitted

Optional frontmatter fields:
- `featured`, `draft`, `tags`, `ogImage`, `modDatetime`, `canonicalURL`

Images and assets MUST be placed in `public/assets/` with descriptive filenames.

## Development Workflow

### Git Practices

- Follow conventional commits format
- No AI attribution in commit messages
- Specify files explicitly in git commands (never `git add .`)
- Use rebase instead of merge (`git pull --rebase`)
- Run linter and formatter before committing

### Code Changes

- Read existing code before modifying
- Prefer editing existing files over creating new ones
- Keep changes focused—no drive-by refactors
- Test locally with `pnpm dev` before committing

## Governance

This constitution supersedes informal practices. Amendments require:

1. Clear rationale for the change
2. Update to this document with version bump
3. Review of dependent templates if principles change

Compliance is verified through code review and build checks.

**Version**: 1.0.0 | **Ratified**: 2025-12-22 | **Last Amended**: 2025-12-22
