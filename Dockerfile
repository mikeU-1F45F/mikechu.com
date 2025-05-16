# Build stage
FROM denoland/deno:latest AS builder

WORKDIR /app

# Copy application code
COPY . .

# Install dependencies and build the application
RUN deno task build

# Production stage
FROM denoland/deno:latest

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/deno.json ./deno.json
COPY --from=builder /app/deno.lock ./deno.lock

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["run", "-A", "npm:next", "start"]
