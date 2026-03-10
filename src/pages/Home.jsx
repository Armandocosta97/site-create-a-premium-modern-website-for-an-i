import HeroSection from "../components/HeroSection"

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section id="about" aria-labelledby="about-heading">
        <div>
          <h2 id="about-heading">A contemporary osteria shaped by the season</h2>
          <p>
            Osteria 19 Torino brings together Italian tradition, refined
            presentation, and a warm city atmosphere for dinner in the center
            of Torino.
          </p>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading">
        <div>
          <h2 id="contact-heading">Book your evening</h2>
          <p>Via Maria Vittoria 19, Torino</p>
          <p>
            <a href="tel:+390113821947">+39 011 3821947</a>
          </p>
        </div>
      </section>
    </main>
  )
}
