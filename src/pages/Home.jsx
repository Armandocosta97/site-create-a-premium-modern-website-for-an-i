export default function Home() {
  return (
    <main>
      <section id="hero" aria-labelledby="home-hero-heading">
        <div>
          <p>Osteria contemporanea a Torino</p>
          <h1 id="home-hero-heading">Modern Italian dining with soul</h1>
          <p>
            Seasonal ingredients, elegant plates, and a warm atmosphere in the
            heart of Torino.
          </p>
          <div>
            <a href="#contact">Book a table</a>
            <a href="tel:+390113821947">Call the restaurant</a>
          </div>
        </div>
      </section>

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
