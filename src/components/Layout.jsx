import React from "react"
import styled from "styled-components"

import { GlobalStyle, smallBreakPoint } from "../styles"
import Contexts from "./Contexts"
import Modal from "./Modal"
import Nav from "./Nav"
import Footer from "./Footer"

const LayoutWrapper = styled.div`
  // padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
`

const Main = styled.main`
  // padding: 100px 20px 0;
  padding: 100px 0 0;
  min-height: calc(100vh - 100px);
  transition: padding .3s;

  @media (max-width: ${smallBreakPoint}px) {
    // padding: 20px 20px 0;
    padding: 20px 0 0;
  }
`

const Layout = ({ children, ...props }) => {

  // console.log("props: ", props)

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...props })
    }
    return child
  })

  return (
    <Contexts>
      <LayoutWrapper>
        <GlobalStyle />

        <Modal />

        <Nav />

        <Main>
          {childrenWithProps}
        </Main>

        <Footer />
      </LayoutWrapper>
    </Contexts>
  )
}

export default Layout
