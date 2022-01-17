import React from "react"
import RobotoBlack from "../fonts/Roboto-Black.ttf"
// import p5 from "p5"

if (typeof window !== `undefined`) {
  // Component
  const p5 = React.lazy(() => import('p5'));
}

const MickeyFunctional = ({ darkmode, scrollY, withFont }) => {
  const [windowWidth, setWindowWidth] = React.useState(100)
  const [windowHeight, setWindowHeight] = React.useState(100)
  const p5ref = React.useRef(null)

  React.useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
      }
      window.addEventListener("resize", handleResize)
      handleResize()
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  React.useEffect(() => {
    const sketch = (p5) => {
      let font
      let graphic
      let graphicTwo

      p5.preload = () => {
        if (withFont) {
          font = p5.loadFont(RobotoBlack)
        }

      }

      p5.setup = () => {
        p5.createCanvas(windowWidth, windowHeight)

        graphic = p5.createGraphics(windowWidth, windowHeight)
        graphicTwo = p5.createGraphics(windowWidth, windowHeight)

        graphic.fill("#f1f0f5")
        graphicTwo.fill("#010005")
        if (withFont) {
          graphic.textFont(font)
          graphicTwo.textFont(font)
        }


        if (windowWidth < 721) {
          graphic.textSize(100)
          graphicTwo.textSize(100)
        } else if (windowWidth < 1121) {
          graphic.textSize(200)
          graphicTwo.textSize(200)
        } else {
          graphic.textSize(300)
          graphicTwo.textSize(300)
        }

        graphic.textAlign(p5.CENTER, p5.CENTER)
        graphicTwo.textAlign(p5.CENTER, p5.CENTER)
        graphic.text("MICKEY", (windowWidth/2), (windowHeight/2.75))
        graphicTwo.text("MICKEY", (windowWidth/2), (windowHeight/2.75))
      }

      p5.draw = () => {
        if (darkmode) {
          p5.background("#010005")
        } else {
          p5.background("#f1f0f5")
        }

        const tileSize = 50

        for (let i = 0 ; i < 12 ; i++) {

          let position = 1 - (scrollY / (p5.windowHeight / 1))

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
          const sw = windowWidth
          const sh = tileSize * position + (windowHeight - tileSize) * (1 - position)

          // Destination
          const dx = 0
          const dy = i * tileSize
          const dw = windowWidth
          const dh = tileSize

          if (darkmode) {
            p5.image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
          } else {
            p5.image(graphicTwo, dx, dy, dw, dh, sx, sy, sw, sh)
          }

        }
      }

      p5.windowResized = () => {
        console.log("Resizing...")
        console.log(p5.windowWidth)
        p5.resizeCanvas(windowWidth, windowHeight)

        graphic.resizeCanvas(windowWidth, windowHeight)
        graphicTwo.resizeCanvas(windowWidth, windowHeight)

        if (windowWidth < 721) {
          graphic.textSize(100)
          graphicTwo.textSize(100)
        } else if (windowWidth < 1121) {
          graphic.textSize(200)
          graphicTwo.textSize(200)
        } else {
          graphic.textSize(300)
          graphicTwo.textSize(300)
        }

        graphic.text("MICKEY", (windowWidth/2), (windowHeight/2.75))
        graphicTwo.text("MICKEY", (windowWidth/2), (windowHeight/2.75))
      }
    }

    if (p5ref.current) {
      const myP5 = new p5(sketch, p5ref.current)
      myP5.redraw()
      return () => myP5.remove()
    }
  }, [p5ref, darkmode, scrollY, windowWidth, windowHeight, withFont])

  return (
    <>
      <p>width: {windowWidth}</p>
      <p>height: {windowHeight}</p>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "transparent"
        }}
        ref={p5ref}
      />
    </>
  )
}

export default MickeyFunctional
