# Gold Summit Capital Public Website V1

This is the first runnable public website prototype for Gold Summit Capital.

The current local environment does not provide `npm`, so this V1 uses a dependency-free static generator. The content model, route structure, visual tokens, and Netlify settings are kept simple so the project can later migrate to Astro without rewriting the site strategy.

## Routes

- `/zh-CN/`
- `/zh-CN/about/`
- `/zh-CN/approach/`
- `/zh-CN/team/`
- `/zh-CN/client-portal/`

## Local Commands

If your shell has Node available:

```powershell
node scripts/build.mjs
node --test tests/site-contract.test.mjs
node scripts/dev-server.mjs
```

In the Codex desktop environment, use the bundled Node runtime if the system `node` is blocked:

```powershell
& 'C:\Users\zhou6\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' scripts/build.mjs
& 'C:\Users\zhou6\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests/site-contract.test.mjs
& 'C:\Users\zhou6\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' scripts/dev-server.mjs
```

## Deployment

### GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`.
For the first public preview, GitHub Pages is the lowest-friction option because it only requires a GitHub account.

See `DEPLOYMENT_GUIDE_CN.md` for the Chinese step-by-step deployment guide.

### Netlify

Netlify can build this project with:

```text
Build command: node scripts/build.mjs
Publish directory: dist
```

When `npm` and Git deployment are available, the recommended production path remains Astro + Netlify as documented in the project strategy files.
