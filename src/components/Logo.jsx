import React, { useRef, useEffect } from "react"

import styled from "styled-components"
import MickeyIcon from "../svgs/MickeyIcon"

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
`

const StyledMickeyIcon = styled(MickeyIcon)`
  width: 40px;
  height: 40px;
`

const rotationAnimation = [
  { transform: "rotate(0deg)" },
  { transform: "rotate(360deg)" }
]

const Logo = ({ rotate = false }) => {
  const logoRef = useRef()

  useEffect(() => {
    if (logoRef.current && rotate) {
      const logotype = logoRef.current
      const logoAnimation = logotype.firstChild.animate(rotationAnimation, {
        duration: 1000,
        iterations: 0,
        fill: "forwards",
        easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      })

      logoAnimation.pause()

      const handleMouseOver = () => {
        logoAnimation.effect.updateTiming({
          iterations: 1
        })

        logoAnimation.play()
      }

      logotype.addEventListener("mouseenter", handleMouseOver)

      return () => {
        logotype.removeEventListener("mouseover", handleMouseOver)
      }
    }
  }, [logoRef])

  return (
    <IconWrapper
      ref={logoRef}
    >
      <StyledMickeyIcon />
    </IconWrapper>
  )
}

export default Logo
