import React from "react"
import useHideForModal from "../../hooks/useHideForModal"

const Button = ({ label, ...props }) => {
  const hideForModal = useHideForModal()

  return (
    <button
      tabIndex={hideForModal}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
