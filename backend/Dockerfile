# syntax=docker/dockerfile:1

# Frontend build
FROM node:20-alpine AS frontend-build
WORKDIR /workspace/frontend
COPY frontend/package.json ./
COPY frontend/package-lock.json ./
COPY frontend/vite.config.js ./
COPY frontend/public ./public
COPY frontend/src ./src
ENV NODE_OPTIONS=--max-old-space-size=4096
ENV DEBUG=vite:*
RUN npm ci
RUN npm run build 2>&1 | tee build.log

# Backend build
FROM maven:3.9.4-eclipse-temurin-17 AS backend-build
WORKDIR /workspace/backend
COPY backend/pom.xml ./
COPY backend/mvnw ./
COPY backend/.mvn .mvn
COPY backend/src ./src
RUN chmod +x mvnw
RUN ./mvnw -B -DskipTests package

# Runtime image with nginx and Java
FROM eclipse-temurin:17-jre-jammy AS runtime
RUN apt-get update && apt-get install -y --no-install-recommends nginx gettext-base && rm -rf /var/lib/apt/lists/*
COPY --from=frontend-build /workspace/frontend/dist /usr/share/nginx/html
COPY --from=backend-build /workspace/backend/target/backend-0.0.1-SNAPSHOT.jar /app/app.jar
COPY backend/nginx.conf.template /etc/nginx/conf.d/default.conf.template
EXPOSE 80
ENV PORT 8080
CMD ["sh", "-c", "envsubst '$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && java -jar /app/app.jar & nginx -g 'daemon off;' "]
