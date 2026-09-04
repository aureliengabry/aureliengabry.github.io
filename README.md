# aureliengabry.github.io

Personal portfolio, built with [Astro](https://astro.build) + Tailwind CSS v4.

## Development

```sh
bun install
bun run dev
```

## Deployment

Pushes to `main` build and deploy automatically via the GitHub Actions workflow
in `.github/workflows/deploy.yml`. The repo's GitHub Pages source must be set
to "GitHub Actions" (Settings → Pages → Build and deployment → Source) **before**
the first push from this branch — otherwise the site keeps serving the old
`gh-pages` branch with no visible failure.

Once that first deploy from Actions is confirmed live, delete the old
`gh-pages` branch (`git push origin --delete gh-pages`) so nothing can fall
back to the previous React build.
