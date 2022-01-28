import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { GlobalStyle, smallBreakPoint } from "../styles"
import Contexts from "./Contexts"
import Modal from "./Modal"
import Nav from "./Nav"
import Footer from "./Footer"

const LayoutWrapper = styled.div`
  // padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
`

const Main = styled.main`
  // padding: 100px 20px 0;
  padding: 100px 0 0;
  min-height: calc(100vh - 100px);
  transition: padding .3s;

  @media (max-width: ${smallBreakPoint}px) {
    // padding: 20px 20px 0;
    padding: 20px 0 0;
  }
`

const Layout = ({ children, ...props }) => {
  const [darkmode, setDarkmode] = useState(false)
  const [contrastmode, setContrastmode] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // console.log("props: ", props)

  const toggleDarkmode = (event) => {
    if (event.key === "Tab" || event.key === "Shift") {
      // Avoid anything happening when tabbing...
    } else {
      setDarkmode(!darkmode)
      document.documentElement.classList.toggle("darkmode")
    }
  }

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
      const initDarkmode = !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches

      setDarkmode(initDarkmode)
      if (initDarkmode) {
        document.documentElement.classList.add("darkmode")
      } else if (!initDarkmode) {
        document.documentElement.classList.remove("darkmode")
      }
    }
  }, [])

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

  useEffect(() => {
    if (typeof window !== undefined) {
      const getScrollY = () => setScrollY(window.pageYOffset)
      window.addEventListener("scroll", getScrollY)
      getScrollY()

      return () => window.removeEventListener("scroll", getScrollY)
    }
  }, [])


  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { darkmode, scrollY, ...props })
    }
    return child
  })

  return (
    <Contexts>
      <LayoutWrapper>
        <GlobalStyle />

        <Modal />

        <Nav
          darkmode={darkmode}
          toggleDarkmode={toggleDarkmode}
          contrastmode={contrastmode}
          toggleContrastmode={toggleContrastmode}
        />

        <Main>
          {childrenWithProps}
        </Main>

        <Footer />
      </LayoutWrapper>
    </Contexts>
  )
}

export default Layout
