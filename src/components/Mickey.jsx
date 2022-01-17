import React, { createRef } from "react"
import RobotoBlack from "../fonts/Roboto-Black.ttf"
import p5 from "p5"

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

      graphic = p5.createGraphics(p5.windowWidth, p5.windowHeight)
      graphicTwo = p5.createGraphics(p5.windowWidth, p5.windowHeight)

      graphic.fill("#f1f0f5")
      graphicTwo.fill("#010005")
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
        p5.background("#010005")
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

        // position = easeInOutQuart(position)

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
    console.log("DidMount")
    new p5(this.Sketch, this.p5Ref.current)
  }

  componentWillUnmount() {
    console.log("WillUnmount")
  }

  // componentDidUpdate() {
  //   console.log("ref: ", this.p5Ref)
  //   console.log("sketch: ", this.Sketch)
  // }

  render() {
    const { scrollY } = this.props

    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "transparent"
        }}
        ref={this.p5Ref}
      >
      <p>ScrollY: {scrollY}</p>
      </div>
    )
  }
}

export default Mickey
