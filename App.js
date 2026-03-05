import { useEffect } from "react"
import MapScene from "./MapScene"

function App() {

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const prevent = e => e.preventDefault()
    document.addEventListener("touchmove", prevent, { passive: false })

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("touchmove", prevent)
    }
  }, [])

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#000" }}>
      <MapScene />
    </div>
  )
}

export default App;
