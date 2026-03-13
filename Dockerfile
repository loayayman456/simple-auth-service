# 1. Choose the correct base image (Alpine variant)
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy dependency manifests FIRST (layer caching)
COPY package*.json ./

# 4. Install production dependencies only
RUN npm ci

# 5. Copy the rest of the application code
COPY . .

# 6. Switch to non-root user for security
USER node

# 7. Add a health check
HEALTHCHECK --interval=30s CMD node -e "require('./src/index.js')"

# 8. Define the startup command
CMD ["node", "src/index.js"]