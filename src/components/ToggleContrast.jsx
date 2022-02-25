import React from "react"
import styled from "styled-components"
import { smallBreakPoint } from "../styles"

const ToggleWrapper = styled.button`
  background: transparent;
  position: relative;
  padding: 0;
  cursor: pointer;
  border: none;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
`

const OuterRing = styled.div`
  border-radius: 9999px;
  width: 20px;
  height: 20px;
  background: linear-gradient(90deg, var(--white) 50%, var(--black) 50%);
  position: relative;

  transform: ${({$contrastmode}) => $contrastmode ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform .3s;

  @media (max-width: ${smallBreakPoint}px) {
    background: linear-gradient(90deg, var(--black) 50%, var(--white) 50%);
  }
`

const InnerRing = styled.div`
  border-radius: 9999px;
  width: 10px;
  height: 10px;
  background: linear-gradient(270deg, var(--white) 50%, var(--black) 50%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0) ${({$contrastmode}) => $contrastmode ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform .3s .3s;

  @media (max-width: ${smallBreakPoint}px) {
    background: linear-gradient(270deg, var(--black) 50%, var(--white) 50%);
  }
`

const InfoHolder = styled.div`
  cursor: default;
  position: absolute;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: var(--border-radius);
  color: var(--white);
  background: hsl(var(--black-hsl) / .7);
  width: 110px;
  top: calc(100% + 10px);
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;

  button:hover > &:not(:hover) {
    opacity: 1;
    visibility: visible;
    transition: opacity .3s 1s;
  }
`

const ToggleDarkmode = ({ contrastmode, ...props }) => {

  return (
    <ToggleWrapper
      aria-label="Toggle high contrast"
      $contrastmode={contrastmode}
      {...props}
    >
        <OuterRing $contrastmode={contrastmode}>
          <InnerRing $contrastmode={contrastmode} />
        </OuterRing>

      <InfoHolder focusable={false}>
        Contrast: {contrastmode ? "high" : "low"}
      </InfoHolder>

    </ToggleWrapper>
  )
}

export default ToggleDarkmode
