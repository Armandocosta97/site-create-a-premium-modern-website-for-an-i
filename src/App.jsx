import { useEffect } from "react"
import { HashRouter, Routes, Route, useLocation } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const sectionId = params.get("section")

    if (!sectionId) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      return
    }

    window.requestAnimationFrame(() => {
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    })
  }, [location.pathname, location.search])

  return null
}

export default function App() {
  return (
    <HashRouter>
      <ScrollManager />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
