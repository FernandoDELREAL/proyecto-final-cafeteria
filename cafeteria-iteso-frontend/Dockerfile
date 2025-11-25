FROM nginx:alpine

# Elimina el default
RUN rm /etc/nginx/conf.d/default.conf

# Copia tu configuración
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia archivos estáticos
COPY . /usr/share/nginx/html

EXPOSE 80
