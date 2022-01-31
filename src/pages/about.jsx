import React from "react"
// import styled from "styled-components"
import { SafeArea } from "../styles"

import SEOComponent from "../components/SEOComponent"


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
        <p>
          Hi! My name is Mickey and I enjoy making interactive and colorful websites <span role="img" aria-label="Laptop">💻</span>.
        </p>
        <p>
          I&apos;ve lived for the majority of my life in Sweden 🇸🇪. Recently me and my boyfriend <span role="img" aria-label="Men Holding Hands" >👨🏻‍🤝‍👨🏼</span> decided to change things up and we now live in Amsterdam <span role="img" aria-label="Flag of Netherlands">🇳🇱</span>!
        </p>

        <p>I have a law degree (LL.M.) <span role="img" aria-label="Graduation Cap">🎓</span> and I have worked in the law industry for the majority of my adult life. I&apos;m also a skilled front-end web developer and spend most of my free time coding. I&apos;m well-versed with HTML, CSS and JavaScript, and libraries such as React and Svelte.</p>

        <p>Fun facts about me: I&apos;m an avid video game nerd (favorites being ToZ, FF, and Overwatch), I have an Law degree, and I...</p>
        <p>I am a creative and strategically minded person who love the combinated disciplines of creating and problem-solving.</p>
      </SafeArea>
    </>
  )
}

export default AboutPage
