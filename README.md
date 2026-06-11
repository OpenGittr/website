# OpenGittr Website

Marketing website for OpenGittr — opengittr.com. Showcases the product portfolio
(kubeui, issueboard, rhealth) and links out to each product's home.

## Architecture

React 19 + Tailwind CSS 4 + Vite + TypeScript, **prerendered to pure static HTML at
build time**. Production ships zero JavaScript: every route is a real
`dist/<path>/index.html` with full content, served by `zopdev/static-server` (no nginx).

```
.
├── index.html            # Dev-only shell (production HTML is prerendered)
├── src/
│   ├── data/products.ts  # Product portfolio — add a product by appending an entry
│   ├── pages/            # One component per route (home, notfound)
│   ├── components/       # Document (prerender HTML shell), Layout (header/footer)
│   ├── routes.tsx        # Route table; prerender emits one HTML file per entry
│   ├── meta.ts           # Site constants, page meta types, JSON-LD
│   ├── entry-server.tsx  # Build-time render entry
│   └── main.tsx          # Dev-only client entry
├── scripts/prerender.mjs # Renders routes to static HTML + sitemap, strips JS bundle
├── Dockerfile            # Multi-stage: node build → zopdev/static-server:8000
└── k8s/                  # deployment, service, ingress
```

## Adding a product

Append an entry to `src/data/products.ts` — name, kind (`Open Source` | `SaaS`),
tagline, description, highlights, link, hover accent — and copy the product's
actual logo from its repo into `public/logos/<id>.svg`. The home page grid,
footer links, and card layout pick it up automatically.

## Local development

```bash
npm install
npm run dev    # http://localhost:5200 (strict port, block 5200-5299)
```

## Build

```bash
npm run build  # typecheck → client build → SSR build → prerender to dist/
```

Output in `dist/`: one HTML file per route, hashed CSS in `assets/`, `sitemap.xml`,
`robots.txt`. Preview with any static file server.

## Docker

```bash
# We develop on Mac; deployment is linux/amd64
docker build --platform linux/amd64 -t gcr.io/opengittr/opengittr-website:latest .
docker push gcr.io/opengittr/opengittr-website:latest
```

The container serves on port **8000**. HTML files carry no Cache-Control header so
browsers revalidate them (effectively no-cache); the content-hashed CSS is safe to
cache anywhere. If a CDN is added in front, set `Cache-Control: no-cache` for
`*.html` there.

## Kubernetes

```bash
kubectl apply -f k8s/
kubectl rollout restart deployment/opengittr-website   # after pushing a new image
```

- `deployment.yaml` — 2 replicas, liveness/readiness probe `GET /` on :8000
- `service.yaml` — ClusterIP 80 → 8000
- `ingress.yaml` — opengittr.{com,io,dev,net,org} (+ www), TLS via cert-manager

## Contact

- Website: https://opengittr.com
- GitHub: https://github.com/opengittr
- Email: hello@opengittr.com
