const bookingLink = "https://wa.me/390113821947?text=Buonasera%2C%20vorrei%20prenotare%20un%20tavolo%20da%20Osteria%2019%20Torino."

const openingHours = [
  {
    days: "Tuesday - Thursday",
    hours: ["19:00 - 23:00"],
  },
  {
    days: "Friday - Saturday",
    hours: ["19:00 - 00:00"],
  },
  {
    days: "Sunday",
    hours: ["12:30 - 15:00", "19:00 - 22:30"],
  },
  {
    days: "Monday",
    hours: ["Closed"],
  },
]

const infoCards = [
  {
    title: "Address",
    content: ["Via Maria Vittoria 19", "Torino"],
  },
  {
    title: "Phone",
    content: ["+39 011 3821947"],
    href: "tel:+390113821947",
  },
]

const styles = {
  section: {
    backgroundColor: "#1f1f1b",
    color: "#f6f1e8",
  },
  shell: {
    maxWidth: "72rem",
    margin: "0 auto",
    padding: "4.5rem 1.5rem 5rem",
    display: "grid",
    gap: "1.5rem",
  },
  panel: {
    display: "grid",
    gap: "2rem",
    padding: "1.5rem",
    border: "1px solid rgba(246, 241, 232, 0.1)",
    borderRadius: "1.75rem",
    background:
      "linear-gradient(180deg, rgba(246, 241, 232, 0.05) 0%, rgba(246, 241, 232, 0.02) 100%)",
    boxShadow: "0 24px 80px rgba(0, 0, 0, 0.22)",
  },
  intro: {
    display: "grid",
    gap: "1rem",
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
    margin: 0,
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: "clamp(2.2rem, 5vw, 4rem)",
    lineHeight: 1,
    letterSpacing: "-0.04em",
    maxWidth: "10ch",
  },
  lead: {
    margin: 0,
    maxWidth: "36rem",
    color: "rgba(246, 241, 232, 0.78)",
    fontSize: "1rem",
    lineHeight: 1.75,
  },
  content: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
    gap: "1.25rem",
    alignItems: "start",
  },
  card: {
    display: "grid",
    gap: "0.85rem",
    minHeight: "100%",
    padding: "1.25rem",
    borderRadius: "1.4rem",
    backgroundColor: "rgba(246, 241, 232, 0.04)",
    border: "1px solid rgba(246, 241, 232, 0.08)",
  },
  cardTitle: {
    margin: 0,
    color: "#c8a66a",
    fontSize: "0.82rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontWeight: 700,
  },
  cardBody: {
    display: "grid",
    gap: "0.35rem",
    color: "rgba(246, 241, 232, 0.92)",
    lineHeight: 1.7,
  },
  cardLink: {
    color: "#f6f1e8",
    textDecoration: "none",
    fontWeight: 600,
  },
  hoursList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gap: "0.9rem",
  },
  hoursRow: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: "1rem",
    paddingBottom: "0.9rem",
    borderBottom: "1px solid rgba(246, 241, 232, 0.08)",
  },
  hoursDay: {
    fontWeight: 600,
  },
  hoursTimes: {
    textAlign: "right",
    color: "rgba(246, 241, 232, 0.72)",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.9rem",
  },
  primaryAction: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "999px",
    padding: "0.95rem 1.5rem",
    backgroundColor: "#b85c38",
    color: "#f6f1e8",
    textDecoration: "none",
    fontSize: "0.98rem",
    fontWeight: 700,
  },
  secondaryAction: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "999px",
    padding: "0.95rem 1.5rem",
    border: "1px solid rgba(246, 241, 232, 0.24)",
    backgroundColor: "rgba(246, 241, 232, 0.04)",
    color: "#f6f1e8",
    textDecoration: "none",
    fontSize: "0.98rem",
    fontWeight: 700,
  },
  note: {
    margin: 0,
    color: "rgba(246, 241, 232, 0.62)",
    fontSize: "0.92rem",
    lineHeight: 1.6,
  },
}

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.panel}>
          <div style={styles.intro}>
            <p style={styles.eyebrow}>Contact and booking</p>
            <h2 id="contact-heading" style={styles.title}>
              Reserve a table for your next Torino evening
            </h2>
            <p style={styles.lead}>
              Join us for seasonal plates, thoughtful wines, and a dining room
              designed for dates, small groups, and long conversations.
            </p>
          </div>

          <div style={styles.content}>
            {infoCards.map((card) => (
              <article key={card.title} style={styles.card}>
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <div style={styles.cardBody}>
                  {card.content.map((line) =>
                    card.href ? (
                      <a key={line} href={card.href} style={styles.cardLink}>
                        {line}
                      </a>
                    ) : (
                      <span key={line}>{line}</span>
                    ),
                  )}
                </div>
              </article>
            ))}

            <article style={styles.card}>
              <h3 style={styles.cardTitle}>Opening hours</h3>
              <ul style={styles.hoursList}>
                {openingHours.map((entry) => (
                  <li key={entry.days} style={styles.hoursRow}>
                    <span style={styles.hoursDay}>{entry.days}</span>
                    <span style={styles.hoursTimes}>{entry.hours.join(" / ")}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div style={styles.actions}>
            <a href={bookingLink} style={styles.primaryAction}>
              Book on WhatsApp
            </a>
            <a href="tel:+390113821947" style={styles.secondaryAction}>
              Call for reservations
            </a>
          </div>

          <p style={styles.note}>
            Reservations are recommended for Friday and Saturday dinner service.
          </p>
        </div>
      </div>
    </section>
  )
}
