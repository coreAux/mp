import { useEffect, useState, useRef } from "react"

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0)
  const scrollYRef = useRef()
  scrollYRef.current = scrollY

  useEffect(() => {
    if (typeof window !== undefined) {
      const getScrollY = () => setScrollY(window.pageYOffset)
      window.addEventListener("scroll", getScrollY)
      getScrollY()

      return () => window.removeEventListener("scroll", getScrollY)
    }
  }, [])

  return scrollYRef.current
}

export default useScrollY
