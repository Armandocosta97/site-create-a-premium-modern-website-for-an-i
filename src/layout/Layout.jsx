import { Link } from "react-router-dom"

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/?section=about" },
  { label: "Contact", to: "/?section=contact" },
]

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav aria-label="Main navigation">
          {navigationItems.map((item) => (
            <Link key={item.label} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>© Website</p>
      </footer>
    </>
  )
}
