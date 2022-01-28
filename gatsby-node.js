

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              title
            }
          }
          next {
            slug
            frontmatter {
              title
            }
          }
          previous {
            slug
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  data.allMdx.edges.forEach(({ node, next, previous }) => {
    const slug = node.slug
    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve("./src/templates/mdx.jsx"),
      context: {
        id: node.id,
        next,
        previous,
        slug
      },
    })
  })
}
