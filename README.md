# Nebula Kit

Nebula Kit is a React design system and demo application that showcases a composable component library, server-side rendering (SSR) pipeline, and production-ready build tooling. The repo contains the core UI package (`@nebula-kit/core`), a Pro bundle, and a sample site that exercises the components end-to-end.

## Key features

- **Composable UI system** with shared tokens, helpers, and hooks across Core and Pro bundles.
- **Isomorphic rendering** using a Vite-built client and an Express SSR host for production.
- **Type-safe development** powered by TypeScript, ESLint, Prettier, and strict typechecking builds.
- **Automated distribution** scripts that generate dual ESM/CJS outputs plus bundled styles.
- **Robust testing** support with Vitest, Playwright component/E2E tests, and TSD type assertions.

## Repository layout

```
src/
  client/      # Demo application: routing, pages, API hooks, and UI wiring
  server/      # Development and production SSR servers plus HTML helpers
  lib/         # Publishable component library (core + pro bundles)
  setup/       # Shared testing setup for Vitest/Playwright
public/        # Static assets served by Vite/Express
scripts/       # Release, packaging, and utility scripts
```

### `src/lib` — component library

- `components/` – All exported UI parts, split into `core/` primitives and `pro/` premium widgets. Subfolders such as `layout/`, `controls/`, `feedback/`, and `overlays/` group related components.
- `styles/` – Global SCSS entrypoints and tokens. Bundled via the `dist:css` script.
- `helpers/`, `hooks/`, `icons/`, `service/`, `state/` – Shared utilities that power components (class name helpers, client state stores, service integrations, etc.).
- `index.ts`, `index.core.ts`, `index.pro.ts` – Library entrypoints used when bundling Core/Pro builds.

### `src/client` — demo application

- `components/` – App frame, navigation, page layouts, and shared UI wrappers that compose library components.
- `pages/` – Route-level screens (auth, profile, marketing, etc.).
- `api/` – Fetch helpers, `useGetUser`/`useLogoutUser` hooks, and request abstractions.
- `hooks/` and `helpers/` – Client-specific utilities such as navigation helpers and metadata handling.
- `store/` – Zustand-powered client state for cross-page data.
- `definitions/` and `meta/` – Route constants, enums, and document metadata utilities.

### `src/server` — SSR hosts

- `server.dev.ts` – Development server that mounts Vite’s middleware for hot reloading.
- `server.prod.ts` – Production Express server that renders the React tree on the server using `renderToString`, wraps it with providers (`HydrationGate`, `NebkitProvider`, `Snackbar`), and streams the prebuilt client assets.
- `helpers/` – HTML composition utilities such as `getFinalIndexHtml` and metadata helpers used by both dev and prod servers.

### Tooling and configuration

- **Bundling:** Vite configs (`vite.client.dev.ts`, `vite.client.prod.ts`) handle the SPA build. `tsup.server.ts` and `tsup.pkg.ts` bundle the server and npm distributions.
- **Type safety:** `tsconfig.*.json` variants support app builds, declaration generation, and isolated typechecking. `extensions.d.ts` and `global.d.ts` provide ambient types.
- **Testing:** `vitest.config.ts` configures unit tests. `playwright/` holds component/E2E specs. `tsd` validates published type definitions.

## Getting started

### Prerequisites

- Node.js 18+
- Yarn 4 (PnP is enabled by the repo’s `.yarnrc.yml` via `packageManager` metadata)

### Install dependencies

```bash
yarn install
```

### Run the app in development

- **Client with HMR**
  ```bash
  yarn dev
  ```
  Starts Vite in dev mode with automatic reloads.

- **SSR dev server**
  ```bash
  yarn dev:ssr
  ```
  Boots the Express/Vite hybrid server for full SSR during development.

### Build and run in production

```bash
yarn build       # Builds client and server bundles
node build/server/server.prod.js
```

### Quality checks

```bash
yarn lint        # ESLint for TS/TSX
yarn typecheck   # Strict tsc pass with no emit
yarn test        # Vitest unit tests
yarn pw          # Playwright tests
```

## Publishing & distribution

The project ships multiple npm bundles:

- `yarn dist:core` – Builds the `@nebula-kit/core` package (ESM+CJS) and CSS assets.
- `yarn dist:pro` – Builds the Pro bundle and packages it via `npm pack`.
- `yarn publish:core` / `yarn publish:pro` – Publish flows for public/pro releases (see `package.json` for S3 upload helpers).

Bundled CSS is generated from `src/lib/styles/index.$TSUP_BUNDLE.scss` and emitted into `dist/<bundle>/styles.css`, ensuring consumers can import theme styles directly.

## Project conventions

- Components favor **composition over inheritance**—small primitives combine into higher-level patterns (app frames, overlays, form elements).
- Providers (`NebkitProvider`, `HydrationGate`, `Snackbar`) wrap both client and server entry points to keep them SSR-safe.
- Routing uses **React Router v7** with helpers in `client/hooks` for navigation.
- **Zustand** backs shared client state; API hooks expose `sendRequest`/`isMakingRequest` for consistent loading flows.
- **Shiki** powers code highlighting utilities used across docs/demos.

## Further exploration

- Inspect `src/lib/components/core` to see foundational building blocks and patterns for styling and props.
- Review `src/client/components/app/App/app.tsx` to understand how navigation, auth, and layout combine the library pieces.
- Explore `scripts/` for packaging helpers like `generate-sitemap.js` and `generate-package-json.js`.

Nebula Kit is designed to be both a reusable component system and a living reference for building consistent React apps with SSR, strong tooling, and predictable release flows.
