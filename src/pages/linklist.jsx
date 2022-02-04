import React from "react"
// import styled from "styled-components"
import { SafeArea } from "../styles"

const LinksPage = () => {

  return (
    <>
      <SafeArea>
      <h1>Useful Links</h1>
      <p>
        Here I&apos;ve collected some links to other dev blogs that I find myself going back to now and again. If you&apos;re a designer or developer I hope they can be useful for you too.
      </p>
      <ul>
        <li>
          <a href="https://www.robinwieruch.de" target="_blank" rel="noopener noreferrer">
            Robin Wieruch
          </a>
        </li>
        <li>
          <a href="https://overreacted.io" target="_blank" rel="noopener noreferrer">
            Overreacted
          </a>
        </li>
        <li>
          <a href="https://www.taniarascia.com" target="_blank" rel="noopener noreferrer">
            Tania Rascia
          </a>
        </li>
        <li>
          <a href="https://www.joshwcomeau.com" target="_blank" rel="noopener noreferrer">
            Josh W Comeau
          </a>
        </li>
      </ul>
      </SafeArea>
    </>
  )
}

export default LinksPage
