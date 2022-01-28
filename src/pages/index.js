import React from "react"

import { SafeArea, Emoji } from "../styles"

import SEOComponent from "../components/SEOComponent"
import Loadable from "@loadable/component"
const Mickey = Loadable(() => import("../components/Mickey"))

const IndexPage = ({ scrollY, darkmode }) => {
  const [windowWidth, setWindowWidth] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(0)

  React.useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <SEOComponent
        title="Mickey"
        description="MaMickster..."
      />
      <div
        style={{
          display: "grid",
          placeItems: "center",
          overflow: "hidden"
        }}
      >

        <div
          style={{
            height: "75vh",
            gridArea: "1 / 1 / auto / auto"
          }}
        >
          <Mickey
            windowWidth={windowWidth}
            windowHeight={windowHeight}
            scrollY={scrollY}
            darkmode={darkmode}
          />
        </div>

        <div
          style={{
            height: "75vh",
            zIndex: 2,
            gridArea: "1 / 1 / auto / auto"
          }}
        >
          <h1>
            Bruh
          </h1>
        </div>

      </div>
      <SafeArea>
        <h1>Mickey / Header 1</h1>
        <p>
          <Emoji role="img" aria-label="Party Face">🥳</Emoji>
          Mickey is a front end ninja who’s been fidgeting with <code>HTML</code>, <code>CSS</code>, and <code>JavaScript</code> since the days when layouts were made with <code>iframe</code>-tags and the <code>marquee</code>-tag was the coolest thing on the Internet.
        </p>
        <p>
          Mickey is passionate about creating stuff for the Web, and recognised by his keen eye for detail, structured way of working (<em>mise en place</em>), and for being a quick learner.
        </p>
      </SafeArea>
      <SafeArea>
        <h1>Principles / Beliefs / Values</h1>
        <h2>{"Style, function, personality"}</h2>
        <p>I love creating unique and personal websites, just like back in the &rsquo;90s</p>
      </SafeArea>
    </>
  )
}

export default IndexPage
