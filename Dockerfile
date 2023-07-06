FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3333
CMD node index.js