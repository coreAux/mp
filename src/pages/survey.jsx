import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Iframe = styled.iframe`
  width: 420px;
  height: 420px;
`

const SurveyPage = ({ ...props }) => {

  return (
    <Wrapper>
      <h1>Pre-Proposal Survey</h1>
      <Iframe
        title="Pre-Proposal Surver"
        src="https://research.typeform.com/to/HA1H6TsY"
        frameBorder="0"
        allowFullScreen={false}
        {...props}
      />
    </Wrapper>
  )
}

export default SurveyPage
