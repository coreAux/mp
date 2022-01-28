require("@fontsource/roboto/900.css")
require("@fontsource/oxygen/300.css")
require("@fontsource/oxygen/400.css")
require("@fontsource/oxygen/700.css")

const React = require("react")
const Layout = require("./src/components/Layout").default

exports.wrapPageElement = ({ element, props }) => {

  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}
