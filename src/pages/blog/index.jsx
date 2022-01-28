import React from "react"
import { graphql, Link } from "gatsby"

import styled from "styled-components"
import { SafeArea } from "../../styles"

import SEOComponent from "../../components/SEOComponent"

const StyledSafeArea = styled(SafeArea)`
  background-size: 20px 20px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: linear-gradient(90deg, transparent 1px, var(--white) 1px 19px, transparent 19px), linear-gradient(0deg, #555 1px, var(--white) 1px 19px, #555 10px);
`

const BlogPage = ({ data }) => {
  const posts = data.allMdx.edges.map((e) => e.node)
  // console.log(data.allMdx.edges)
  // console.log("posts: ", posts)
  return (
    <StyledSafeArea>
      <SEOComponent
        title="About"
        description="MaMickster..."
      />
      <h1>Blörg</h1>
      <div>
        {posts.map((p) => (
          <div key={p.id} >
            <h2><Link to={`${p.slug}`}>
              {p.frontmatter.title}
            </Link></h2>
            <p>{p.frontmatter.date} - {p.timeToRead} min read</p>
          </div>
        ))}
      </div>
    </StyledSafeArea>
  )
}

export default BlogPage

export const pageQuery = graphql`
query blog_page_query {
  allMdx {
    edges {
      node {
        timeToRead
        slug
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        excerpt(pruneLength: 150)
        id
      }
    }
  }
}
`
