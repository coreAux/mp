import React from "react"
import { graphql, Link } from "gatsby"

import { TransitionGroup, Transition } from "react-transition-group"
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
  const [filteredPosts, setFilteredPosts] = React.useState([])
  const [filter, setFilter] = React.useState("")
  const posts = data.allMdx.edges.map((e) => e.node)
  // console.log(data.allMdx.edges)
  // console.log("posts: ", posts)

  React.useEffect(() => {
    if (filter === "") {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(posts.filter((p) => p.frontmatter.category === filter))
    }
  }, [filter])

  return (
    <StyledSafeArea>
      <SEOComponent
        title="About"
        description="MaMickster..."
      />
      <h1>Blörg</h1>
      <div
        style={{
          position: "sticky",
          top: "calc(40px + 40px)"
        }}
      >
        <button
          style={{
            background: filter === "" && "var(--primary-color)",
          }}
          onClick={() => setFilter("")}
        >
          All
        </button>
        <button
          style={{
            background: filter === "business" && "var(--primary-color)",
          }}
          onClick={() => setFilter("business")}
        >
          Business
        </button>
        <button
          style={{
            background: filter === "development" && "var(--primary-color)",
          }}
          onClick={() => setFilter("development")}
        >
          Development
        </button>
      </div>
      {/*<div>
        {filteredPosts.map((p) => (
          <div key={p.id} >
            <h2><Link to={`${p.slug}`}>
              {p.frontmatter.title}
            </Link></h2>
            <p>{p.frontmatter.date} - {p.timeToRead} min read</p>
          </div>
        ))}
      </div>*/}

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TransitionGroup
          component={null}
        >

        {filteredPosts.map((p) => (
          <Transition
            key={p.id}
            unmountOnExit
            timeout={{
              enter: 300,
              exit: 300
            }}
          >
            {(state) => (
              <>
                <div style={{
                    opacity: state === "entered" ? 1 : 0,
                    transform: `
                    ${state === "entered" ? "translate3d(0, 0, 0)" : ( state === "entering" ? "translate3d(-50%, 0, 0)" : ( state === "exiting" && "translate3d(50%, 0, 0)" ) )}
                    `,
                    transition: "opacity 100ms, transform 100ms, height 200ms",
                    willChange: "transform, opacity"
                  }} key={p.id} >
                  <h2><Link to={`${p.slug}`}>
                    {p.frontmatter.title}
                  </Link></h2>
                  <p>{p.frontmatter.date} - {p.timeToRead} min read</p>
                </div>
              </>
            )}
          </Transition>
        ))}

      </TransitionGroup>

      </div>

    </StyledSafeArea>
  )
}

/*
`${state === "entering" ? "translate3d(-100%,0,0)" : (state === "exiting" ? "translate3d(100%,0,0)" : "translate3d(0,0,0)")}`
*/

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
          category
        }
        excerpt(pruneLength: 150)
        id
      }
    }
  }
}
`
