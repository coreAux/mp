import React, { useEffect, useState, createContext } from "react"

export const ModalContext = createContext()

const ModalHolder = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalComponent, setModalComponent] = useState()

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        modalComponent,
        setModalComponent
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const DarkmodeContext = createContext()

const DarkmodeHolder = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false)
  const [delayedDarkmode, setDelayedDarkmode] = useState(false)


  // Deals with mounting/unmounting components in the same rhytm as
  // would normally be available with CSS
  useEffect(() => {
    const delayedDarkmodeFunction = async () => {
      const promise = new Promise((resolve) => {
        setTimeout(resolve, 300, darkmode)
      })
      const newDarkmode = await promise
      setDelayedDarkmode(newDarkmode)
    }

    delayedDarkmodeFunction()
  }, [darkmode])

  const toggleDarkmode = (event) => {
    if (event.key === "Tab" || event.key === "Shift") {
      // Avoid anything happening when tabbing...
    } else {
      setDarkmode(!darkmode)
      setTimeout(() => {
        document.documentElement.classList.toggle("darkmode")
      }, 300)
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      if (darkmode) {
        document.querySelector("meta[name='theme-color']").setAttribute("content","#111015")
      } else if (!darkmode) {
        document.querySelector("meta[name='theme-color']").setAttribute("content","#f1f0f5")
      }
    }
  }, [darkmode])

  useEffect(() => {
    if (typeof window !== undefined) {
      const initDarkmode = !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches

      setDarkmode(initDarkmode)
      if (initDarkmode) {
        document.documentElement.classList.add("darkmode")
      } else if (!initDarkmode) {
        document.documentElement.classList.remove("darkmode")
      }
    }
  }, [])

  return (
    <DarkmodeContext.Provider
      value={{
        darkmode,
        toggleDarkmode,
        delayedDarkmode
      }}
    >
      {children}
    </DarkmodeContext.Provider>
  )
}

export const ContrastmodeContext = createContext()

const ContrastmodeHolder = ({ children }) => {
  const [contrastmode, setContrastmode] = useState(false)

  const toggleContrastmode = (event) => {
    if (event.key === "Tab" || event.key === "Shift") {
      // Avoid anything happening when tabbing...
    } else {
      setContrastmode(!contrastmode)
      document.documentElement.classList.toggle("contrastmode")
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      const initContrastmode = !!window.matchMedia && window.matchMedia("(prefers-contrast: more)").matches

      setContrastmode(initContrastmode)
      if (initContrastmode) {
        document.documentElement.classList.add("contrastmode")
      } else if (!initContrastmode) {
        document.documentElement.classList.remove("constrastmode")
      }
    }
  }, [])

  return (
    <ContrastmodeContext.Provider
      value={{
        contrastmode,
        toggleContrastmode
      }}
    >
      {children}
    </ContrastmodeContext.Provider>
  )
}

const Contexts = ({ children }) => (
  <ModalHolder>
    <DarkmodeHolder>
      <ContrastmodeHolder>
        {children}
      </ContrastmodeHolder>
    </DarkmodeHolder>
  </ModalHolder>
)

export default Contexts
