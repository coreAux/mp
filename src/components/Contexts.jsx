import React, { useState, createContext } from "react"

export const ModalContext = createContext()

const Contexts = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalComponent, setModalComponent] = useState()

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        modalComponent,
        setModalComponent
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default Contexts
