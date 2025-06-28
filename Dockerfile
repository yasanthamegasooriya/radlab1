# Stage 1: Build React app
FROM node:20-alpine AS builder
WORKDIR /app/store
COPY store/package.json store/package-lock.json ./
RUN npm ci
COPY store .
RUN npm run build

# Stage 2: Set up Node.js server and serve static files
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --only=production
COPY server.js ./
COPY vercel.json ./
COPY --from=builder /app/store/build ./store/build
COPY --from=builder /app/store/public ./store/public

# If your backend needs other files from store, copy them as well
# COPY --from=builder /app/store/cakeData.js ./store/cakeData.js

EXPOSE 4000
CMD ["node", "server.js"]