import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import { Transition } from "react-transition-group"
import styled, { css } from "styled-components"
import { smallBreakPoint, RoundButton } from "../styles"

const ButtonWrapper = styled.div`
  z-index: 55;
  position: fixed;
  top: calc(20px + env(safe-area-inset-top));
  right: calc(20px + env(safe-area-inset-right));
`

const Button = styled(RoundButton)`
  z-index: 1;
  position: relative;
  box-shadow: var(--shadow-elevation-high);

  @media (hover) {
    &:hover {
      background: ${({$openNav}) => $openNav ? "var(--secondary-color)" : "var(--primary-color)"};
    }
  }
`

const HamburgerCSS = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  border-radius: 9999px;
  background: var(--white);
`

const Hamburger = styled.div`
  ${HamburgerCSS}
  height: ${({$openNav}) => $openNav ? "0" : "18"}px;
  transform: translate3d(-50%, -50%, 0) rotate(90deg);
  transition: ${({$openNav}) => $openNav ? "height .1s" : "height .1s .2s"};

  &::before {
    height: 18px;
    ${HamburgerCSS}
    content: "";
    margin-left: ${({$openNav}) => $openNav ? "0" : "-6"}px;
    transform: translate3d(-50%, -50%, 0) rotate(${({$openNav}) => $openNav ? "45" : "0"}deg);
    transition: ${({$openNav}) => $openNav ? "transform .1s .2s, margin .1s .1s" : "transform .1s, margin .1s .1s"};
  }

  &::after {
    height: 18px;
    ${HamburgerCSS}
    content: "";
    margin-left: ${({$openNav}) => $openNav ? "0" : "6"}px;
    transform: translate3d(-50%, -50%, 0) rotate(${({$openNav}) => $openNav ? "-45" : "0"}deg);
    transition: ${({$openNav}) => $openNav ? "transform .1s .2s, margin .1s .1s" : "transform .1s, margin .1s .1s"};
  }
`

const NavWrapper = styled.div`
  z-index: 50;
  position: fixed;
  letter-spacing: var(--letter-spacing-inverted);
  top: calc(20px + env(safe-area-inset-top));
  left: calc(20px + env(safe-area-inset-left));
  width: calc(100% - 40px - 40px - 20px - env(safe-area-inset-right) - env(safe-area-inset-left));
  height: 40px;
  background: var(--black);
  color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-elevation-high);
  opacity: ${({$state}) => $state === "entered" ? "1" : "0"};
  transition: opacity .3s;

  @media (max-width: ${smallBreakPoint}px) {
    top: 0;
    width: 100vw;
    height: 100vh;
    left: 0;
    border-radius: 0;
    background: var(--white);
    color: var(--black);
  }
`

const Menu = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding);

  @media (max-width: ${smallBreakPoint}px) {
    flex-direction: column;
  }
`

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;

  & > a,
  & > h1 {
    margin-right: 20px;
  }

  @media (max-width: ${smallBreakPoint}px) {
    flex-direction: column;
  }
`

const H1 = styled.h1`
  font-size: 24px;
  cursor: pointer;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  background-image: linear-gradient(90deg, var(--primary-color), var(--primary-color));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .2s;

  &.active {
    background-size: 100% 2px;
  }

  @media (hover) {
    &:hover {
      background-size: 100% 2px;
    }
  }

  @media (max-width: ${smallBreakPoint}px) {
    background-image: linear-gradient(0deg, var(--primary-color), var(--primary-color));
  }
`

const Nav = ({ darkmode, toggleDarkmode, contrastmode, toggleContrastmode }) => {
  const [openNav, setOpenNav] = useState(false)

  // Handle scrolling of body when nav is open in small devices
  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        if (window.innerWidth < smallBreakPoint) {
          if (openNav) {
            document.body.classList.add("nav-open")
          } else if (!openNav) {
            document.body.classList.remove("nav-open")
          }
        } else if (window.innerWidth > smallBreakPoint) {
          document.body.classList.remove("nav-open")
        }
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      return () => window.removeEventListener("resize", handleResize)
    }
  }, [openNav])

  // Handle if the nav should be open or closed, depending on the size of the screen
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== undefined) {
        if (window.innerWidth < smallBreakPoint) {
          setOpenNav(false)
        } else if (window.innerWidth > smallBreakPoint) {
          setOpenNav(true)
        }
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleNavOnSmallDevice = () => {
    if (typeof window !== !undefined) {
      if (window.innerWidth < smallBreakPoint) {
        setOpenNav(false)
      }
    }
  }

  return (
    <>
      <Transition
        in={openNav}
        unmountOnExit
        timeout={{
          exit: 300,
        }}
      >
        {(state) => (
          <NavWrapper
            $state={state}
          >
              <Menu>
                <FlexDiv>
                  <H1 onClick={() => {
                      navigate("/")
                      toggleNavOnSmallDevice()
                    }}
                  >
                    MICKEY
                  </H1>
                  <StyledLink to="/about/" activeClassName="active" onClick={toggleNavOnSmallDevice}>
                    About
                  </StyledLink>
                  <StyledLink to="/" activeClassName="n-active"
                    onClick={toggleNavOnSmallDevice}>
                    Work
                  </StyledLink>
                  <StyledLink to="/blog/" activeClassName="active" partiallyActive={true} onClick={toggleNavOnSmallDevice}>
                    Insights / Blörg
                  </StyledLink>
                </FlexDiv>
                <FlexDiv>
                  <button
                    style={{background:"none",border:"none",cursor:"pointer",fontSize:"24px"}}
                    onClick={toggleContrastmode}
                  >
                    <div style={{borderRadius:"9999px",width:"20px",height:"20px",background:`linear-gradient(${contrastmode ? "270deg" : "90deg"}, var(--white) 50%, var(--black) 50%)`,position:"relative"}}>
                      <div style={{borderRadius:"9999px",width:"10px",height:"10px",background:`linear-gradient(${contrastmode ? "90deg" : "270deg"}, var(--white) 50%, var(--black) 50%)`,position:"absolute",top:"50%",left:"50%",transform:"translate3d(-50%,-50%,0)"}} />
                    </div>
                  </button>
                  <button
                    style={{background:"none",border:"none",cursor:"pointer",filter:`brightness(${darkmode ? "0" : "20"})`,fontSize:"24px"}}
                    onClick={toggleDarkmode}
                  >
                    {darkmode ? "☀️" : "🌙"}
                  </button>
                </FlexDiv>
              </Menu>
          </NavWrapper>
        )}
      </Transition>

      <ButtonWrapper>
        <Button
          $openNav={openNav}
          onClick={() => setOpenNav(!openNav)}
        >
          <Hamburger $openNav={openNav} />
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default Nav