#!/bin/bash

git pull
ng build 
sudo cp -r $HOME/partnersdemo/dist/. /var/www/html