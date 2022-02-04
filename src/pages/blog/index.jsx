import React from "react"
import { graphql } from "gatsby"

import { TransitionGroup, Transition } from "react-transition-group"
import styled from "styled-components"
import { SafeArea, Kard, Borre } from "../../styles"

import SEOComponent from "../../components/SEOComponent"
import BlogPost from "../../components/BlogPost"

const StyledSafeArea = styled(SafeArea)`
  background-size: 20px 20px;
  padding-top: 100px;
  padding-bottom: 100px;
  // background-image: linear-gradient(90deg, transparent 1px, var(--white) 1px 19px, transparent 19px), linear-gradient(0deg, #555 1px, var(--white) 1px 19px, #555 10px);
  background: radial-gradient(circle 1px at 50% 50%, hsl(var(--black-hsl) / .2) 98%, transparent 98%) 0px 0px / 16px 16px;
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
    <>
    <SEOComponent
      title="Blog"
      description="MaMickster..."
    />
    <StyledSafeArea>
      <h1>Blog</h1>
      <Kard>
      <Borre
        $mdSpan={2}
        $smSpan={12}
        style={{
          zIndex: 2,
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
      </Borre>
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

      <Borre
        $mdSpan={10}
        $smSpan={12}
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
              <BlogPost
                state={state}
                post={p}
              />
            )}
          </Transition>
        ))}

      </TransitionGroup>

    </Borre>
    </Kard>
    </StyledSafeArea>
    </>
  )
}

/*
`${state === "entering" ? "translate3d(-100%,0,0)" : (state === "exiting" ? "translate3d(100%,0,0)" : "translate3d(0,0,0)")}`
*/

export default BlogPage

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          timeToRead
          slug
          frontmatter {
            title
            description
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
