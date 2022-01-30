import React, { createRef } from "react"
import styled from "styled-components"
import RobotoBlack from "../fonts/Roboto-Black.ttf"
import p5 from "p5"

const MickeyWrapper = styled.div`
  width: calc(100% - env(safe-area-inset-right) - env(safe-area-inset-left));
  height: 100vh;
`

class Mickey extends React.Component {
  constructor(props) {
    super(props)
    this.p5Ref = createRef()
    this.Sketch = this.Sketch.bind(this)
  }

  Sketch(p5) {
    let font
    let graphic
    let graphicTwo

    p5.preload = () => {
      font = p5.loadFont(RobotoBlack)
    }

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight)
      // console.log(p5.windowWidth)
      // console.log(p5.windowHeight)

      graphic = p5.createGraphics(p5.windowWidth, p5.windowHeight)
      graphicTwo = p5.createGraphics(p5.windowWidth, p5.windowHeight)

      graphic.fill("#f1f0f5")
      graphicTwo.fill("#111015")
      graphic.textFont(font)
      graphicTwo.textFont(font)

      if (p5.windowWidth < 721) {
        graphic.textSize(100)
        graphicTwo.textSize(100)
      } else if (p5.windowWidth < 1121) {
        graphic.textSize(200)
        graphicTwo.textSize(200)
      } else {
        graphic.textSize(300)
        graphicTwo.textSize(300)
      }

      graphic.textAlign(p5.CENTER, p5.CENTER)
      graphicTwo.textAlign(p5.CENTER, p5.CENTER)
      graphic.text("MICKEY", (p5.windowWidth/2), (p5.windowHeight/2.75))
      graphicTwo.text("MICKEY", (p5.windowWidth/2), (p5.windowHeight/2.75))
    }

    p5.draw = () => {
      if (this.props.darkmode) {
        p5.background("#111015")
      } else {
        p5.background("#f1f0f5")
      }

      const tileSize = 50

      for (let i = 0 ; i < 12 ; i++) {

        let position = 1 - (this.props.scrollY / (p5.windowHeight / 1))

        if (position > 1) {
          position = 1
        }

        if (position < 0) {
          position = 0
        }

        // Source
        const sx = 0
        const sy = i * tileSize * position
        const sw = p5.windowWidth
        const sh = tileSize * position + (p5.windowHeight - tileSize) * (1 - position)

        // Destination
        const dx = 0
        const dy = i * tileSize
        const dw = p5.windowWidth
        const dh = tileSize

        if (this.props.darkmode) {
          p5.image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
        } else {
          p5.image(graphicTwo, dx, dy, dw, dh, sx, sy, sw, sh)
        }

      }
    }

    p5.windowResized = () => {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight)

      graphic.resizeCanvas(p5.windowWidth, p5.windowHeight)
      graphicTwo.resizeCanvas(p5.windowWidth, p5.windowHeight)

      if (p5.windowWidth < 721) {
        graphic.textSize(100)
        graphicTwo.textSize(100)
      } else if (p5.windowWidth < 1121) {
        graphic.textSize(200)
        graphicTwo.textSize(200)
      } else {
        graphic.textSize(300)
        graphicTwo.textSize(300)
      }

      graphic.text("MICKEY", (p5.windowWidth/2), (p5.windowHeight/2.75))
      graphicTwo.text("MICKEY", (p5.windowWidth/2), (p5.windowHeight/2.75))
    }
  }

  componentDidMount() {
    const myP5 = new p5(this.Sketch, this.p5Ref.current)
    myP5.windowWidth = this.props.windowWidth
    myP5.windowHeight = this.props.windowHeight
    console.log("p5: ", p5)
  }

  componentWillUnmount() {
    while (this.p5Ref.firstChild) {
      this.p5Ref.firstChild.remove()
    }
  }

  render() {
    return (
      <MickeyWrapper
        ref={this.p5Ref}
      />
    )
  }
}

export default Mickey
