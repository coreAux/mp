import React from "react"

import { SafeArea, Emoji } from "../styles"

import SEOComponent from "../components/SEOComponent"
import Hero from "../components/Hero"

const testArr = [0,1,2,3,4,5,6,7,8,9,10]

const IndexPage = ({ scrollYRef, darkmode }) => {
  const [windowWidth, setWindowWidth] = React.useState(100)
  const [windowHeight, setWindowHeight] = React.useState(100)
  const windowWidthRef = React.useRef()
  windowWidthRef.current = windowWidth
  const windowHeightRef = React.useRef()
  windowHeightRef.current = windowHeight


  const [splice, setSplice] = React.useState(2)


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
      <Hero
        windowWidthRef={windowWidthRef}
        windowHeightRef={windowHeightRef}
        darkmode={darkmode}
        scrollYRef={scrollYRef}
      />
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
        <h2>Devil is in the details</h2>
        <p>The importance of details can&apos;t be underestimated, with a keen eye for detail I make sure that your product delivers on all fronts.</p>
      </SafeArea>
      <SafeArea>
        {testArr.slice(0,splice).map((t) => (
          <p key={t}>{t}</p>
        ))}
        <button
          onClick={() => setSplice(splice => splice + 1)}
        >
          Show more!
        </button>
      </SafeArea>
    </>
  )
}

export default IndexPage
