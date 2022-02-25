import { useEffect } from "react"

const useCookieConsent = () => {

  const protector = typeof window !== undefined && process.env.NODE_ENV !== "development"

  const grantCookie = () => {
    if (protector) {
      window.gtag("consent", "update", { "analytics_storage": "granted" })
    }
  }

  const denyCookie = () => {
    if (protector) {
      window.gtag("consent", "update", { "analytics_storage": "denied" })
    }
  }

  useEffect(() => {
    console.log("Default cookie running!")
    if (protector) {
      window.gtag("consent", "default", { "analytics_storage": "denied" })
    }
  }, [])

return { grantCookie, denyCookie }
}

export default useCookieConsent
