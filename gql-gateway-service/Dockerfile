FROM node:18-alpine as build
WORKDIR /app
ENV NODE_ENV=build
COPY . .
RUN npm ci
RUN npm run generate:gql

FROM node:18-alpine as production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build src/ proto-gen/ proto/ gql-gen.ts package.json package-lock.json ./ 
RUN npm ci
CMD ["npm", "start"]
EXPOSE $MOBILE_RENDER_PORT