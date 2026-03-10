import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"
import HeroSection from "../components/HeroSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <FloatingWhatsAppButton />
    </main>
  )
}
