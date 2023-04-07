#!/bin/sh
# Replace placeholders in the Nginx config file with actual values
envsubst < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf
# Copy environment variables to the Angular app
#for var in `env`
#do
#    if [[ $var == MY_APP_* ]]
#    then
#        key=$(echo "$var" | awk -F = '{print $1}')
#        value=$(echo "$var" | awk -F = '{print $2}')
#        ng set --global $key=$value
#    fi
#done