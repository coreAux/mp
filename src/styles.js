import styled, { createGlobalStyle } from "styled-components"
import MickeyLogo from "./images/logo_mickey.svg"
import MickeyLogoDarkmode from "./images/logo_mickey_darkmode.svg"
export const smallBreakPoint = "700"

export const GlobalStyle = createGlobalStyle`
  @keyframes rotate_clockwise {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  :root {
    /* SHARED VARS */
    --color-alpha: 1;
    --primary-color: #2ec990;
    --primary-color-hsl: 158deg 63% 48%;
    --secondary-color: #f64060;
    --secondary-color-hsl: 349deg 91% 61%;
    --border-radius: 10px;
    --border-radius-1: 30% 70% 70% 30% / 53% 30% 70% 47%;
    --border-radius-2: 53% 47% 34% 66% / 63% 46% 54% 37%;
    --border-radius-3: 37% 63% 56% 44% / 49% 56% 44% 51%;
    --border-radius-4: 63% 37% 37% 63% / 43% 37% 63% 57%;
    --border-radius-5: 49% 51% 48% 52% / 57% 44% 56% 43%;
    --shadow-elevation-low:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
      0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
      1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
    --shadow-elevation-medium:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
      0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
      2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
      5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
    --shadow-elevation-high:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
      1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
      2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
      4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
      7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
      11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
      17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
      25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);
    --padding: 10px;

    /* LIGHT VARS */
    --white: #f1f0f5;
    --white-hsl: 252deg 20% 95%;
    --footer-bg-color: var(--black);
    --black: #111015;
    // --black-hsl: 252deg 14% 7%;
    --black-hsl: 200deg 11% 9%;
    --letter-spacing: 0px;
    --letter-spacing-inverted: .5px;
    --shadow-color: 252deg 7% 60%;
    --blogpost-color: hsl(220deg 10% 98%);
    --circle-color: hsl(0deg, 0%, 98%);
    color-scheme: light;

    &.contrastmode {
      --primary-color: #00aa50 /*#157854*/;
    }

    /* DARK VARS */
    &.darkmode {
      --white: #111015;
      // --white-hsl: 252deg 14% 7%;
      --white-hsl: 200deg 11% 9%;
      --footer-bg-color: var(--black);
      --black: #f1f0f5;
      --black-hsl: 252deg 20% 95%;
      --letter-spacing: .5px;
      --letter-spacing-inverted: 0px;
      // --shadow-color: 253deg 0% 0%;
      --shadow-color: 0deg 0% 0%;
      --blogpost-color: hsl(220deg 10% 7%);
      --circle-color: hsl(0deg, 0%, 4%);
      color-scheme: dark;

      &.contrastmode {
        --primary-color: #64FFD0;
      }
    }


  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  *::selection {
    background-color: hsl(var(--primary-color-hsl) / .5);
    color: hsl(var(--black-hsl) / .8);
  }

  html/*, body*/ {
    height: 100%;
  }

  body {
    font-family: "Oxygen", sans-serif;
    font-size: 16px;
    letter-spacing: var(--letter-spacing);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: var(--black);
    padding-bottom: 1px;

    background-color: var(--white);
    background: url(${MickeyLogo}) 50% 50% / 80% 100% fixed no-repeat, linear-gradient(0deg, var(--white), var(--white));

    @media (max-width: ${smallBreakPoint}px) {
      background: url(${MickeyLogo}) 10% 10% / 10% 2%, linear-gradient(0deg, var(--white), var(--white));
    }

    .darkmode & {
      background: url(${MickeyLogoDarkmode}) 50% 50% / 80% 100% fixed no-repeat, linear-gradient(0deg, var(--white), var(--white));

      @media (max-width: ${smallBreakPoint}px) {
        background: url(${MickeyLogoDarkmode}) 10% 10% / 10% 2%, linear-gradient(0deg, var(--white), var(--white));
      }
    }

    // width: 100vw;
    // overflow-x: hidden;

    &.nav-open,
    &.modal-open {
      overflow: hidden;
      position: fixed;
    }
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  input:disabled,
  textarea:disabled {
    color: hsl(var(--black-hsl) / .2);
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 48px;
    line-height: 1;

    main & {
      margin-bottom: 16px;
    }

    @media (max-width: ${smallBreakPoint}px) {
      font-size: 32px;
    }
  }

  h2 {
    font-family: "Roboto", sans-serif;
    // text-transform: uppercase;
    font-size: 24px;
  }

  main a {
    position: relative;
    color: var(--primary-color);
    text-decoration: none;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -3px;
      border-radius: 9999px;
      left: 0;
      background-image: linear-gradient(90deg, transparent 50%, var(--primary-color) 50%);
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
      bottom: -3px;
      border-radius: 9999px;
      left: 0;
      background-image: linear-gradient(90deg, transparent 50%, var(--primary-color) 50%);
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
        background-color: hsl(var(--primary-color) / .2);
      }
    }
  }

  p + p {
    margin-top: 16px;
  }

  #root, #___gatsby {
    isolation: isolate;
  }

  #gatsby-focus-wrapper {
    width: 100vw;
    // overflow-x: hidden;
  }

  code {
    background: hsl(var(--black-hsl) / .2);
    padding: 1px 4px;
  }
`

export const SafeArea = styled.div`
  padding-right: calc(40px + env(safe-area-inset-right));
  padding-left: calc(40px + env(safe-area-inset-left));

  & + & {
    margin-top: 10vh;
  }
`

export const Button = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: inherit;
  font-weight: 600;
  color: ${({$invert}) => $invert ? "var(--black)" : "var(--white)"};
  cursor: pointer;
  border: none;
  background: ${({$invert}) => $invert ? "var(--white)" : "var(--black)"};
  padding: 4px 8px;
  border-radius: 9999px;

  &:disabled {
    background: hsl(var(--black-hsl) / .2);
    color: hsl(var(--black-hsl) / .2);
  }

  @media (hover) {
    &:hover:not(:disabled) {
      background: var(--primary-color);
    }

    &:hover:disabled {
      cursor: not-allowed;
    }
  }
`

export const RoundButton = styled.button`
  cursor: pointer;
  border: none;
  background: var(--black);
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  box-shadow: var(--shadow-elevation-high);
`

export const Emoji = styled.span`
  ${({$size}) => `font-size: ${$size};`}
`

export const Kard = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-columns: 1fr;
  grid-auto-flow: row;
  gap: 32px;
  align-items: center;
`

export const Borre = styled.div`
  grid-area: auto / auto / auto / span ${({$mdSpan}) => $mdSpan || "6"};

  @media (max-width: ${smallBreakPoint}px) {
    ${({ $smOrder }) => "order: " + $smOrder + ";"}
    grid-area: auto / auto / auto / span ${({$smSpan}) => $smSpan || "12"};
  }
`
