
FROM node:20-bookworm-slim AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-bookworm-slim AS runner
ENV NODE_ENV=production
ENV UPLOAD_DIR=/usr/src/app/uploads
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /usr/src/app/dist ./dist
COPY nest-cli.json ./nest-cli.json
COPY README.md ./README.md

RUN mkdir -p "$UPLOAD_DIR" \
 && chown -R node:node /usr/src/app

EXPOSE 3000
USER node

CMD ["node", "dist/main.js"]
