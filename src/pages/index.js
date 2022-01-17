import React, { useState, useEffect } from "react"

// import Mickey from "../components/Mickey"
// import MickeyFunctional from "../components/MickeyFunctional"

import Loadable from "@loadable/component";
const Mickey = Loadable(() => import('../components/Mickey'))
const MickeyFunctional = Loadable(() => import('../components/MickeyFunctional'))



const IndexPage = () => {
  const [darkmode, setDarkmode] = useState(false)
  const [withFont, setWithFont] = useState(true)
  const [show, setShow] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (typeof window !== undefined) {
      const getScrollY = () => setScrollY(window.pageYOffset)
      window.addEventListener("scroll", getScrollY)
      getScrollY()

      return () => window.removeEventListener("scroll", getScrollY)
    }
  }, [])

  return (
    <main style={{height: "200vh"}}>
      <h1>p5?</h1>
      <button
        onClick={() => setDarkmode(!darkmode)}
      >
        {darkmode ? "Darkmode" : "Lightmode"}
      </button>

      {!show && <button
        onClick={() => setWithFont(!withFont)}
      >
        Preload font: {withFont ? "Preloading" : "No font preloaded"}
      </button>}

      <button
        onClick={() => setShow(!show)}
      >
        Currently showing: {show ? "Class Component" : "Functional Component"}
      </button>
      <p>Index.jsx: {scrollY}</p>
      {show && <Mickey
        scrollY={scrollY}
        darkmode={darkmode}
      />}
      {!show && <MickeyFunctional
        scrollY={scrollY}
        withFont={withFont}
        darkmode={darkmode}
      />}
    </main>
  )
}

export default IndexPage
