export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav aria-label="Main navigation">
          <a href="#/">Home</a>
          <a href="#/gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>© Website</p>
      </footer>
    </>
  )
}
