# Alder & Co.

A Next.js App Router application built with React, TypeScript, and Tailwind CSS v4. Node.js 22 or later is required.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The project root is `alder/`.

## Validation and production

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

Next.js uses its normal server runtime. There is no HTML generator, authored build output, static export, or standalone browser script. `.next/` is generated and ignored.

## Organization

- `app/`: Server Component routes, shared layout, Metadata API, next/font fonts, global Tailwind theme, and not-found page.
- `components/layout/`: shared navigation, next/image brand, and footer.
- `components/home/`: reusable homepage sections and dimensional financial sculpture.
- `components/motion/` and `hooks/`: isolated client-side motion, cleaned-up event listeners, reduced-motion behavior, and requestAnimationFrame scroll updates that do not re-render React on every frame.
- `components/contact/`: validated demo form and accessible confirmation.
- `lib/content.ts`: typed shared navigation, services, process, and FAQ content.
- `public/`: authored image assets.

The consultation form is explicitly a portfolio demo: it does not transmit or persist submissions. Fonts are self-hosted by next/font after the build-time Google Fonts download. Brand assets use next/image; the interactive sculpture uses CSS transforms and SVG.

The existing Sites project identity is retained for a compatible server deployment. Its previous static deployment is not an implementation or build target for this application.
