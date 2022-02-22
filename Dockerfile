FROM node:16 as first_image
WORKDIR /app
COPY ["package.json","package-lock.json","./"]
RUN npm -g install npm@latest
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=first_image /app/dist /usr/share/nginx/html


