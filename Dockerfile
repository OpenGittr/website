# OpenGittr marketing website — prerendered static HTML served by zopdev/static-server (no nginx).
# Build for linux/amd64: docker build --platform linux/amd64 -t opengittr/website .
#
# The build emits one real HTML file per page (dist/<path>/index.html) with full content
# in the initial HTML — no client JS required. Crawlers and LLMs get everything statically.
#
# Caching note: static-server (plain Go http.FileServer) sends no Cache-Control headers,
# so browsers revalidate HTML files (effectively no-cache) while the content-hashed
# /assets/* CSS is safe to cache at any layer. If a CDN/ingress is added in front,
# explicitly set `Cache-Control: no-cache` for *.html there.

# Build stage runs natively (BUILDPLATFORM) — emitted static files are
# arch-independent; only the final static-server stage is linux/amd64.
FROM --platform=$BUILDPLATFORM node:24-alpine AS build
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM zopdev/static-server:v0.0.8
# static-server serves ./static; every route is a real directory with an index.html
COPY --from=build /build/dist/ ./static/
COPY --from=build /build/dist/ ./website/
EXPOSE 8000
CMD ["/main"]
