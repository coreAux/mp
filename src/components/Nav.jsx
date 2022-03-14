import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import { Transition } from "react-transition-group"
import styled, { css } from "styled-components"
import { smallBreakPoint, RoundButton } from "../styles"

import useHideForModal from "../hooks/useHideForModal"

import { DarkmodeContext, ContrastmodeContext } from "./Contexts"

import ToggleDarkmode from "./ToggleDarkmode"
import ToggleContrast from "./ToggleContrast"

const ButtonWrapper = styled.div`
  --primary-color: var(--primary-color-reverse);
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
  --primary-color: var(--primary-color-reverse);
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
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
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
    flex-direction: column-reverse;
  }
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-grow: 1;

  & > a,
  & > h1 {
    margin-right: 20px;
  }

  @media (max-width: ${smallBreakPoint}px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 40px;

    & > a,
    & > h1 {
      margin-right: 0px;
    }
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;

  & > a,
  & > h1 {
    margin-right: 20px;
  }

  @media (max-width: ${smallBreakPoint}px) {

    & > a,
    & > h1 {
      margin-right: 0px;
    }
  }
`

const Span = styled.span`
  // display: flex;
  font-family: "Roboto",sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1;
  font-size: 24px;
  cursor: pointer;

  transition: color .1s ${({$i}) => $i * .05}s;

  @media (max-width: ${smallBreakPoint}px) {
    font-size: 48px;
    display: unset;
  }

  @media (hover) {
    a:hover & {
      color: var(--primary-color-reverse);
    }
  }
`

const HomeLink = styled(Link)`
  text-transform: uppercase;
  color: inherit;
  text-decoration: none;
  display: flex;
`

const StyledLink = styled(Link)`
  position: relative;
  text-transform: uppercase;
  color: inherit;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -1px;
    border-radius: 9999px;
    left: 0;
    background-image: linear-gradient(90deg, transparent 50%, var(--primary-color-reverse) 50%);
    background-position: 200% 100%;
    background-repeat: no-repeat;
    background-size: 200% 100%;
    transition: none;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -1px;
    border-radius: 9999px;
    left: 0;
    background-image: linear-gradient(90deg, transparent 50%, var(--primary-color-reverse) 50%);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 200% 100%;
    transition: background-position .2s;
  }

  @media (hover) {
    &:hover {
      &::after {
        background-position: 100% 100%;
        transition: background-position .2s;
      }

      &::before {
        background-image: linear-gradient(90deg, transparent 50%, transparent 50%);
        background-position: 100% 100%;
        transition: none;
      }
    }
  }

  @media (hover: none) {
    &:active {
      background-color: hsl(var(--primary-color-reverse) / .2);
    }
  }

  &.active {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -1px;
      border-radius: 9999px;
      left: 0;
      background-image: linear-gradient(90deg, transparent 50%, var(--primary-color-reverse) 50%);
      background-position: 100% 100%;
      background-repeat: no-repeat;
      background-size: 200% 100%;
      transition: none;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -1px;
      border-radius: 9999px;
      left: 0;
      background-image: linear-gradient(90deg, transparent 50%, var(--primary-color-reverse) 50%);
      background-position: 100% 100%;
      background-repeat: no-repeat;
      background-size: 200% 100%;
      transition: background-position .2s;
    }

    @media (hover) {
      &:hover {
        &::after {
          background-position: 0% 100%;
          transition: background-position .2s;
        }

        &::before {
          background-image: linear-gradient(90deg, var(--primary-color-reverse) 50%, transparent 50%);
          background-position: 0% 100%;
          transition: background-position .2s .2s;
        }
      }
    }
  }

  @media (max-width: ${smallBreakPoint}px) {
    margin-top: 10px;
    font-family: Roboto, sans-serif;
    font-size: 48px;

    &::before {
      bottom: 10px;
    }

    &::after {
      bottom: 10px;
    }

    @media (hover) {
      &::before {
        background-image: linear-gradient(90deg, transparent 50%, var(--primary-color) 50%);
      }

      &::after {
        background-image: linear-gradient(90deg, transparent 50%, var(--primary-color) 50%);
      }
    }

    &.active {
      color: var(--primary-color);

      &::before {
        display: none;
      }

      &::after {
        display: none;
      }
    }
  }
`

const homeHeading = ["M","i","c","k","e","y"]

const Nav = () => {
  const [openNav, setOpenNav] = useState(true)
  const hideForModal = useHideForModal()
  const { darkmode, toggleDarkmode} = useContext(DarkmodeContext)
  const { contrastmode, toggleContrastmode } = useContext(ContrastmodeContext)

  // Handle scrolling of body when nav is open in small devices
  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        if (window.innerWidth <= smallBreakPoint) {
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
        if (window.innerWidth <= smallBreakPoint) {
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
                <MenuWrapper>
                  <HomeLink
                    to="/"
                    onClick={toggleNavOnSmallDevice}
                    aria-label="Home"
                    tabIndex={hideForModal}
                  >
                  {homeHeading.map((l, i) => (
                    <Span key={l} $i={i}>{l}</Span>
                  ))}
                  </HomeLink>
                  <StyledLink to="/about/" activeClassName="active" onClick={toggleNavOnSmallDevice} tabIndex={hideForModal}>
                    About
                  </StyledLink>
                  {process.env.NODE_ENV === "development" && <StyledLink to="/" activeClassName="n-active"
                    onClick={toggleNavOnSmallDevice} tabIndex={hideForModal}>
                    Work
                  </StyledLink>}
                  {process.env.NODE_ENV === "development" && <StyledLink to="/blog/" activeClassName="active" partiallyActive={true} onClick={toggleNavOnSmallDevice} tabIndex={hideForModal} >
                    Blog
                  </StyledLink>}
                </MenuWrapper>
                <ToggleWrapper>
                  <ToggleContrast
                    onClick={toggleContrastmode}
                    contrastmode={contrastmode}
                    tabIndex={hideForModal}
                  />
                  <ToggleDarkmode
                    onClick={toggleDarkmode}
                    darkmode={darkmode}
                    tabIndex={hideForModal}
                  />
              </ToggleWrapper>
              </Menu>
          </NavWrapper>
        )}
      </Transition>

      <ButtonWrapper>
        <Button
          aria-label="Toggle navigation menu"
          $openNav={openNav}
          onClick={() => setOpenNav(!openNav)}
          tabIndex={hideForModal}
        >
          <Hamburger $openNav={openNav} />
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default Nav
