FROM php-solid-server-base:latest
RUN git clone https://github.com/pdsinterop/php-solid-server /app
WORKDIR /app
RUN git checkout tested
RUN php /install/composer.phar install --no-dev --prefer-dist
COPY site.conf /etc/apache2/sites-enabled/site.conf
EXPOSE 443
