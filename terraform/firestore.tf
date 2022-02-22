resource "google_firestore_document" "partnersdemo-db" {
  project     = local.project
  collection  = "demos"
  document_id = "demos-test"
  fields      = "{\"something\":{\"mapValue\":{\"fields\":{\"akey\":{\"stringValue\":\"avalue\"}}}}}"
}