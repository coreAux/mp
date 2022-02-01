import React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { SafeArea } from "../styles"

import SEOComponent from "../components/SEOComponent"

const StyledGatsbyImage = styled(GatsbyImage)`
  isolation: isolate;
  border-radius: 9999px;
`

const AboutPage = ({ data }) => {
  const image = getImage(data.imageSharp.gatsbyImageData)

  return (
    <>
      <SEOComponent
        title="About"
        description="MaMickster..."
      />
      <SafeArea>
        <h1>About</h1>
        <StyledGatsbyImage
          image={image}
          alt="Mickey"
        />
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

export const pageQuery = graphql`
  query {
    imageSharp(original: {src: {regex: "/mickey_about/"}}) {
      gatsbyImageData(aspectRatio: 1, placeholder: BLURRED, width: 400, quality: 100)
    }
  }
`

/*
  transformOptions: {duotone: {highlight: "#64FFD0", shadow: "#000000"}}
*/
