# OpenGittr marketing website — prerendered static HTML served by gostatic (no nginx).
# Build for linux/amd64: docker build --platform linux/amd64 -t opengittr/website .
#
# Every route is a real dist/<path>/index.html with full content in the initial HTML —
# crawlers and LLMs get everything statically, no client JS.
#
# gostatic gives correct Cache-Control by default (immutable for hashed /assets/*,
# no-cache for HTML) plus gzip, and exposes gofr health (/.well-known/alive) and
# metrics (:9090). SPA_MODE=false: this is a prerendered site, so unknown routes
# serve 404.html with a 404 status rather than the SPA shell.

# Build stage runs natively (BUILDPLATFORM) — emitted static files are
# arch-independent; only the final gostatic stage is the target arch.
FROM --platform=$BUILDPLATFORM node:24-alpine AS build
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM opengittr/gostatic:v0.1.0
# gostatic serves /srv/static on :8000 (metrics :9090); ENTRYPOINT is baked in.
ENV SPA_MODE=false
COPY --from=build --chown=nonroot:nonroot /build/dist/ /srv/static/
EXPOSE 8000 9090
