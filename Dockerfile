FROM php:8.2-fpm
WORKDIR /var/www

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    git unzip libpq-dev libzip-dev curl \
    && docker-php-ext-install pdo pdo_mysql zip

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copiar arquivos da aplicação
COPY . .

# Instalar dependências do Laravel
RUN composer install --no-dev --optimize-autoloader

# Configurar permissões
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Porta padrão
EXPOSE 9000
CMD ["php-fpm"]
