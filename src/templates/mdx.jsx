import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { graphql, Link, navigate } from "gatsby"

import styled, { css } from "styled-components"

import SEOComponent from "../components/SEOComponent"

const ButtonStyles = css`
  color: var(--white);
  border: none;
  cursor: pointer;
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

  &::after {
    display: none;
  }
`

const BackButton = styled.button`
  ${ButtonStyles}
  top: calc(20px + 40px + 20px);
`

const NextPrevWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NextPrevButtonWrapper = styled.div`
  max-width: 50%;
  padding-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const SpanStyles = css`
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
`

const NextSpan = styled.span`
  ${SpanStyles}
  width: 100%;
  text-align: right;
  display: inline-block;
`

const PrevSpan = styled.span`
  ${SpanStyles}
  width: 100%;
  text-align: left;
  display: inline-block;
`

const NextPrevButtons = styled(Link)`
  display: block;
  // ${ButtonStyles}
  // bottom: calc(20px);
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

  // console.log(next)
  // console.log(previous)

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
      <BackButton onClick={() => navigate("/blog/")}>Back</BackButton>
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

      <NextPrevWrapper>
        <NextPrevButtonWrapper>
          {previous && <NextPrevButtons to={`../${previous.slug}`}>
            <PrevSpan>Previous</PrevSpan><br/>
            {previous.frontmatter.title}
          </NextPrevButtons>}
        </NextPrevButtonWrapper>
        <NextPrevButtonWrapper>
          {next && <NextPrevButtons to={`../${next.slug}`}>
            <NextSpan>Next</NextSpan><br/>
            {next.frontmatter.title}
          </NextPrevButtons>}
        </NextPrevButtonWrapper>
      </NextPrevWrapper>

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
