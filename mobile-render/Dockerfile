FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json src/
RUN npm ci
CMD ["npm", "start"]
EXPOSE $MOBILE_RENDER_PORT