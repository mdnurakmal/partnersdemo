FROM node:16 as first_image
WORKDIR /app
COPY ["package.json","package-lock.json","./"]
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
ENV PORT 80
EXPOSE 80
COPY --from=first_image /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
