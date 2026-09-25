<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Creative Point Media

A dark, cinematic Next.js 16 portfolio for a multidisciplinary creative production studio.

## Commands

- `npm run dev` — Start the development server.
- `npm run build` — Build for production.
- `npm run start` — Start the production server.
- `npm run lint` — Run ESLint.

## Project Notes

- **Framework**: Next.js 16 App Router, React 19, TypeScript.
- **Styling**: Tailwind CSS v4 configured via `app/globals.css` using `@theme inline`.
- **Fonts**: Syne (display) and Inter (body) loaded via `next/font/google`.
- **Animation**: Framer Motion for scroll reveals and layout transitions.
- **Icons**: Lucide React.
- **No UI library**: Components are custom-built.
- **Images**: Unsplash URLs are whitelisted in `next.config.ts`; an internet connection is required for them to load.
- **Contact form**: Frontend-only validation and success state. No backend/email integration is wired yet.
