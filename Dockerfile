FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY ./ ./
EXPOSE 4000
RUN npm i
CMD ["npm", "start"]
