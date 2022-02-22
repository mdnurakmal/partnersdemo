terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 3.53"
    }
  }
}

terraform {
  backend "gcs" {
    bucket  = "<PLACEHOLDER_BUCKET>"
    prefix  = "terraform/state"
  }
}

# Create a GCS Bucket
resource "google_storage_bucket" "tf-bucket" {
  name          = "${local.project}-partnersdemo"
  force_destroy = true
  versioning {
    enabled = true
  }

  depends_on = [google_project_service.compute]
}

provider "google" {
    project     = "<PLACEHOLDER_PROJECTID>"
    region      = var.region
}

data "google_project" "project" {
}


locals {
  project = data.google_project.project.project_id
  service_name   = "partnersdemo"
  partnersdemo_sa  = "serviceAccount:${google_service_account.partnersdemo_sa.email}"
}