// import React from "react"
// import { MDXRenderer } from "gatsby-plugin-mdx"
// import { MDXProvider } from "@mdx-js/react"
// import { graphql, Link } from "gatsby"
//
// import styled from "styled-components"
//
// import SEOComponent from "../components/SEOComponent"
//
// const BackButton = styled(Link)`
//   color: var(--white);
//   position: fixed;
//   top: calc(20px + 40px + 20px);
//   left: 20px;
//   background: var(--black);
//   z-index: 55;
//   border-radius: 9999px;
//   padding: 4px 8px;
//
//   @media (hover) {
//     &:hover {
//       background: var(--primary-color);
//     }
//   }
// `
//
// const MdxPage = ({
//   data: {
//     mdx: {
//       frontmatter: {
//         title,
//         embeddedImagesLocal
//       },
//       body,
//       excerpt
//     }
//   }
// }) => {
//   return (
//     <>
//       <SEOComponent
//         title={title}
//         description={excerpt}
//       />
//
//       <BackButton to="/blog/">Back</BackButton>
//       <h1>{title}</h1>
//       <MDXProvider>
//         <MDXRenderer
//           title={title}
//           excerpt={excerpt}
//           localImages={embeddedImagesLocal}
//         >
//           {body}
//         </MDXRenderer>
//       </MDXProvider>
//     </>
//   )
// }
//
// export const query = graphql`
//   query blog_post_query ($id: String) {
//     mdx (id: { eq: $id }) {
//       frontmatter {
//         title
//         embeddedImagesLocal {
//           childImageSharp {
//             gatsbyImageData(placeholder: BLURRED)
//           }
//         }
//       }
//       excerpt(pruneLength: 150)
//       body
//     }
//   }
// `
//
// export default MdxPage
