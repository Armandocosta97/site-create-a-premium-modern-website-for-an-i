const backgroundImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    minHeight: "100svh",
    display: "flex",
    alignItems: "stretch",
    backgroundColor: "#1f1f1b",
    color: "#f6f1e8",
  },
  media: {
    position: "absolute",
    inset: 0,
    backgroundImage: `linear-gradient(180deg, rgba(16, 16, 14, 0.48) 0%, rgba(16, 16, 14, 0.76) 56%, rgba(16, 16, 14, 0.92) 100%), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: "scale(1.04)",
  },
  glow: {
    position: "absolute",
    inset: "auto -15% -25% auto",
    width: "clamp(14rem, 32vw, 22rem)",
    height: "clamp(14rem, 32vw, 22rem)",
    borderRadius: "999px",
    background:
      "radial-gradient(circle, rgba(200, 166, 106, 0.34) 0%, rgba(200, 166, 106, 0) 72%)",
    pointerEvents: "none",
  },
  content: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "72rem",
    margin: "0 auto",
    padding:
      "clamp(6.5rem, 14vw, 8.5rem) clamp(1rem, 4vw, 1.5rem) clamp(3.5rem, 8vw, 4.5rem)",
    display: "grid",
    alignItems: "end",
  },
  copy: {
    width: "100%",
    maxWidth: "40rem",
    textAlign: "left",
  },
  eyebrow: {
    margin: 0,
    color: "#c8a66a",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "0.78rem",
    fontWeight: 700,
  },
  title: {
    margin: "1rem 0 0",
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: "clamp(2.85rem, 10vw, 6rem)",
    lineHeight: 0.94,
    letterSpacing: "-0.04em",
    maxWidth: "9ch",
  },
  subtitle: {
    margin: "1.5rem 0 0",
    maxWidth: "34rem",
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    lineHeight: 1.7,
    color: "rgba(246, 241, 232, 0.88)",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.9rem",
    marginTop: "2rem",
  },
  primaryAction: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: 0,
    borderRadius: "999px",
    flex: "1 1 14rem",
    minHeight: "3.25rem",
    padding: "0.95rem 1.5rem",
    backgroundColor: "#b85c38",
    color: "#f6f1e8",
    textDecoration: "none",
    fontSize: "0.98rem",
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "center",
  },
  secondaryAction: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "999px",
    flex: "1 1 14rem",
    minHeight: "3.25rem",
    padding: "0.95rem 1.5rem",
    border: "1px solid rgba(246, 241, 232, 0.42)",
    color: "#f6f1e8",
    backgroundColor: "rgba(246, 241, 232, 0.08)",
    fontSize: "0.98rem",
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "center",
    textDecoration: "none",
  },
  details: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem 1.5rem",
    marginTop: "1.5rem",
    color: "rgba(246, 241, 232, 0.74)",
    fontSize: "clamp(0.88rem, 2vw, 0.95rem)",
    lineHeight: 1.6,
  },
}

export default function HeroSection() {
  return (
    <section id="hero" aria-labelledby="home-hero-heading" style={styles.section}>
      <div aria-hidden="true" style={styles.media} />
      <div aria-hidden="true" style={styles.glow} />

      <div style={styles.content}>
        <div style={styles.copy}>
          <p style={styles.eyebrow}>Osteria contemporanea a Torino</p>
          <h1 id="home-hero-heading" style={styles.title}>
            Modern Italian dining with soul
          </h1>
          <p style={styles.subtitle}>
            Seasonal ingredients, elegant plates, and a warm atmosphere in the
            heart of Torino.
          </p>

          <div style={styles.actions}>
            <a href="#contact" style={styles.primaryAction}>
              Book a table
            </a>

            <a href="tel:+390113821947" style={styles.secondaryAction}>
              Call the restaurant
            </a>
          </div>

          <div style={styles.details}>
            <span>Via Maria Vittoria 19, Torino</span>
            <span>Tue-Sun dinner service</span>
          </div>
        </div>
      </div>
    </section>
  )
}
