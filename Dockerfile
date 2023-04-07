# Build the app
FROM node:18.15.0-alpine3.17 as build
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Deploy the app
FROM nginx:1.23.4-alpine
COPY --from=build /app/dist/etrello-client /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY ./env.sh /env.sh
CMD ["sh", "-c", "/env.sh && nginx -g 'daemon off;'"]