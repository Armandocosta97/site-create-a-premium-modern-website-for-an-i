import { useEffect } from "react"

import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"
import HeroSection from "../components/HeroSection"

const styles = {
  main: {
    backgroundColor: "#f6f1e8",
    overflowX: "hidden",
  },
}

export default function Home() {
  useEffect(() => {
    document.title = "Osteria 19 Torino | Contemporary Italian Dining"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover Osteria 19 Torino, a modern osteria with seasonal Italian plates, curated wines, and a warm dining room in the heart of Turin.",
      )
    }
  }, [])

  return (
    <main style={styles.main}>
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <FloatingWhatsAppButton />
    </main>
  )
}
