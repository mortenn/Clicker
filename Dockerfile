# -----------------------------
# Build stage
# -----------------------------
FROM node:20-bookworm AS builder

# Install build tools
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        make \
        gzip && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy dependency manifests first for better layer caching
COPY package*.json ./

# Copy application source
COPY . .

# Build the site
RUN make

# -----------------------------
# Bundle stage
# -----------------------------
FROM busybox:latest

# Copy built site
COPY --from=builder /app/www/ /assets/
