import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { SafeArea } from "../styles"

import Loadable from "@loadable/component"
const MickeyTwo = Loadable(() => import("../components/MickeyTwo"))

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  height: 75vh;
  width: 100%;
  z-index: 2;
  grid-area: 1 / 1 / auto / auto;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-columns: 1fr;
  grid-auto-flow: row;
  gap: 32px;
  align-items: center;
`

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 9999px;
  filter: brightness(1.25);
`

const Hero = ({ windowWidthRef, windowHeightRef, scrollYRef, darkmode }) => {
  const data = useStaticQuery(graphql`
    query hero_image {
      imageSharp(original: {src: {regex: "/mickey_hero/"}}) {
        gatsbyImageData(quality: 100, placeholder: BLURRED, width: 400, transformOptions: {duotone: {highlight: "#ffffff", shadow: "#000000"}})
      }
    }
  `)
  const image = getImage(data.imageSharp.gatsbyImageData)

  return (
    <SafeArea>
      <Wrapper>


      <div
        style={{
          height: "75vh",
          gridArea: "1 / 1 / auto / auto"
        }}
      >
        <MickeyTwo
          windowWidth={windowWidthRef}
          windowHeight={windowHeightRef}
          scrollY={scrollYRef}
          darkmode={darkmode}
        />
      </div>

      <ContentWrapper>
        <div style={{gridArea: "1 / auto / auto / span 6"}}>
          <h1>
            Better web, more spiders.
          </h1>
          <p>
            Creating the essence of the spider, web and other funky components. What is not in the web may not exists without a pattern.
          </p>
        </div>
        <div style={{gridArea: "1 / auto / auto / span 6", justifySelf: "center", display: "grid", placeItems: "center"}}>
          <StyledGatsbyImage style={{margin: "2.2vw",gridArea: "1 / 1 / auto / auto"}} image={image} alt="Mickey" />

            <svg id="test" style={{ width: "auto", height: "auto", gridArea: "1 / 1 / auto / auto", fontFamily: "Roboto, sans-serif", textTransform: "uppercase", zIndex: "2", fill: "var(--black)", animation: "rotate_clockwise infinite linear 120s" }} viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg">
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
            </svg>

        </div>
      </ContentWrapper>


      </Wrapper>
    </SafeArea>
  )
}

export default Hero
