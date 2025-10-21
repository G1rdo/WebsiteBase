FROM nginx:1.29.2

WORKDIR /app
RUN apt-get update -y

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
#COPY ./nginx/src/* /usr/share/nginx/html
ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx","-g","daemon off;" ]
