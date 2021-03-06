import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { Button, smallBreakPoint } from "../styles"
import { ModalContext } from "./Contexts"
import useHideForModal from "../hooks/useHideForModal"

import InstagramIcon from "../svgs/InstagramIcon"
import LinkedInIcon from "../svgs/LinkedInIcon"
import TwitterIcon from "../svgs/TwitterIcon"
import GitHubIcon from "../svgs/GitHubIcon"
import MessageIcon from "../svgs/MessageIcon"
import Logo from "./Logo"

import ContactComponent from "./ContactComponent"

const raster = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

const StyledFooter = styled.footer`
  // position: sticky;
  // flex-grow: 1;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  // top: 100%;
  // margin: 50px calc(20px + env(safe-area-inset-right)) 20px calc(20px + env(safe-area-inset-left));
  // padding: 20px;
  // min-height: 30vh;
  // height: 30vh;
  height: 40px;
  width: calc(100vw - 40px - 40px - 40px - 40px - env(safe-area-inset-right) - env(safe-area-inset-left));

  background-position: bottom center;
  background: var(--footer-bg-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-elevation-high);
  /*background:
    ${raster.map((r, i) => (
      `radial-gradient(circle ${r * 2}px at 50% 50%, var(--circle-color) 98%, ${r % 2 === 0 ? "transparent 98%" : "transparent 98%"}) ${r % 2 === 0 ? "0" : (raster.length * 2 + 5) / 2}px ${(r * i) * 1.6}px/${raster.length * 2 + 5}px ${r * 4}px repeat-x${r === raster.length ? "" : ", "}`
    ))};*/


  @media (max-width: ${smallBreakPoint}px) {
    order: 3;
    width: 100vw;
    margin-top: 20px;
  }
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
    fill: var(--white);
  }

  & > circle {
    fill: none;
  }

  & > polyline,
  & > polygon {
    fill: white;
    stroke: #555;
    stroke-width: 20px;
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

const StyledMessageIcon = styled(MessageIcon)`
  ${IconCSS}
`

const IconLink = styled.a`
  width: 38px;
  height: 38px;
  margin-left: 20px;
  border-radius: 9999px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (hover) {
    &:hover {
      background: hsl(var(--primary-color-reverse-hsl) / .2);

      & > svg > path {
        fill: var(--primary-color-reverse);
      }
    }
  }

  // &:focus-visible {
  //   width: 44px;
  //   height: 44px;
  // }
  //
  // &[data-focus-visible-added] {
  //   width: 44px;
  //   height: 44px;
  // }
`

const StyledButton = styled(Button)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FooterWrapper = styled.div`
  --primary-color: var(--primary-color-reverse);
  min-height: 40px;
  position: sticky;
  top: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 50px calc(20px + env(safe-area-inset-right)) 20px calc(20px + env(safe-area-inset-left));
`

const Footer = () => {
  const { setModalOpen, setModalComponent } = useContext(ModalContext)
  const hideForModal = useHideForModal()

  return (
    <FooterWrapper>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-around",
          height: "100%",
          width: "40px",
        }}
      >
        <StyledButton
          $invert={false}
          onClick={() => {
            setModalComponent(<ContactComponent/>)
            setModalOpen(true)
          }}
          aria-label="Open message module"
          tabIndex={hideForModal}
        >
          <StyledMessageIcon />
        </StyledButton>
      </div>

      <StyledFooter>
        {/*<div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: "100%",
          }}
        >*/}

          {/*<div>
            <p>Causing chaos since &rsquo;89.</p>
          </div>*/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 10px",
            }}
          >
            <div style={{ fontFamily: "Roboto, sans-serif", letterSpacing: "var(--letter-spacing-inverted)", color: "hsla(var(--white-hsl) / 25%)", textTransform: "uppercase" }}>
              &copy; 2022 Mickey
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <IconLink href="https://www.twitter.com/hejmikael" target="_blank" rel="noreferrer" aria-label="Link to Twitter" tabIndex={hideForModal}>
                <StyledTwitterIcon />
              </IconLink>
              <IconLink href="https://www=.github.com/coreAux" target="_blank" rel="noreferrer" aria-label="Link to GitHub" tabIndex={hideForModal}>
                <StyledGitHubIcon />
              </IconLink>
              <IconLink href="https://www.instagram.com/hejmikael" target="_blank" rel="noreferrer" aria-label="Link to Instagram" tabIndex={hideForModal}>
                <StyledInstagramIcon />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/petersenmikael" target="_blank" rel="noreferrer" aria-label="Link to LinkedIn" tabIndex={hideForModal}>
                <StyledLinkedInIcon />
              </IconLink>
            </div>
          {/*</div>*/}
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
      </StyledFooter>
      <Logo rotate={true} />
    </FooterWrapper>
  )
}

export default Footer


/*



onMouseEnter={() => {
  // if (logoRef.current) {
  //   logoRef.current.style.transition = "transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)"
  //   logoRef.current.style.transform = "rotate(360deg)"
  //
  //   setTimeout(() => {
  //     logoRef.current.style.transition = "none"
  //     logoRef.current.style.transform = "rotate(0deg)"
  //   }, 1000)
  // }
  // transition: none;
  //
  // &:hover {
  //   transform: rotate(360deg);
  //   transition: transform 1s cubic-bezier(0.34, 1.56, 0.64, 1);
  // }

  // e.currentTarget.style.transform = "rotate(360deg)"
  // console.log("In: ", e.currentTarget)
  //
  // setTimeout(() => {
  //   console.log("e.currentTarget", e.currentTarget)
  //   console.log("e.target", e.target)
    // e.currentTarget.style.transform = ""
  // }, 1000)
}}

*/
