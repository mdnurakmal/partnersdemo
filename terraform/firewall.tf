resource "google_compute_firewall" "partnersdemo-ingress" {
  name    = "artnersdemo-ingress"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["8080"]
  }

  direction = "INGRESS"


}

resource "google_compute_firewall" "partnersdemo-egress" {
  name    = "partnersdemo-egress"
  network = "default"

  allow {
    protocol = "tcp"
        ports    = ["8080"]
  }

  direction = "EGRESS"


}