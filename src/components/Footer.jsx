import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { Button } from "../styles"
import { ModalContext } from "./Contexts"

import InstagramIcon from "../svgs/InstagramIcon"
import LinkedInIcon from "../svgs/LinkedInIcon"
import TwitterIcon from "../svgs/TwitterIcon"
import GitHubIcon from "../svgs/GitHubIcon"
import MickeyIcon from "../svgs/MickeyIcon"

import ContactComponent from "./ContactComponent"

const raster = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

const StyledFooter = styled.footer`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 100%;
  margin: 50px 0 0 0;
  padding: 20px calc(20px + env(safe-area-inset-right)) 20px calc(20px + env(safe-area-inset-left));
  min-height: 30vh;
  height: 30vh;

  background-position: bottom center;
  background:
    ${raster.map((r, i) => (
      `radial-gradient(circle ${r * 2}px at 50% 50%, var(--circle-color) 98%, ${r % 2 === 0 ? "transparent 98%" : "transparent 98%"}) ${r % 2 === 0 ? "0" : (raster.length * 2 + 5) / 2}px ${(r * i) * 1.6}px/${raster.length * 2 + 5}px ${r * 4}px repeat-x${r === raster.length ? "" : ", "}`
    ))};
`

/*
${raster.map((r, i) => (
  `radial-gradient(circle ${r * 2}px at 50% 50%, var(--circle-color) 98%, ${r % 2 === 0 ? "transparent 98%" : "transparent 98%"}) ${r % 2 === 0 ? "0" : (raster.length * 5 + 5) / 2}px ${(r * i) * 2}px/${raster.length * 5 + 5}px ${r * 4}px repeat-x${r === raster.length ? "" : ", "}`
))}
*/

/*
  radial-gradient(circle 10px at 50% 50%, #000 98%, var(--white)) 100% 100%/30px 20px repeat-x,
  radial-gradient(circle 8px at 50% 50%, #000 98%, var(--white)) 15px calc(100% - 30px)/30px 16px repeat-x,
  radial-gradient(circle 6px at 50% 50%, #000 98%, var(--white)) 0px calc(100% - 60px)/30px 12px repeat-x,
  radial-gradient(circle 4px at 50% 50%, #000 98%, var(--white)) 15px calc(100% - 80px)/30px 8px repeat-x,
  radial-gradient(circle 2px at 50% 50%, #000 98%, var(--white)) 0px calc(100% - 100px)/30px 4px repeat-x;
*/

const IconCSS = css`
  width: 20px;
  height: 20px;

  & > path {
    fill: var(--black);
  }

  & > circle {
    fill: none;
  }
`

const StyledTwitterIcon = styled(TwitterIcon)`
  ${IconCSS}
`

const StyledLinkedInIcon = styled(LinkedInIcon)`
  ${IconCSS}
  transform: translate3d(1px, -1px, 0);
`

const StyledInstagramIcon = styled(InstagramIcon)`
  ${IconCSS}
`

const StyledGitHubIcon = styled(GitHubIcon)`
  ${IconCSS}
`

const StyledMickeyIcon = styled(MickeyIcon)`
  width: 50px;
  height: 50px;
`

const IconLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (hover) {
    &:hover {
      background: hsl(var(--primary-color-hsl) / .2);

      & > svg > path {
        fill: var(--primary-color);
      }

    }
  }
`

const Footer = () => {
  const { setModalOpen, setModalComponent } = useContext(ModalContext)

  return (
    <>
      <StyledFooter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
            <StyledMickeyIcon />
          </div>
          <div>
            <p>Causing chaos since &rsquo;89.</p>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              transform: "translate3d(-10px, 0, 0)"
            }}
          >
            <IconLink href="https://www.twitter.com/hejmikael" target="_blank" rel="noreferrer" aria-label="Link to Twitter">
              <StyledTwitterIcon />
            </IconLink>
            <IconLink href="https://www=.github.com/coreAux" target="_blank" rel="noreferrer" aria-label="Link to GitHub">
              <StyledGitHubIcon />
            </IconLink>
            <IconLink href="https://www.instagram.com/hejmikael" target="_blank" rel="noreferrer" aria-label="Link to Instagram">
              <StyledInstagramIcon />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/petersenmikael" target="_blank" rel="noreferrer" aria-label="Link to LinkedIn">
              <StyledLinkedInIcon />
            </IconLink>
          </div>
        </div>
        {/*<div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <h2>Pages</h2>
          <p>Example</p>
          <p>Example</p>
          <p>Example</p>
          <p>Example</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <h2>Pages</h2>
          <p>Example</p>
          <p>Example</p>
          <p>Example</p>
          <p>Example</p>
        </div>*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: "100%",
            flexGrow: 1,
          }}
        >
          <Button
            onClick={() => {
              setModalComponent(<ContactComponent/>)
              setModalOpen(true)
            }}
          >
            Send me a message
          </Button>
        </div>
      </StyledFooter>
    </>
  )
}

export default Footer
