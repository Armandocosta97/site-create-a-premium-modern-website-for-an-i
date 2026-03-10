const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary Italian restaurant dining room with warm pendant lighting",
    category: "Dining room",
    title: "Warm urban interiors",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant restaurant table setting prepared for evening service",
    category: "Table setting",
    title: "Evening table detail",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    alt: "Refined plated pasta served in a modern Italian restaurant",
    category: "Pasta",
    title: "Signature pasta plates",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    alt: "Intimate restaurant interior with candlelit tables and bar seating",
    category: "Atmosphere",
    title: "Dinner mood in Torino",
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    alt: "Guests sharing dinner and wine in a stylish contemporary restaurant",
    category: "Hospitality",
    title: "Designed for long dinners",
  },
  {
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern plated seafood course with refined presentation",
    category: "Main course",
    title: "Seasonal plates with precision",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    alt: "Restaurant bar with wine glasses and warm ambient lighting",
    category: "Wine and cocktails",
    title: "Curated bottles and aperitivi",
  },
  {
    src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant dessert plated with modern presentation and rich textures",
    category: "Dessert",
    title: "A polished final course",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    alt: "Restaurant interior corner with soft lighting and contemporary decor",
    category: "Interior detail",
    title: "Quiet corners and soft light",
  },
]

const styles = {
  section: {
    background:
      "linear-gradient(180deg, rgba(246, 241, 232, 0.98) 0%, #ece3d6 100%)",
    color: "#1f1f1b",
  },
  shell: {
    maxWidth: "72rem",
    margin: "0 auto",
    padding: "0 1.5rem 5rem",
    display: "grid",
    gap: "2rem",
  },
  intro: {
    display: "grid",
    gap: "0.9rem",
    maxWidth: "38rem",
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
    fontSize: "clamp(2rem, 4vw, 3.4rem)",
    lineHeight: 1,
    letterSpacing: "-0.04em",
  },
  lead: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "rgba(31, 31, 27, 0.74)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
    gap: "1rem",
  },
  card: {
    position: "relative",
    overflow: "hidden",
    minHeight: "21rem",
    borderRadius: "1.6rem",
    backgroundColor: "#d9d1c4",
    boxShadow: "0 24px 80px rgba(31, 31, 27, 0.12)",
  },
  image: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(31, 31, 27, 0.04) 0%, rgba(31, 31, 27, 0.72) 100%)",
  },
  caption: {
    position: "absolute",
    inset: "auto 0 0 0",
    padding: "1.25rem",
    display: "grid",
    gap: "0.4rem",
    color: "#f6f1e8",
  },
  category: {
    margin: 0,
    color: "#c8a66a",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "0.74rem",
    fontWeight: 700,
  },
  captionTitle: {
    margin: 0,
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: "1.35rem",
    lineHeight: 1.1,
  },
}

export default function GalleryGridSection() {
  return (
    <section
      id="gallery-grid"
      aria-labelledby="gallery-grid-heading"
      style={styles.section}
    >
      <div style={styles.shell}>
        <div style={styles.intro}>
          <p style={styles.eyebrow}>Gallery</p>
          <h2 id="gallery-grid-heading" style={styles.title}>
            Interiors, plates, and the pace of service
          </h2>
          <p style={styles.lead}>
            A visual edit of the dining room, signature dishes, and evening
            atmosphere that shape Osteria 19 Torino.
          </p>
        </div>

        <div style={styles.grid}>
          {galleryImages.map((image) => (
            <figure key={image.src} style={styles.card}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={styles.image}
              />
              <div aria-hidden="true" style={styles.overlay} />
              <figcaption style={styles.caption}>
                <p style={styles.category}>{image.category}</p>
                <p style={styles.captionTitle}>{image.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
