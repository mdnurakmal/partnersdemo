# Create a service account
resource "google_service_account" "partnersdemo_sa" {
  account_id   = "partnersdemo-sa-id"
  display_name = "partnersdemo SA"
}