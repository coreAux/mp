module.exports = {
  siteMetadata: {
    title: "Mickey",
      siteUrl: "https://www.mikaelpetersen.se/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-styled-components"
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        "trackingId": "G-69YD8ETXJE"
      }
    },
    {
      resolve: "gatsby-plugin-react-helmet"
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Mickey",
        short_name: "Mickey",
        start_url: "/",
        background_color: "#f1f0f5",
        theme_color: "#f1f0f5",
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blog/`,
      },
      __key: "blog",
    },
    {
      resolve: "gatsby-plugin-image"
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "png", "webp"],
          placeholder: "blurred",
          quality: 100,
          // placeholder: "dominantColor",
          // breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: "transparent"
        }
      }
    },
    {
      resolve: "gatsby-transformer-sharp"
    },
    {
      resolve: "gatsby-plugin-mdx"
    }
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 2048,
    //           linkImagesToOriginal: false,
    //         }
    //       }
    //     ]
    //   }
    // },
    // {
    //   resolve: "gatsby-plugin-netlify-cms",
    //   options: {
    //     modulePath: `${__dirname}/src/cms/cms.js`,
    //   }
    // }
  ],
}
