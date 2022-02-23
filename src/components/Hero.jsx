import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { SafeArea, Kard, Borre } from "../styles"

const StyledGatsbyImage = styled(GatsbyImage)`
  isolation: isolate;
  border-radius: 9999px;
  border: 10px solid white;
  // filter: brightness(1.25);
`

const StyledSafeArea = styled(SafeArea)`
  min-height: 75vh;
  display: grid;
  place-items: center;
`

const StyledSvg = styled.svg`
  width: auto;
  height: auto;
  grid-area: 1 / 1 / auto / auto;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  z-index: 2;
  fill: var(--black);
  animation: rotate_clockwise infinite linear 120s;
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query hero_image {
      imageSharp(original: {src: {regex: "/mickey_hero/"}}) {
        gatsbyImageData(width: 400)
      }
    }
  `)
  /* , transformOptions: {duotone: {highlight: "#ffffff", shadow: "#000000"}} */
  const image = getImage(data.imageSharp.gatsbyImageData)

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
            placeItems: "center"
          }}

        >
          <StyledGatsbyImage style={{margin: "24px",gridArea: "1 / 1 / auto / auto"}} image={image} alt="Mickey" />

            <StyledSvg id="test" viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="clipPath">
                <path id="MyPath" d="M15,170
                  a 155,155 0 1,1 310,0
                  a 155,155 0 1,1 -310,0"/>
                </clipPath>
              </defs>
              <text>
                <textPath href="#MyPath" side="left" textLength="974">Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — Mickey — </textPath>
              </text>
            </StyledSvg>

        </Borre>
      </Kard>
    </StyledSafeArea>
  )
}

export default Hero
