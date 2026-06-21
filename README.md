# Anisotropic Labs Website

Next.js research lab website for Anisotropic Labs.

## Routes

- `/` Home
- `/research` and `/research/[slug]`
- `/projects`
- `/code`
- `/contact`

## Local Development

```bash
npm install
npm run dev
```

## Content

- `data/news.js` — lab focus ticker on the home page
- `data/research.js` — research cards and report bodies (PDF paths)
- `data/projects.js` — projects and focus areas
- `data/social.js` — email, social links, GitHub lab repo URL

Paper PDFs go in `public/papers/`.

## Deployment

```bash
npm run build
npm run start
```
