import React, { useContext, useEffect } from "react"
import { ModalContext } from "./Contexts"

import styled from "styled-components"
import { RoundButton } from "../styles"
import { Transition } from "react-transition-group"

import useScrollY from "../hooks/useScrollY"

const ModalBackground = styled.div`
  z-index: 100;
  cursor: pointer;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-image: radial-gradient(transparent, var(--white) 75%);
  background-size: 4px 4px;
  background-repeat: repeat;
  backdrop-filter: blur(4px);

  opacity: ${({$state}) => $state === "entered" ? "1" : "0"};
  transition: opacity .3s;
`

const ModalCard = styled.div`
  z-index: 101;
  position: fixed;
  border-radius: var(--border-radius);
  top: 50%;
  left: 50%;
  // transform: translate3d(-50%,-50%,0);
  box-shadow: var(--shadow-elevation-high);
  background-color: var(--white);
  width: 420px;
  height: 600px;
  overflow-y: scroll;

  transform: translate3d(-50%, ${({$state}) => $state === "entered" ? "-50%" : "-55%"}, 0);
  opacity: ${({$state}) => $state === "entered" ? "1" : "0"};
  transition: opacity .3s, transform .3s;
`

const CloseButtonWrapper = styled.div`
  z-index: 102;
  position: fixed;
  border-radius: 9999px;
  width: 40px;
  height: 40px;

  top: calc(50vh - 300px + env(safe-area-inset-top));
  right: calc(50vw - 210px - 50px + env(safe-area-inset-right));
  opacity: ${({$state}) => $state === "entered" ? "1" : "0"};
  background: transparent;
  transition: opacity .3s;
`

const CloseButton = styled(RoundButton)`
  position: absolute;
  background: transparent;
  opacity: ${({$state}) => $state === "entered" ? "1" : "0"};
  transition: opacity .3s;
  box-shadow: none;

  @media (hover) {
    &:hover {
      background: hsl(var(--secondary-color-hsl) / .4);
    }
  }

  &::before {
    position: absolute;
    background: var(--secondary-color);
    top: 50%;
    left: 50%;
    width: 2px;
    height: 18px;
    content: "";
    margin-left: 0;
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
  }

  &::after {
    position: absolute;
    background: var(--secondary-color);
    top: 50%;
    left: 50%;
    width: 2px;
    height: 18px;
    content: "";
    margin-left: 0;
    transform: translate3d(-50%, -50%, 0) rotate(-45deg);
  }
`

const Modal = () => {
  const { modalOpen, setModalOpen, modalComponent } = useContext(ModalContext)
  const [localScroll, setLocalScroll] = React.useState(0)
  const prevModalState = React.useRef(false)
  const scrollY = useScrollY()

  useEffect(() => {
    if (!modalOpen) {
      setLocalScroll(scrollY)
    }
  }, [scrollY])

  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        if (modalOpen) {
          document.body.style.top = `-${scrollY}px`
          document.body.classList.add("modal-open")
        } else if (!modalOpen) {
          document.body.style.top = 0
          document.body.classList.remove("modal-open")
        }
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      return () => window.removeEventListener("resize", handleResize)
    }
  }, [modalOpen])

  useEffect(() => {
    if (typeof window !== undefined) {
      if (prevModalState.current && !modalOpen) {
        window.scroll(0, localScroll)
      }

      prevModalState.current = modalOpen
    }
  }, [prevModalState, modalOpen, localScroll])

  return (
    <Transition
      in={modalOpen}
      unmountOnExit
      timeout={{
        exit: 300,
      }}
    >
      {(state) => (
        <>
          <ModalBackground
            $state={state}
            onClick={() => setModalOpen(!modalOpen)}
          />

          <ModalCard
            $state={state}
            aria-modal="true"
          >
            {modalComponent}
          </ModalCard>

          <CloseButtonWrapper
            $state={state}
          >
            <CloseButton
              $state={state}
              onClick={() => setModalOpen(false)}
            />
          </CloseButtonWrapper>
        </>
      )}
    </Transition>
  )
}

export default Modal
