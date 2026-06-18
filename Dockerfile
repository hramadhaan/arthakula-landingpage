# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN npx nuxt build

# Stage 2: Production
FROM node:22-alpine AS runner
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

EXPOSE 3000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

CMD ["node", ".output/server/index.mjs"]
