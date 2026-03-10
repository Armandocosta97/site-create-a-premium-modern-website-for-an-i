import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />

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
