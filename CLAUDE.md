# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains a personal blog built with Astro, using the AstroPaper theme, and enhanced with Tailwind CSS and React components. The blog features markdown-based content located in `src/data/blog`.

## Common Commands

### Development

```bash
# Start the development server
npm run dev

# Start development server with Docker
docker compose up
```

### Building and Preview

```bash
# Check TypeScript and build the site
npm run build

# Preview the built site
npm run preview
```

### Code Quality

```bash
# Check TypeScript types
astro check

# Lint the code
npm run lint

# Format code with Prettier
npm run format

# Only check formatting without making changes
npm run format:check
```

### Content Management

```bash
# Sync the content types
npm run sync
```

### Git Workflow

```bash
# Commit with Commitizen (follows conventional commits)
npm run cz
```

**Important Git Rules:**
- Do not include AI attribution in commit messages
- Follow the conventional commits format
- Keep commit messages concise and descriptive

## Architecture

### Key Directories

- `/src/data/blog/` - Markdown files for blog posts
- `/src/components/` - UI components (mix of Astro and React components)
- `/src/layouts/` - Page layouts used throughout the site
- `/src/pages/` - Routes and page templates (Astro's file-based routing)
- `/public/assets/` - Static assets like images

### Content Structure

Blog posts are written in Markdown with frontmatter for metadata:

```markdown
---
author: Michał Prządka
pubDatetime: 2023-03-04T14:57:52.737Z
title: Hello world!
postSlug: hello-world
featured: false
ogImage: /assets/hello-world.jpg
description: First post and hello world.
---

Content goes here...
```

Required frontmatter fields:
- `title` - Post title
- `pubDatetime` - Publication date and time
- `description` - Short description for SEO/previews
- `author` - Post author (defaults to site author if not specified)

Optional frontmatter fields:
- `featured` - Mark post as featured (boolean)
- `draft` - Mark post as draft (boolean)
- `tags` - Array of tags (defaults to ["others"])
- `ogImage` - Open Graph image for social media
- `modDatetime` - Last modification date/time
- `canonicalURL` - Canonical URL if post exists elsewhere

### Key Components and Utilities

- `Layout.astro` - Base layout component
- `PostDetails.astro` - Layout for blog post pages
- `Card.tsx` - React component for post cards
- `FeaturedPosts.tsx` - React component for featured post display
- `getSortedPosts.ts` - Utility for sorting posts by date

### Build Process

The site is built with Astro's build system, which compiles all components and pages into static HTML, CSS, and JavaScript. The build optimizes images, processes Markdown, and generates Open Graph images.

### Configuration

- `astro.config.ts` - Main Astro configuration file
- `src/config.ts` - Site-wide configuration settings
- `src/content.config.ts` - Content collection schema
- `tailwind.config.cjs` - Tailwind CSS configuration

## Development Guidelines

1. Follow Astro's file-based routing convention for new pages
2. Use the existing component structure and patterns
3. Create new components as `.astro` files for static content or `.tsx` for interactive elements
4. Keep React components minimal and focused on client-side interactivity
5. Follow the blog post frontmatter schema when creating new content
6. Utilize Tailwind utility classes for styling (avoid custom CSS when possible)
7. Never use the Tailwind `@apply` directive as per project conventions