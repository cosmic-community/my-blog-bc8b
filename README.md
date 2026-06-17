# My Blog

![App Preview](https://imgix.cosmicjs.com/1cae95b0-6a69-11f1-8dfe-457508ece1b8-autopilot-photo-1454165804606-c3d57bc86b40-1781713511041.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and responsive blog built with Next.js 16 and [Cosmic](https://www.cosmicjs.com). My Blog showcases posts, authors, and categories with a clean, creative portfolio aesthetic — all powered by your existing Cosmic content.

## Features

- 📝 **Posts** — Browse all blog posts with featured images, tags, authors, and categories
- 👤 **Authors** — Dedicated author pages with bios, avatars, and their published posts
- 🏷️ **Categories** — Filter and explore posts organized by category
- 🎨 **Modern, responsive design** — Looks great on mobile, tablet, and desktop
- ⚡ **Server-side rendering** — Fast page loads with Next.js App Router
- 🔍 **SEO friendly** — Optimized metadata for every page
- 🖼️ **Optimized images** — Imgix-powered responsive images

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a32ca2dcb5ebdc347330567&clone_repository=6a32cb08cb5ebdc3473305a3)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
>
> User instructions: A blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A blog with posts, authors, and categories

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) — React framework with App Router
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) — Utility-first styling
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS
- [Imgix](https://imgix.com) — Image optimization

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with a bucket containing `authors`, `categories`, and `posts` object types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (these are provided automatically when cloning via Cosmic):

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

Fetch all posts with their connected author and category data:

```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const posts = response.objects
```

Fetch a single post by slug:

```typescript
const response = await cosmic.objects
  .findOne({ type: 'posts', slug: 'my-post-slug' })
  .depth(1)

const post = response.object
```

## Cosmic CMS Integration

This application integrates with three [Cosmic](https://www.cosmicjs.com/docs) object types:

- **Posts** — `title`, `content`, `featured_image`, `tags`, `author` (object relationship), `category` (object relationship)
- **Authors** — `name`, `bio`, `avatar`, `email`
- **Categories** — `name`, `description`

The app uses the `depth` parameter to resolve connected objects (authors and categories) automatically when fetching posts. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the project into [Netlify](https://netlify.com)
3. Add your environment variables
4. Deploy

For production, set the environment variables in your hosting platform's dashboard.

<!-- README_END -->