import React from "react"
import { Transition } from "react-transition-group"
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

const Sun = styled.div`
  grid-area: 1 / 1 / auto / auto;
  width: 10px;
  height: 10px;
  background: var(--white);
  border-radius: 9999px;
  position: relative;
  transform: ${(({$state}) => $state === "entered" ? "scale(1)" : "scale(0)")};
  transition: transform .3s;

  @media (max-width: ${smallBreakPoint}px) {
    background: var(--black);
  }
`

const beams = [0, 1, 2, 3, 4, 5, 6, 7]

const Beam = styled.div`
  width: 3px;
  height: 3px;
  background: var(--white);
  border-radius: 9999px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) rotate(${({$state, $b}) => $state === "entered" ? (360 / beams.length) * $b : (-360 / beams.length) * $b}deg) ${({$state}) => $state === "entered" ? "translate3d(0, 10px, 0)" : "translate3d(0, 0, 0)"};
  transition: transform .3s;

  @media (max-width: ${smallBreakPoint}px) {
    background: var(--black);
  }
`

const Moon = styled.div`
  grid-area: 1 / 1 / auto / auto;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle 20px at 5px 5px, var(--black) 50%, var(--white) 50%);
  border-radius: 9999px;
  transform: ${(({$state}) => $state === "entered" ? "scale(1) rotate(0deg)" : "scale(0) rotate(-400deg)")};
  transition: transform .3s;

  @media (max-width: ${smallBreakPoint}px) {
    background: radial-gradient(circle 20px at 5px 5px, var(--white) 50%, var(--black) 50%);
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

const ToggleDarkmode = ({ darkmode, ...props }) => {

  return (
    <ToggleWrapper
      aria-label="Toggle darkmode"
      {...props}
    >
      <Transition
        in={darkmode}
        unmountOnExit
        timeout={{
          exit: 300,
        }}
      >
        {(state) => (
          <Sun
            $state={state}
          >
            {beams.map((b) => (
              <Beam
                key={b}
                $state={state}
                $b={b}
              />
            ))}
          </Sun>
        )}
      </Transition>

      <Transition
        in={!darkmode}
        unmountOnExit
        timeout={{
          exit: 300,
        }}
      >
        {(state) => (
          <Moon
            $state={state}
          />
        )}
      </Transition>

      <InfoHolder>
        Darkmode: {darkmode ? "on" : "off"}
      </InfoHolder>

    </ToggleWrapper>
  )
}

export default ToggleDarkmode
