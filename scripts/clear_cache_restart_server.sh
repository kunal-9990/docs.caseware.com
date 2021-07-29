echo "Clearing laravel sessions..."
sudo find /usr/share/nginx/docs/storage/framework/sessions -type f -name "*" -delete
echo "Clearing laravel cache..."
sudo find /usr/share/nginx/docs/storage/framework/cache -type f  -name "*" -delete
echo "Restarting nginx..."
sudo service nginx restart
echo "Restarting php-fpm..."
sudo service php-fpm restart