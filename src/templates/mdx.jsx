import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { graphql, Link } from "gatsby"

import styled, { css } from "styled-components"

import SEOComponent from "../components/SEOComponent"

const ButtonStyles = css`
  color: var(--white);
  position: sticky;
  background: var(--black);
  z-index: 55;
  border-radius: 9999px;
  padding: 4px 8px;
  box-shadow: var(--shadow-elevation-high);

  @media (hover) {
    &:hover {
      background: var(--primary-color);
    }
  }
`

const BackButton = styled(Link)`
  ${ButtonStyles}
  top: calc(20px + 40px + 20px);
`

const NextPrevButtons = styled(Link)`
  ${ButtonStyles}
  bottom: calc(20px);
`

const MdxPage = ({
  data: {
    mdx: {
      frontmatter: {
        title,
        embeddedImagesLocal
      },
      body,
      excerpt
    }
  },
  pageContext: {
    next,
    previous
  }
}) => {

  console.log(next)
  console.log(previous)

  return (
    <>
      <SEOComponent
        title={title}
        description={excerpt}
      />
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
      <BackButton to="/blog/">Back</BackButton>
      <h1>{title}</h1>

      <MDXProvider>
        <MDXRenderer
          title={title}
          excerpt={excerpt}
          localImages={embeddedImagesLocal}
        >

          {body}

        </MDXRenderer>
      </MDXProvider>

      {previous && <NextPrevButtons to={`../${previous.slug}`}>
        Previous: {previous.frontmatter.title}
      </NextPrevButtons>}

      {next && <NextPrevButtons to={`../${next.slug}`}>
        Next: {next.frontmatter.title}
      </NextPrevButtons>}

      </div>
    </>
  )
}

export const query = graphql`
  query blog_post_query ($id: String) {
    mdx (id: { eq: $id }) {
      frontmatter {
        title
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      excerpt(pruneLength: 150)
      body
    }
  }
`

export default MdxPage
