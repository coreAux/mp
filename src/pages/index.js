import React from "react"

import { SafeArea, Emoji, Kard, Borre } from "../styles"

import useCookieConsent from "../hooks/useCookieConsent"

import SEOComponent from "../components/SEOComponent"
import Hero from "../components/Hero"
import Button from "../components/ui/Button"

const testArr = [0,1,2,3,4,5,6,7,8,9,10]

const IndexPage = () => {
  const [windowWidth, setWindowWidth] = React.useState(100)
  const [windowHeight, setWindowHeight] = React.useState(100)
  const windowWidthRef = React.useRef()
  windowWidthRef.current = windowWidth
  const windowHeightRef = React.useRef()
  windowHeightRef.current = windowHeight

  const { grantCookie, denyCookie } = useCookieConsent()


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
      <Hero />
      <SafeArea>
        <h2>Mickey / Header 1</h2>
        <p>
          <Emoji role="img" aria-label="Party Face">🥳</Emoji>
          Mickey is a front end ninja who’s been fidgeting with <code>HTML</code>, <code>CSS</code>, and <code>JavaScript</code> since the days when layouts were made with <code>iframe</code>-tags and the <code>marquee</code>-tag was the coolest thing on the Internet.
        </p>
        <p>
          Mickey is passionate about creating stuff for the Web, and recognised by his keen eye for detail, structured way of working (<em>mise en place</em>), and for being a quick learner.
        </p>
      </SafeArea>
      <SafeArea>
        <Kard style={{ alignItems: "flex-start" }}>
          <Borre $mdSpan={4} >
            <h2>Principles / Beliefs / Values</h2>
          </Borre>
          <Borre $mdSpan={4} >
            <h3>{"Style, function, personality"}</h3>
            <p>I love creating unique and personal websites, just like back in the &rsquo;90s</p>
          </Borre>
          <Borre $mdSpan={4} >
            <h3>Devil is in the details</h3>
            <p>The importance of details can&apos;t be underestimated, with a keen eye for detail I make sure that your product delivers on all fronts.</p>
          </Borre>
          <Borre $mdSpan={4} >
            {/*<h1>Principles / Beliefs / Values</h1>*/}
          </Borre>
          <Borre $mdSpan={4} >
            <h3>{"Pixel perfection"}</h3>
            <p>I love creating unique and personal websites, just like back in the &rsquo;90s</p>
          </Borre>
          <Borre $mdSpan={4} >
            <h3>The internet is for everyone</h3>
            <p>It&apos;s a strong belief of mine that the internet should be accessible for anyone, and everyone. Creating accessible sites is ...</p>
          </Borre>
        </Kard>
      </SafeArea>
      <SafeArea>
        {testArr.slice(0,splice).map((t) => (
          <p key={t}>{t}</p>
        ))}
        <Button
          onClick={() => setSplice(splice => splice + 1)}
          label="Show more!"
          aria-disabled={true}
          disabled={true}
        />
      </SafeArea>
      <SafeArea>
        {process.env.NODE_ENV !== "development" && <>
          <Button
            onClick={() => grantCookie()}
            label="Consent to cookies"
          />
          <Button
            onClick={() => denyCookie()}
            label="Reject cookies"
          /></>}
      </SafeArea>
    </>
  )
}

export default IndexPage
