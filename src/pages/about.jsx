import React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled, { keyframes } from "styled-components"
import { SafeArea, Kard, /*smallBreakPoint, */mediumBreakPoint, largeBreakPoint } from "../styles"

import randomInt from "../utils/randomInt"

import A from "../components/A"
import SEOComponent from "../components/SEOComponent"

// const StyledGatsbyImage = styled(GatsbyImage)`
//   isolation: isolate;
//   border-radius: ${({$borderRadius}) => `var(--border-radius-${$borderRadius})`};
//
//   border: 2px solid hsl(${({$i}) => $i * 115}, 50%, 50%);
//   grid-area: ${({$i}) => $i + 1} / ${({$i}) => $i % 2 === 0 ? "1" : "11"} / auto / span 2;
//
//   @media (max-width: ${smallBreakPoint}px ){
//     grid-area: ${({$i}) => (Math.round(($i + 1) / 2) * 2)} / ${({$i}) => $i % 2 === 0 ? "2" : "8"} / auto / span 4;
//   }
// `

const radar = keyframes`
  0% {
    opacity: 1;
    filter: brightness(100%);
    // transform: scale(1);
  }
  100% {
    opacity: 0;
    // filter: brightness(200%);
    // transform: scale(1.05);
  }
`

const Pulse = styled.div`
  grid-area: 1 / 1 / auto / auto;
  width: calc(400px + ${({$p}) => $p * 20}px);
  height: calc(400px + ${({$p}) => $p * 20}px);
  // width: 430px;
  // height: 430px;
  border: 5px solid var(--primary-color);
  border-radius: ${({$borderRadius}) => `var(--border-radius-${$borderRadius})`};
  animation: ${radar} 3s ${({$p}) => $p * .5}s infinite alternate ease-out
`

const MainGatsbyImage = styled(GatsbyImage)`
  isolation: isolate;
  border-radius: ${({$borderRadius}) => `var(--border-radius-${$borderRadius})`};
  // border: 5px solid var(--primary-color);
  grid-area: 1 / 1 / auto / auto;
`

const StyledKard = styled(Kard)`
  grid-template-rows: repeat(9, auto);
  align-items: flex-start;
  gap: 16px;
`

const Content = styled.div`
  // grid-area: 1 / 3 / flex-end / span 8;
  grid-area: auto / 3 / auto / span 8;

  @media (max-width: ${largeBreakPoint}px) {
    // grid-area: 1 / 1 / flex-end / span 12;
    grid-area: auto / 2 / auto / span 10;
  }

  @media (max-width: ${mediumBreakPoint}px) {
    // grid-area: 1 / 1 / flex-end / span 12;
    grid-area: auto / 1 / auto / span 12;
  }
`

const pulses = [1, 2, 3]

const AboutPage = ({ data }) => {
  const image = getImage(data.imageSharp.gatsbyImageData)

  const rndm = randomInt(1, 5)

  return (
    <>
      <SEOComponent
        title="About"
        description="MaMickster..."
      />
    <SafeArea>
        <StyledKard>
          {/*data.allImageSharp.edges.map((e, i) => (
            <StyledGatsbyImage
              key={e.node.id}
              image={getImage(e.node.gatsbyImageData)}
              alt=""
              $i={i}
              $borderRadius={randomInt(1, 5)}
            />
          ))*/}
          <Content>
          <div style={{ display: "grid", placeItems: "center", marginBottom: "50px", textAlign:"center", position: "relative"}}>
              {pulses.map((p) => (
                <Pulse
                  key={p}
                  $p={p}
                  $borderRadius={rndm}
                />
              ))}
              <Pulse />
              <MainGatsbyImage
                image={image}
                alt="Mickey"
                $borderRadius={rndm}
              />
          </div>
            <h1>About Mickey</h1>
            <p><A href="https://www.twitter.com/hejmikael" rel="noopener" label="Twitter" /></p>
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
            <dt><A href="https://a11y-101.com/" rel="noopener" label="a11y-101.com" /></dt>
            <dd>A good start if you&apos;re interested in accessible web development.</dd>

            <dt><A href="https://a11y-101.com/" rel="noopener" label="a11y-101.com" /></dt>
            <dd>A good start if you&apos;re interested in accessible webdevelopment.</dd>
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
