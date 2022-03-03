# Partners Demo

## Instructions

[![Run on Google
Cloud](https://deploy.cloud.run/button.svg)](https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https://github.com/mdnurakmal/partnersdemo.git&cloudshell_image=gcr.io/cloudrun/button&shellonly=true)

```
sudo sh run.sh
```

Install NodeJS

Install angular
npm install -g @angular/cli

Install nginx
https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04

npm install
ng build
sudo cp -r $HOME/partnersdemo/dist/. /var/www/html

# Store Credentials in secret manager

# Create Service account for cloud build

# Build and Push docker

docker build -t gcr.io/partnersdemo/web .
docker push gcr.io/partnersdemo/web

gcloud run deploy demofactory --image gcr.io/partnersdemo/web --region us-central1 --platform managed --allow-unauthenticated --port 80

write something here from main bracnh
