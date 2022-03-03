GOOGLE_PROJECT_ID=$(gcloud config list --format='value(core.project)') # YOUR GCP PROJECT ID GOES HERE
CLOUD_RUN_SERVICE=angular-cloud-run # NAME OF YOUR CLOUD RUN SERVICE
# JWT_SECRET=secret-password

# gcloud services enable compute.googleapis.com sqladmin.googleapis.com run.googleapis.com \
#   containerregistry.googleapis.com cloudbuild.googleapis.com

# gcloud iam service-accounts list
# Get the email of the Compute Engine Service Account
# gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
#   --member="serviceAccount:SERVICE_ACCOUNT_EMAIL" \
#   --role="roles/cloudsql.client"

gcloud builds submit -t gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE .


gcloud run deploy $CLOUD_RUN_SERVICE --image gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
  --platform managed \
  --region=us-central1 \
  --allow-unauthenticated \
  --port=80 \
#   --set-env-vars JWT_SECRET=$JWT_SECRET\


