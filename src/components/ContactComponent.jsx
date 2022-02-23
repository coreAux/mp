import React, { useState, useRef, useEffect, useContext } from "react"
import * as Yup from "yup"
import { Formik, Form, useField } from "formik"

import { Transition } from "react-transition-group"
import styled, { css } from "styled-components"
import { Button, Emoji } from "../styles"

import { ModalContext } from "./Contexts"

const InputCSS = css`
  letter-spacing: var(--letter-spacing);
  border: none;
  border-bottom: 2px solid var(--black);
  border-radius: 0;
  background: none;
  width: 100%;
  padding: 4px 8px;

  &:focus {
    outline: none;
    border-bottom-color: var(--primary-color);
  }
`

const Label = styled.label`
  width: 100%;
  margin: 0 0 20px;
`

const Input = styled.input`
  ${InputCSS}
  border-bottom-color: ${({$error}) => $error && "var(--secondary-color)"};

  &:focus {
    border-bottom-color: ${({$error}) => $error && "var(--secondary-color)"};
  }
`

const Error = styled.span`
  padding-left: 8px;
  color: var(--secondary-color);
`

const LabelSpan = styled.span`
  font-size: ${({$move}) => $move ? "12px" : "inherit"};
  transform: ${({$move}) => $move ? "translate3d(0, 0, 0)" : "translate3d(0, calc(100% + 4px), 0)"};
  display: inline-block;
  padding-left: 8px;
  transition: transform .2s, font-size .2s;

  label:focus-within > & {
    transform: translate3d(0, 0, 0);
    font-size: 12px;
  }
`

const InputComponent = ({ label, ...props}) => {
  const [field, meta] = useField(props)
  // console.log(!!field.value)
  return (
    <Label>
      <LabelSpan $move={!!field.value}>{label}</LabelSpan>
      <Input $error={meta.touched && meta.error} {...field} {...props} />
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </Label>
  )
}

const TextAreaWrapper = styled.div`
  width: 100%;
  display: grid;

  &::after {
    ${InputCSS}
    content: attr(data-replicated-value) " ";
    white-space: pre-wrap;
    visibility: hidden;
    text-transform: none;
    text-align: left;

    // Shared with textarea
    grid-area: 1 / 1 / 2 / 2;
    max-height: calc(4 * 24px + 16px);
  }
`

const TextArea = styled.textarea`
  ${InputCSS}
  resize: none;
  border-bottom-color: ${({$error}) => $error && "var(--secondary-color)"};

  //Shared with ::after
  grid-area: 1 / 1 / 2 / 2;
  max-height: calc(4 * 24px + 16px);

  &:focus {
    border-bottom-color: ${({$error}) => $error && "var(--secondary-color)"};
  }
`

const TextAreaComponent = ({ label, ...props}) => {
  const [field, meta] = useField(props)
  const grower = useRef()

  useEffect(() => {
    if (grower.current) {
      grower.current.dataset.replicatedValue = field.value
    }
  }, [field.value])

  return (
    <Label>
      <LabelSpan $move={!!field.value}>{label}</LabelSpan>
      <TextAreaWrapper ref={grower}>
        <TextArea rows="1" $error={meta.touched && meta.error} {...field} {...props} />
      </TextAreaWrapper>
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </Label>
  )
}

const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
`

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const SendButton = styled(Button)`
  min-width: 150px;
  margin-top: 20px;
`

const FormikWrapper = styled.div`
  transform: ${({$state}) => $state === "entered" ? "translate3d(0,0,0)" : "translate3d(-420px, 0, 0)"};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: transform .3s;
  position: absolute;
  top: 0;
  left: 0;
  background: var(--white);
`

const SuccessWrapper = styled.div`
  transform: ${({$state}) => $state === "entered" ? "translate3d(0, 0, 0)" : "translate3d(420px, 0, 0)"};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: transform .3s;
  position: absolute;
  top: 0;
  left: 0;
  background: var(--white);
`

const RelativeDiv = styled.div`
  margin-top: 20px;
  position: relative;
`

const ContactComponent = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [sendButtonText, setSendButtonText] = useState("Send")
  const { modalOpen, setModalOpen } = useContext(ModalContext)

  useEffect(() => {
    if (sendButtonText !== "Send") {
      const timer = setTimeout(() => {
        setSendButtonText("Send")
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [sendButtonText])

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [error])

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    message: Yup.string()
      .required("Required")
  })

  const onSubmit = async (values) => {
    setError(false)
    setSendButtonText("Sending...")

    try {
      const promise3 = new Promise((resolve, reject) => {
        console.log(reject)
        setTimeout(resolve, 3000, values)
      })
      const hello = await Promise.all([promise3])
      console.log("success: ", hello)
      setSendButtonText("Send")
      setSuccess(true)
    } catch (e) {
      console.log("error: ", e)
      setSendButtonText("Send")
      setError(true)
    }

    // try {
    //   const response = await fetch("https://formspree.io/f/xzbodqqw", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify(values)
    //   })
    //   console.log("response: ", response)
    //   setSendButtonText("Send")
    //   setSuccess(true)
    // } catch (e) {
    //   console.error(e)
    //   setSendButtonText("Send")
    //   setError(true)
    // }
  }

  return (
    <Wrapper>
      <h1>Send me a message</h1>

      <RelativeDiv>
        <Transition
          in={success}
          unmountOnExit
          timeout={{
            exit: 300,
          }}
        >
          {(state) => (
            <SuccessWrapper
              $state={state}
            >
              <Emoji role="img" aria-label="Party Face" $size="64px">🥳</Emoji>
              <h2>Success!</h2>
              <p>Thanks for your message! I&apos;ll get back to you as soon as possible.</p>
              {modalOpen && <SendButton
                onClick={() => setModalOpen(false)}
              >
                Close
              </SendButton>}
            </SuccessWrapper>
          )}
        </Transition>

        <Transition
          in={!success}
          unmountOnExit
          timeout={{
            exit: 300,
          }}
        >
          {(state) => (
            <FormikWrapper
              $state={state}
            >
              <Formik
                initialValues={{
                 // name: "Tims",
                 // email: "me@domain.ltd",
                 // message: "This is le message.."
                 name: "",
                 email: "",
                 message: ""
               }}
               validateOnMount={true}
               validationSchema={schema}
               onSubmit={(values) => onSubmit(values)}
              >
                {({ isValid, isSubmitting}) => (
                  <StyledForm>
                    <InputComponent
                      name="name"
                      type="text"
                      label="Name"
                      autoComplete="off"
                      disabled={isSubmitting}
                    />
                    <InputComponent
                      name="email"
                      type="email"
                      label="Email"
                      autoComplete="on"
                      disabled={isSubmitting}
                    />
                    <TextAreaComponent
                      name="message"
                      type="text"
                      label="Message"
                      autoComplete="off"
                      disabled={isSubmitting}
                    />
                    <SendButton
                      type="submit"
                      style={{width:"150px"}}
                      disabled={!isValid || isSubmitting}
                    >
                      {sendButtonText}
                    </SendButton>

                    {error && <p><Error>Something went wrong, please try again!</Error></p>}

                  </StyledForm>
                )}
              </Formik>
            </FormikWrapper>
          )}
        </Transition>
      </RelativeDiv>

    </Wrapper>
  )
}

export default ContactComponent
