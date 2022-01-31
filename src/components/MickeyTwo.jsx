import React from "react"
import RobotoBlack from "../fonts/Roboto-Black.ttf"
import p5 from "p5"

const MickeyTwo = ({ windowWidth, windowHeight, darkmode, scrollY }) => {
  const mountRef = React.useRef()

  React.useEffect(() => {
    if (mountRef.current) {
      const sketch = new p5((p) => {
        let font
        let graphic
        let graphicTwo

        p.preload = () => {
          font = p.loadFont(RobotoBlack)
        }

        p.setup = () => {

          p.createCanvas(windowWidth.current, windowHeight.current)
          // console.log(windowWidth.current)
          // console.log(windowHeight.current)

          graphic = p.createGraphics(windowWidth.current, windowHeight.current)
          graphicTwo = p.createGraphics(windowWidth.current, windowHeight.current)


          graphic.fill("#f1f0f5")
          graphicTwo.fill("#111015")
          graphic.textFont(font)
          graphicTwo.textFont(font)

          if (windowWidth.current < 721) {
            graphic.textSize(100)
            graphicTwo.textSize(100)
          } else if (windowWidth.current < 1121) {
            graphic.textSize(200)
            graphicTwo.textSize(200)
          } else {
            graphic.textSize(300)
            graphicTwo.textSize(300)
          }

          graphic.textAlign(p.CENTER, p.CENTER)
          graphicTwo.textAlign(p.CENTER, p.CENTER)
          graphic.text("MICKEY", (windowWidth.current/2), (windowHeight.current/2.75))
          graphicTwo.text("MICKEY", (windowWidth.current/2), (windowHeight.current/2.75))
        }

        p.draw = () => {
          if (darkmode) {
            p.background("#111015")
          } else {
            p.background("#f1f0f5")
          }

          const tileSize = 50

          for (let i = 0 ; i < 12 ; i++) {

            let position = 1 - (scrollY.current / (windowHeight.current / 1))

            if (position > 1) {
              position = 1
            }

            if (position < 0) {
              position = 0
            }

            // Source
            const sx = 0
            const sy = i * tileSize * position
            const sw = windowWidth.current
            const sh = tileSize * position + (windowHeight.current - tileSize) * (1 - position)

            // Destination
            const dx = 0
            const dy = i * tileSize
            const dw = windowWidth.current
            const dh = tileSize

            if (darkmode) {
              p.image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
            } else {
              p.image(graphicTwo, dx, dy, dw, dh, sx, sy, sw, sh)
            }

          }
        }

        p.windowResized = () => {

          p.resizeCanvas(windowWidth.current, windowHeight.current)

          // For some reason 'graphic' var gets rendered twice in this function, and the first time it returns undefined which causes the app to crash, therefore the if-statement.

          if (graphic) {
            graphic.resizeCanvas(windowWidth.current, windowHeight.current)

            if (windowWidth.current < 721) {
              graphic.textSize(100)
            } else if (windowWidth.current < 1121) {
              graphic.textSize(200)
            } else {
              graphic.textSize(300)
            }

            graphic.text("MICKEY", (windowWidth.current/2), (windowHeight.current/2.75))
          }

          if (graphicTwo) {
            graphicTwo.resizeCanvas(windowWidth.current, windowHeight.current)

            if (windowWidth.current < 721) {
              graphicTwo.textSize(100)
            } else if (windowWidth.current < 1121) {
              graphicTwo.textSize(200)
            } else {
              graphicTwo.textSize(300)
            }

            graphicTwo.text("MICKEY", (windowWidth.current/2), (windowHeight.current/2.75))
          }

          // graphicTwo.resizeCanvas(windowWidth.current, windowHeight.current)
          //
          // if (windowWidth.current < 721) {
          //   graphic.textSize(100)
          //   graphicTwo.textSize(100)
          // } else if (windowWidth.current < 1121) {
          //   graphic.textSize(200)
          //   graphicTwo.textSize(200)
          // } else {
          //   graphic.textSize(300)
          //   graphicTwo.textSize(300)
          // }
          //
          // graphic.text("MICKEY", (windowWidth.current/2), (windowHeight.current/2.75))
          // graphicTwo.text("MICKEY", (windowWidth.current/2), (windowHeight.current/2.75))
        }

      }, mountRef.current)

      return () => {
        console.log("Removing...")
        sketch.remove()
      }
    }
  }, [darkmode])


  return (
    <div ref={mountRef} />
  )
}

export default React.memo(MickeyTwo)
