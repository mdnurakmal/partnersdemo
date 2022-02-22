#!/bin/bash
gcloud config set project $1
echo gs://${1}-partnersdemo/terraform/state/default.tfstate
gsutil -q stat gs://${1}-partnersdemo/terraform/state/default.tfstate
return_value=$?
if [[ $return_value == 0 ]] 
then
    echo "Bucket exist"
else
    echo "Creating new bucket..."
    gsutil mb gs://${1}-partnersdemo
fi