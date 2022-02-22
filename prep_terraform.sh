#!/bin/bash
cd terraform
terraform init
terraform state show 'google_storage_bucket.tf-bucket' 2> temp
return_value=`grep -o "No instance found for the given address!" temp | wc -l`

if [[ $return_value == 0 ]] 
then
    echo "Bucket managed"
else
    echo "Bucket not managed"
    terraform import google_storage_bucket.tf-bucket $1-partnersdemo
    #gsutil mb gs://${1}-neo4j-viz
fi

terraform state pull
terraform apply -auto-approve -var region=$2

cd ..

gcloud builds submit

