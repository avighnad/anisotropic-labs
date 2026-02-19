# Anisotropic Labs Website

Next.js multi-page research-lab website for Anisotropic Labs.

## Stack

- Next.js App Router
- React
- Shared design system in `app/globals.css`
- Ghost CMS integration with local fallback data

## Routes

- `/` Platform / Home
- `/research`
- `/app` (AirFlow AR)
- `/developers`
- `/blog`
- `/blog/[slug]`
- `/company`

## Local Development

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

## CMS Wiring (Ghost)

The blog supports Ghost Content API and falls back to local posts in `data/localPosts.js` if env vars are not present.

Add variables to `.env.local`:

```bash
GHOST_API_URL=https://your-lab.ghost.io
GHOST_CONTENT_API_KEY=your_content_api_key
REVALIDATE_SECRET=your_webhook_secret
```

- Webhook endpoint: `POST /api/revalidate`
- Send header: `x-revalidate-secret: <REVALIDATE_SECRET>`

## SEO

Implemented:

- Route metadata (`title`, `description`, Open Graph)
- Dynamic article metadata on `/blog/[slug]`
- `app/sitemap.js`
- `app/robots.js`
- `app/opengraph-image.jsx`

## Deployment

- Vercel config: `vercel.json`
- Netlify config: `netlify.toml`

Deploy with standard Next.js build command:

```bash
npm run build
npm run start
```
