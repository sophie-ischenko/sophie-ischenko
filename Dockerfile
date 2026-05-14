# Build Stage
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve Stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Falls du Routing (SPA) nutzt, kopiere deine nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf