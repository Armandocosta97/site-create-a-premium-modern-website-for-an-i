import { useEffect } from "react"

import GalleryGridSection from "../components/Gallery-gridSection"

const styles = {
  main: {
    backgroundColor: "#f6f1e8",
    color: "#1f1f1b",
  },
  hero: {
    maxWidth: "72rem",
    margin: "0 auto",
    padding: "7.5rem 1.5rem 3rem",
  },
  copy: {
    maxWidth: "38rem",
    display: "grid",
    gap: "1rem",
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
    fontSize: "clamp(3rem, 8vw, 5rem)",
    lineHeight: 0.96,
    letterSpacing: "-0.05em",
  },
  lead: {
    margin: 0,
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "rgba(31, 31, 27, 0.76)",
  },
}

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Osteria 19 Torino"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Browse the Osteria 19 Torino gallery for a look at the dining room, plated dishes, and the refined evening atmosphere of our contemporary restaurant.",
      )
    }
  }, [])

  return (
    <main style={styles.main}>
      <section aria-labelledby="gallery-title" style={styles.hero}>
        <div style={styles.copy}>
          <p style={styles.eyebrow}>Osteria 19 Torino</p>
          <h1 id="gallery-title" style={styles.title}>
            Gallery
          </h1>
          <p style={styles.lead}>
            A first look at the dining room, the evening mood, and the plated
            details that define our contemporary osteria in Torino.
          </p>
        </div>
      </section>
      <GalleryGridSection />
    </main>
  )
}
