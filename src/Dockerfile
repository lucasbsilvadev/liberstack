FROM node:18-alpine AS build

WORKDIR /app

# copy imagens vitais de config
COPY package*.json ./

# dependências
RUN npm install --legacy-peer-deps

# refaz a imagem
COPY . .

# gera o build no servidor
RUN npm run build

# produção
FROM nginx:stable-alpine

# copia o build anterior para a pasta no nginx
COPY --from=build /app/build /usr/share/nginx/html

# expõe a porta onde o app roda 
EXPOSE 80

# define cmd pra start
CMD ["nginx", "-g", "daemon off;"]