import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled, { keyframes } from "styled-components"
import { SafeArea, Kard, Borre, rotateClockwise } from "../styles"

import { DarkmodeContext } from "./Contexts"

const radar = keyframes`
  20% {
    opacity: 0;
    // filter: brightness(100%);
    // transform: scale(1);
  }
  100% {
    opacity: 1;
    // filter: brightness(200%);
    // transform: scale(1.05);
  }
`

const StyledGatsbyImage = styled(GatsbyImage)`
  isolation: isolate;
  border-radius: 9999px;
  // border: 5px solid white;
  // border: none;
  transition: opacity .3s;
`

const StyledSafeArea = styled(SafeArea)`
  min-height: 75vh;
  display: grid;
  place-items: center;
`

const StyledSvg = styled.svg`
  // width: auto;
  // height: auto;
  width: calc(100% + ${({$p}) => $p * 20}px);
  height: calc(100% + ${({$p}) => $p * 20}px);
  grid-area: 1 / 1 / auto / auto;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  z-index: 2;
  fill: none; // var(--black);
  stroke: var(--black);
  stroke-width: 5px;
  transform: translate3d(-50%, -50%, 0);
  animation: ${rotateClockwise} infinite linear 120s;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;

  animation: ${radar} 3s ${({$p}) => $p * .5}s infinite alternate ease-out;
`

const pulses = [1, 2, 3]

const Hero = () => {
  const { delayedDarkmode } = useContext(DarkmodeContext)
  const data = useStaticQuery(graphql`
    query hero_image {
      imageSharp(original: {src: {regex: "/mickey_hero/"}}) {
        gatsbyImageData(width: 400)
      }
      allImageSharp(
        filter: {parent: {internal: {description: {regex: "/\\/images/hero\\//"}}}}
      ) {
        edges {
          node {
            id
            gatsbyImageData(aspectRatio: 1, width: 400)
          }
        }
      }
    }
  `)
  /* , transformOptions: {duotone: {highlight: "#ffffff", shadow: "#000000"}} */
  // const image = getImage(data.imageSharp.gatsbyImageData)
  const images = data.allImageSharp.edges.map((e) => e.node)

  return (
    <StyledSafeArea>
      <Kard>
        <Borre $mdSpan={6} $smSpan={12} $smOrder={2}>
          <h1>
            Bespoke websites.
          </h1>
          <p>
            When functionality and creativity comes together, I believe it&apos;s the essence of design.
            Sites built with intuitive design, high performance, and well written content. Everything you need to get more conversions and express you and you&apos;re brand in a way that benefits both your business and customers.
          </p>
        </Borre>
        <Borre
          $mdSpan={6}
          $smSpan={12}
          $smOrder={1}
          style={{
            justifySelf: "center",
            display: "grid",
            placeItems: "center",
            position: "relative",
          }}

        >
          {/*<StyledGatsbyImage style={{margin: "24px",gridArea: "1 / 1 / auto / auto"}} image={image} alt="Mickey" />*/}
          {delayedDarkmode && images[0] &&
            <StyledGatsbyImage
              key={images[0].id}
              style={{
                margin: "10px",
                gridArea: "1 / 1 / auto / auto",
              }}
              image={getImage(images[0].gatsbyImageData)}
              alt="Mickey"
            />
          }
          {!delayedDarkmode && images[1] &&
            <StyledGatsbyImage
              key={images[1].id}
              style={{
                margin: "10px",
                gridArea: "1 / 1 / auto / auto",
              }}
              image={getImage(images[1].gatsbyImageData)}
              alt="Mickey"
            />
          }
          {pulses.map((p) => (
            <StyledSvg key={p} $p={p} id="test" viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
              <path id="MyPath" d="M15,170
                a 155,155 0 1,1 310,0
                a 155,155 0 1,1 -310,0"
              />
            </StyledSvg>
          ))}
            {/*<StyledSvg id="test" viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
              {/*<defs>
                <clipPath id="clipPath">
                <path id="MyPath" d="M15,170
                  a 155,155 0 1,1 310,0
                  a 155,155 0 1,1 -310,0"/>
                </clipPath>
              </defs>
              <text>
                <textPath href="#MyPath" side="left" textLength="974">Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — </textPath>
              </text>
            </StyledSvg>*/}

        </Borre>
      </Kard>
    </StyledSafeArea>
  )
}

export default Hero
