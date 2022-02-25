import React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { SafeArea, Kard, smallBreakPoint } from "../styles"

import randomInt from "../utils/randomInt"

import SEOComponent from "../components/SEOComponent"

const StyledGatsbyImage = styled(GatsbyImage)`
  isolation: isolate;
  border-radius: ${({$borderRadius}) => `var(--border-radius-${$borderRadius})`};

  border: 2px solid hsl(${({$i}) => $i * 115}, 50%, 50%);
  grid-area: ${({$i}) => $i + 1} / ${({$i}) => $i % 2 === 0 ? "1" : "11"} / auto / span 2;

  @media (max-width: ${smallBreakPoint}px ){
    grid-area: ${({$i}) => (Math.round(($i + 1) / 2) * 2)} / ${({$i}) => $i % 2 === 0 ? "2" : "8"} / auto / span 4;
  }
`

const MainGatsbyImage = styled(GatsbyImage)`
  isolation: isolate;
  border-radius: ${({$borderRadius}) => `var(--border-radius-${$borderRadius})`};
  border: 5px solid var(--primary-color);
  margin-bottom: 50px;
`

const StyledKard = styled(Kard)`
  grid-template-rows: repeat(9, auto);
  align-items: flex-start;
  gap: 16px;
`

const Content = styled.div`
  // grid-area: 1 / 3 / flex-end / span 8;
  grid-area: auto / 3 / auto / span 8;

  @media (max-width: ${smallBreakPoint}px) {
    // grid-area: 1 / 1 / flex-end / span 12;
    grid-area: auto / 1 / auto / span 12;
  }
`

const AboutPage = ({ data }) => {
  const image = getImage(data.imageSharp.gatsbyImageData)

  // const rndm = randomInt(1, 5)
  console.log("all images? ", data.allImageSharp)

  return (
    <>
      <SEOComponent
        title="About"
        description="MaMickster..."
      />
    <SafeArea>
        <StyledKard>
          {data.allImageSharp.edges.map((e, i) => (
            <StyledGatsbyImage
              key={e.node.id}
              image={getImage(e.node.gatsbyImageData)}
              alt=""
              $i={i}
              $borderRadius={randomInt(1, 5)}
            />
          ))}
          <Content>
          <div style={{textAlign:"center"}}>
            <MainGatsbyImage
              image={image}
              alt="Mickey"
              $borderRadius={randomInt(1, 5)}
            />
          </div>
            <h1>About Mickey</h1>
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
            </Content>
<Content>
          <h1>Speaks</h1>
          <p>React Roundup ep. 98 - Couroom to webgl</p>
</Content>
<Content>
          <h1>Links and resources</h1>
          <p>
            Here are some links... bla bla bla...
          </p>

          <dl>
            <dt><a href="https://a11y-101.com/" rel="noopener">a11y-101.com</a></dt>
            <dd>A good start if you&apos; interested in accessible webdevelopment.</dd>

            <dt><a href="https://a11y-101.com/" rel="noopener">a11y-101.com</a></dt>
            <dd>A good start if you&apos; interested in accessible webdevelopment.</dd>
          </dl>

          </Content>



        </StyledKard>
      </SafeArea>
    </>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutImageQuery {
    allImageSharp(
      filter: {parent: {internal: {description: {regex: "/\\/images/about\\//"}}}}
    ) {
      edges {
        node {
          id
          gatsbyImageData(aspectRatio: 1, width: 400)
        }
      }
    }
    imageSharp(original: {src: {regex: "/mickey_about/"}}) {
      gatsbyImageData(aspectRatio: 1, width: 400)
    }
  }
`

/*
  transformOptions: {duotone: {highlight: "#64FFD0", shadow: "#000000"}}
*/
