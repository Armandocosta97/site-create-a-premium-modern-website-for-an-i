const bookingLink =
  "https://wa.me/390113821947?text=Buonasera%2C%20vorrei%20prenotare%20un%20tavolo%20da%20Osteria%2019%20Torino."

const styles = {
  link: {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    zIndex: 30,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.85rem 1rem",
    borderRadius: "999px",
    backgroundColor: "#25d366",
    color: "#102417",
    textDecoration: "none",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
    fontSize: "0.95rem",
    fontWeight: 700,
    lineHeight: 1,
  },
  icon: {
    width: "2.1rem",
    height: "2.1rem",
    borderRadius: "999px",
    display: "grid",
    placeItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    color: "#ffffff",
    fontSize: "1.1rem",
    fontWeight: 800,
  },
  label: {
    display: "block",
    color: "#102417",
  },
}

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={bookingLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Book a table on WhatsApp"
      style={styles.link}
    >
      <span aria-hidden="true" style={styles.icon}>
        W
      </span>
      <span style={styles.label}>Book on WhatsApp</span>
    </a>
  )
}
