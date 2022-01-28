import React from "react"
import styled from "styled-components"
import { SafeArea } from "../styles"

import SEOComponent from "../components/SEOComponent"

const TestDiv = styled.div`
  width: 140px;
  height: 140px;
  background: linear-gradient(90deg, black 50%, #fff 50%), linear-gradient(0deg, var(--primary-color) 50%, hotpink 50%);
  background-blend-mode: exclusion;
`

const AboutPage = () => {


  return (
    <>
      <SEOComponent
        title="About"
        description="MaMickster..."
      />
      <SafeArea>
        <h1>About</h1>
        <p><a href="https://www.twitter.com/hejmikael" target="_blank" rel="noreferrer">Twitter</a></p>
        <p>I am a creative and strategically minded person who love the combinated disciplines of creating and problem-solving.</p>
        <TestDiv />
      </SafeArea>
    </>
  )
}

export default AboutPage
