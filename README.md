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

## Deployment

The site is deployed to [Vercel](https://vercel.com). GitHub Actions handle automatic deployment:

- **Push to `main`** – production deployment
- **Pull requests** – preview deployment with comment link

### Required GitHub Secrets

Add these repository secrets in Settings → Secrets and variables → Actions:

| Secret           | Description                                          |
|------------------|------------------------------------------------------|
| `VERCEL_TOKEN`   | Create at [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | From `.vercel/project.json` after running `vercel link` |
| `VERCEL_PROJECT_ID` | From `.vercel/project.json` after running `vercel link` |

### Initial Setup

1. Run `vercel link` locally to connect the project to Vercel
2. Copy `orgId` and `projectId` from `.vercel/project.json` to GitHub secrets
3. Create a Vercel token and add it as `VERCEL_TOKEN`

### Disable Vercel GitHub Integration

To use GitHub Actions instead of Vercel's built-in Git integration, add `vercel.json`:

```json
{
  "github": { "enabled": false }
}
```
