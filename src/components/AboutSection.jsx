const aboutImage =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"

const highlights = [
  "Seasonal produce selected with the rhythm of Piemonte markets",
  "Italian classics reworked with clean presentation and measured elegance",
  "An intimate dining room shaped for long dinners, wine, and conversation",
  "A curated cellar built around local labels and expressive Italian bottles",
]

const styles = {
  section: {
    background:
      "linear-gradient(180deg, #f6f1e8 0%, rgba(246, 241, 232, 0.96) 100%)",
    color: "#1f1f1b",
  },
  shell: {
    maxWidth: "72rem",
    margin: "0 auto",
    padding: "4.5rem 1.5rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
    gap: "2rem",
    alignItems: "center",
  },
  mediaCard: {
    position: "relative",
    overflow: "hidden",
    minHeight: "22rem",
    borderRadius: "1.75rem",
    backgroundColor: "#d8d1c5",
    boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
  },
  image: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(31, 31, 27, 0.08) 0%, rgba(31, 31, 27, 0.38) 100%)",
  },
  imageBadge: {
    position: "absolute",
    left: "1.25rem",
    bottom: "1.25rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    padding: "0.75rem 1rem",
    borderRadius: "999px",
    backgroundColor: "rgba(31, 31, 27, 0.82)",
    color: "#f6f1e8",
    fontSize: "0.88rem",
    letterSpacing: "0.04em",
  },
  content: {
    display: "grid",
    alignContent: "center",
    gap: "1.5rem",
  },
  eyebrow: {
    margin: 0,
    color: "#6f7558",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "0.78rem",
    fontWeight: 700,
  },
  title: {
    margin: 0,
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
    lineHeight: 1,
    letterSpacing: "-0.04em",
    maxWidth: "12ch",
  },
  lead: {
    margin: 0,
    maxWidth: "34rem",
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "rgba(31, 31, 27, 0.78)",
  },
  highlightList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gap: "0.9rem",
  },
  highlightItem: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "0.9rem",
    alignItems: "start",
    paddingBottom: "0.9rem",
    borderBottom: "1px solid rgba(31, 31, 27, 0.1)",
    color: "rgba(31, 31, 27, 0.82)",
    lineHeight: 1.65,
  },
  marker: {
    width: "0.65rem",
    height: "0.65rem",
    borderRadius: "999px",
    marginTop: "0.5rem",
    background:
      "linear-gradient(135deg, #c8a66a 0%, #b85c38 100%)",
    boxShadow: "0 0 0 6px rgba(184, 92, 56, 0.08)",
  },
}

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.mediaCard}>
          <img
            src={aboutImage}
            alt="Warm interior table setting at Osteria 19 Torino"
            style={styles.image}
          />
          <div aria-hidden="true" style={styles.imageOverlay} />
          <div style={styles.imageBadge}>Torino evenings, plated with care</div>
        </div>

        <div style={styles.content}>
          <p style={styles.eyebrow}>About Osteria 19</p>
          <h2 id="about-heading" style={styles.title}>
            Italian tradition, interpreted with a lighter hand
          </h2>
          <p style={styles.lead}>
            Osteria 19 Torino brings together seasonal ingredients, precise
            cooking, and a warm urban mood for dinners that feel intimate,
            polished, and unmistakably Italian.
          </p>

          <ul style={styles.highlightList}>
            {highlights.map((item) => (
              <li key={item} style={styles.highlightItem}>
                <span aria-hidden="true" style={styles.marker} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
