import { useContext, useEffect, useState } from "react"
import { ModalContext } from "../components/Contexts"

const useHideForModal = () => {
  const [hidden, setHidden] = useState(false)
  const { modalOpen } = useContext(ModalContext)

  useEffect(() => {
    if (modalOpen) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  }, [modalOpen])

  return hidden ? "-1" : "0"
}

export default useHideForModal
