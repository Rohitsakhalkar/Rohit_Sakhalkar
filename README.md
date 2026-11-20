# Rohit Sakhalkar — Portfolio

A responsive personal portfolio for Rohit Sakhalkar, focused on Python,
automation, backend engineering, practical software, and open-source work.

## Included pages

- Homepage with the hero, project sections, contributions, journey, about,
  contact, and footer.
- Project archive at `/projects`.
- Case studies for Get It Done, Forge, Data Structures, and LearnAble.
- Open-source contributions at `/contributions`.
- Temporary design-system preview at `/design-system`.

## Tech stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS through the existing Next.js configuration
- `next/font` for Geist, Space Grotesk, and JetBrains Mono

No contact form provider, GitHub API, animation library, or UI library is
required by the current implementation. Contact is handled through direct
email, LinkedIn, GitHub, and resume links.

## Run locally

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

The application is available at [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Optional site URL

Set `NEXT_PUBLIC_SITE_URL` to the actual deployment URL when deploying. It is
used for the metadata base and for generating absolute sitemap and robots
references. The application does not guess a production domain.
