# no.togavganger.web

Landing page for the Wear OS app **Togavganger** – a standalone app that displays Norwegian train departures on your smartwatch.

## Development

```bash
yarn install
yarn dev
```

The site runs at `http://localhost:4321`.

## Build

```bash
yarn build
```

Output is written to `dist/`.

## URLs

| Environment | URL |
|-------------|-----|
| Production | [togavganger.no](https://togavganger.no) |
| Preview | [no-togavganger-web-git-preview-philipostlis-projects.vercel.app](https://no-togavganger-web-git-preview-philipostlis-projects.vercel.app) |

## Deployment

The site is deployed to [Vercel](https://vercel.com) via the built-in GitHub integration:

- **Push to `main`** – production deployment to [togavganger.no](https://togavganger.no)
- **Push to `preview`** – preview deployment at the preview URL above

Preview deployments can be promoted to production directly from the Vercel dashboard without a new push.
