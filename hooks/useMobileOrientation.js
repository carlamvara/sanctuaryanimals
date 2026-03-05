import { useEffect, useState } from "react"

export function useMobileOrientation() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLandscape, setIsLandscape] = useState(true)

  useEffect(() => {
    const check = () => {
      const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      setIsMobile(mobile)
      setIsLandscape(window.innerWidth > window.innerHeight)
    }

    check()
    window.addEventListener("resize", check)
    window.addEventListener("orientationchange", check)

    return () => {
      window.removeEventListener("resize", check)
      window.removeEventListener("orientationchange", check)
    }
  }, [])

  return { isMobile, isLandscape }
}
