import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import useHideForModal from "../hooks/useHideForModal"

const A = ({ label, href, ...props }) => {
  const hideForModal = useHideForModal()

  return (
    <OutboundLink
      href={href}
      tabIndex={hideForModal}
      {...props}
    >
      {label}
    </OutboundLink>
  )
}

export default A
