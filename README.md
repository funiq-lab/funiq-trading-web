# Funiq Trading Website

Funiq trading system documentation, built with Astro as a static website.

- Production hostname: https://funiq-trading.funiqlab.com
- Cloudflare Pages: https://funiq-trading-web.pages.dev
- Cloudflare project: `funiq-trading-web`, production branch: `main`

## Build and publish

```sh
pnpm install --frozen-lockfile
pnpm build
# Requires a Wrangler login with Pages write permission.
pnpm run deploy
```

The deploy command pins Wrangler 4.45.0 for its Pages upload workflow. The
repository stays static: no server adapter, Worker, database or AWS host is needed.
If your terminal needs a proxy, set `HTTPS_PROXY` / `HTTP_PROXY` for the command.
Do not commit Cloudflare credentials.

GitHub Actions validates builds and retains the static artifact. Publishing is
currently manual via Wrangler; pushing `main` does not upload to the former AWS
server. The old Nginx/SSH scripts remain only as historical reference.

## Domain configuration

Associate `funiq-trading.funiqlab.com` in this Pages project's custom domains
before changing DNS. Replace the old record for this exact hostname with:

| Type | Name | Target | TTL |
| --- | --- | --- | --- |
| CNAME | funiq-trading | funiq-trading-web.pages.dev | Auto |

Use Cloudflare's Pages domain setup to validate DNS and issue HTTPS. Keep the
root domain `funiqlab.com` available for the future personal portfolio. Deploy
future projects independently and associate one explicit subdomain per project.
Back up the zone before retiring old AWS records; preserve mail and verification
records. Wrangler OAuth does not grant DNS edit permission: DNS API changes need
a separate token scoped to DNS edit on this zone.
