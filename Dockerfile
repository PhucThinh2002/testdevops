FROM node:20.15.0
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "--es-module-specifier-resolution=node", "js/demo.js"]