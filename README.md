# Starter Kit for Vite, React, TypeScript, Tailwind and Node.js ESM

_Minimal, sensible defaults, fast._

Read [the blog post about this template](https://cpojer.net/posts/fastest-frontend-tooling-in-2022).

## Technologies

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind](https://tailwindcss.com/)

## Setup

- Run `npm install`
- `npm run dev` for development.
- Use `npm test` to run tests.
- `npm run build` for production builds.

## Protips for the fastest Developer Experience

- Use [`npm-run-all`](https://github.com/mysticatea/npm-run-all) to parallelize local test runs.
- Prettier and eslint have `--cache` flags. Use them!
- Do not run prettier inside of `eslint`. It commonly takes 50% of the eslint runtime!
- Automatically sort imports when running prettier/saving the document via [`@ianvs/prettier-plugin-sort-imports`](https://github.com/ianvs/prettier-plugin-sort-imports).
