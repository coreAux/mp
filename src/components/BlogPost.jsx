import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: hsl(220deg 10% 7%);
  border-radius: var(--border-radius);
  padding: 10px;
  width: 100%;
  cursor: pointer;

  & + & {
    margin-top: 32px;
  }

  box-shadow: var(--shadow-elevation-medium);

  @media (hover) {
    &:hover {
      box-shadow: 0 0 0 2px var(--primary-color), var(--shadow-elevation-medium);
      transition: box-shadow .2s;
    }
  }

  opacity: ${({$state}) => $state === "entered" ? 1 : 0};
  transform: ${({$state}) => $state === "entered" ? "translate3d(0, 0, 0)" : ( $state === "entering" ? "translate3d(-50%, 0, 0)" : ( $state === "exiting" && "translate3d(50%, 0, 0)" ) )};
  transition: ${({$state}) => $state !== "entered" ? "opacity 100ms, transform 100ms, height 200ms 100ms" : "opacity 100ms 200ms, transform 100ms 200ms, height 200ms"}, box-shadow .1s;
  will-change: transform, opacity, height;
  height: ${({$state}) => $state === "entered" ? "100px" : "0px"},

`

const BlogPost = ({ state, post }) => {
  return (
    <Wrapper
      $state={state}
      onClick={() => navigate(post.slug)}
    >
      <h2>{post.frontmatter.title}</h2>
      <p>{post.frontmatter.date} - {post.timeToRead} min read</p>
      <p>{post.frontmatter.description}</p>
    </Wrapper>
  )
}

export default BlogPost
