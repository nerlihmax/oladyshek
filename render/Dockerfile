FROM node:18
WORKDIR /app
COPY . .
RUN npm ci --include-dev
CMD ["npm", "start"]
EXPOSE $PORT
