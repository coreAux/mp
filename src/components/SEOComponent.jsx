import React from "react"
import { Helmet } from "react-helmet"

const SEOComponent = ({ title, description }) => (
  <Helmet
    htmlAttributes={{
      lang: "en",
    }}
    title={`${title === "Mickey" ? "" :  title + " | "}Mickey`}
    meta={[
      {
        name: "description",
        content: description,
      }
    ]}
  />
)

export default SEOComponent
