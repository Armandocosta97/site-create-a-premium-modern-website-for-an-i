const bookingLink =
  "https://wa.me/390113821947?text=Buonasera%2C%20vorrei%20prenotare%20un%20tavolo%20da%20Osteria%2019%20Torino."

const styles = {
  link: {
    position: "fixed",
    right: "clamp(0.75rem, 3vw, 1rem)",
    bottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)",
    zIndex: 30,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    maxWidth: "calc(100vw - 1.5rem)",
    padding: "0.8rem 0.95rem",
    borderRadius: "999px",
    backgroundColor: "#25d366",
    color: "#102417",
    textDecoration: "none",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
    fontSize: "clamp(0.88rem, 2.8vw, 0.95rem)",
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
    whiteSpace: "nowrap",
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
