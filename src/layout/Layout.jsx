import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/?section=about" },
  { label: "Contact", to: "/?section=contact" },
]

const styles = {
  header: (isSolid) => ({
    position: "sticky",
    top: 0,
    zIndex: 40,
    backdropFilter: "blur(18px)",
    backgroundColor: isSolid ? "rgba(31, 31, 27, 0.92)" : "rgba(31, 31, 27, 0.18)",
    borderBottom: isSolid
      ? "1px solid rgba(246, 241, 232, 0.12)"
      : "1px solid transparent",
    transition:
      "background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
    boxShadow: isSolid ? "0 16px 40px rgba(10, 10, 8, 0.18)" : "none",
  }),
  shell: {
    maxWidth: "72rem",
    margin: "0 auto",
    padding: "0.9rem clamp(1rem, 4vw, 1.5rem)",
  },
  navRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  },
  brand: {
    display: "inline-flex",
    flexDirection: "column",
    gap: "0.15rem",
    color: "#f6f1e8",
  },
  brandName: {
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: "1.15rem",
    fontWeight: 700,
    letterSpacing: "-0.03em",
  },
  brandMeta: {
    fontSize: "0.7rem",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    color: "rgba(246, 241, 232, 0.74)",
  },
  menuButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "3rem",
    minHeight: "3rem",
    borderRadius: "999px",
    border: "1px solid rgba(246, 241, 232, 0.16)",
    backgroundColor: "rgba(246, 241, 232, 0.08)",
    color: "#f6f1e8",
    fontSize: "0.9rem",
    fontWeight: 700,
    cursor: "pointer",
  },
  nav: (isOpen) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "0.6rem",
    width: "100%",
    paddingTop: isOpen ? "0.85rem" : 0,
  }),
  navDesktop: {
    width: "auto",
    paddingTop: 0,
  },
  navLink: (isActive) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "2.75rem",
    padding: "0.72rem 1rem",
    borderRadius: "999px",
    color: "#f6f1e8",
    backgroundColor: isActive ? "rgba(246, 241, 232, 0.14)" : "transparent",
    border: "1px solid rgba(246, 241, 232, 0.12)",
    fontSize: "0.92rem",
    fontWeight: 600,
    lineHeight: 1,
  }),
  footer: {
    backgroundColor: "#161613",
    color: "#f6f1e8",
  },
  footerShell: {
    maxWidth: "72rem",
    margin: "0 auto",
    padding:
      "clamp(2.5rem, 8vw, 4rem) clamp(1rem, 4vw, 1.5rem) calc(clamp(2.5rem, 8vw, 4rem) + 4.5rem)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 14rem), 1fr))",
    gap: "1.5rem",
  },
  footerTitle: {
    margin: 0,
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: "1.5rem",
    letterSpacing: "-0.03em",
  },
  footerText: {
    margin: 0,
    lineHeight: 1.8,
    color: "rgba(246, 241, 232, 0.76)",
  },
  footerLabel: {
    margin: "0 0 0.5rem",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "0.78rem",
    color: "#c8a66a",
    fontWeight: 700,
  },
  footerLink: {
    color: "#f6f1e8",
    textDecoration: "none",
  },
}

function isNavigationActive(item, location) {
  if (item.to === "/") {
    return location.pathname === "/" && !location.search
  }

  if (item.to === "/gallery") {
    return location.pathname === "/gallery"
  }

  return location.pathname === "/" && location.search === item.to.slice(1)
}

export default function Layout({ children }) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSolid, setIsSolid] = useState(false)
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : false,
  )

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    updateViewport()
    window.addEventListener("resize", updateViewport)

    return () => {
      window.removeEventListener("resize", updateViewport)
    }
  }, [])

  useEffect(() => {
    const updateHeader = () => {
      setIsSolid(window.scrollY > 24 || location.pathname !== "/")
    }

    updateHeader()
    window.addEventListener("scroll", updateHeader, { passive: true })

    return () => {
      window.removeEventListener("scroll", updateHeader)
    }
  }, [location.pathname])

  const showNav = isDesktop || isMenuOpen

  return (
    <>
      <header style={styles.header(isSolid)}>
        <div style={styles.shell}>
          <div style={styles.navRow}>
            <Link to="/" aria-label="Osteria 19 Torino home" style={styles.brand}>
              <span style={styles.brandName}>Osteria 19 Torino</span>
              <span style={styles.brandMeta}>Contemporary Italian dining</span>
            </Link>

            <button
              type="button"
              aria-expanded={showNav}
              aria-controls="main-navigation"
              aria-label={showNav ? "Close navigation" : "Open navigation"}
              onClick={() => setIsMenuOpen((current) => !current)}
              style={{
                ...styles.menuButton,
                display: isDesktop ? "none" : "inline-flex",
              }}
            >
              Menu
            </button>

            <nav
              id="main-navigation"
              aria-label="Main navigation"
              style={{
                ...(showNav ? styles.nav(true) : { display: "none" }),
                ...(isDesktop ? styles.navDesktop : {}),
              }}
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  style={styles.navLink(isNavigationActive(item, location))}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {children}

      <footer style={styles.footer}>
        <div style={styles.footerShell}>
          <div>
            <h2 style={styles.footerTitle}>Osteria 19 Torino</h2>
            <p style={styles.footerText}>
              Seasonal Italian plates, curated wines, and a warm dining room in
              the heart of Torino.
            </p>
          </div>

          <div>
            <p style={styles.footerLabel}>Visit</p>
            <p style={styles.footerText}>Via Maria Vittoria 19</p>
            <p style={styles.footerText}>Torino</p>
          </div>

          <div>
            <p style={styles.footerLabel}>Contact</p>
            <p style={styles.footerText}>
              <a href="tel:+390113821947" style={styles.footerLink}>
                +39 011 3821947
              </a>
            </p>
            <p style={styles.footerText}>
              <a href="https://wa.me/390113821947" style={styles.footerLink}>
                WhatsApp reservations
              </a>
            </p>
          </div>

          <div>
            <p style={styles.footerLabel}>Hours</p>
            <p style={styles.footerText}>Tue-Thu 19:00-23:00</p>
            <p style={styles.footerText}>Fri-Sat 19:00-00:00</p>
            <p style={styles.footerText}>Sun 12:30-15:00 / 19:00-22:30</p>
            <p style={styles.footerText}>Mon closed</p>
          </div>
        </div>
      </footer>
    </>
  )
}
