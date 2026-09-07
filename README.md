# aureliengabry.github.io

Personal portfolio and freelance site, built with [Astro](https://astro.build) + Tailwind CSS v4. Bilingual: French at `/`, English at `/en/`.

## Development

```sh
bun install
bun run dev
```

| Script          | What it does                          |
| --------------- | -------------------------------------- |
| `bun run dev`     | Local dev server                       |
| `bun run build`   | Production build to `dist/`            |
| `bun run preview` | Serve the production build locally     |
| `bun run check`   | Type-check (`astro check`)             |
| `bun run format`  | Format the codebase with Prettier      |

## Project structure

```
src/
  components/        section components rendered by HomePage.astro
    ui/              small reusable atoms (buttons, tags, labels)
    visuals/         decorative/animated components (no text content)
  i18n/
    ui.ts            all site copy, both languages, flat key/value dictionary
    utils.ts         getLangFromUrl / useTranslations helpers
  layouts/           Layout.astro — shared <head>, theme script, scroll-reveal
  pages/             index.astro (fr), en/index.astro
  data/contact.ts    email, social links
```

To change any text on the site, edit `src/i18n/ui.ts` — every string lives there for both `en` and `fr`, keyed by section (e.g. `hero.leadPre`, `about.facts.0.value`). Keep the `en` and `fr` key sets identical; nothing enforces that automatically.

## Deployment

Every push to `main` builds and deploys automatically via `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages, no separate branch or build artifacts committed anywhere). A pull request only runs the Copilot review, not this workflow — the live site only updates once a PR is merged to `main`.
