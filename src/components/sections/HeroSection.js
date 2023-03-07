import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import PurchaseButton from "../buttons/PurchaseButton"
import MockupAnimation from "../animations/MockupAnimation"

const Wrapper = styled.div`
    background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
    overflow: hidden;
    `
const ContentWrapper = styled.div`
    max-width: 1234px;
    padding: 200px 30px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 360px auto;
    `
const TextWrapper = styled.div`
    max-width: 360px;
    display: grid;
    grid-template-rows: 1fr;
    grid-gap: 30px;
    `
const Title = styled(H1)`
    //styleName: Header H1;
    color: ${themes.dark.text1};
    
`
const Subtitle = styled(MediumText)`
    color: white;
`


function HeroSection() {
  return <>

<Wrapper>
  <ContentWrapper>
    <TextWrapper>
        <Title>Design <br /> and Code React Apps</Title>
        <Subtitle>  Dont skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.
        </Subtitle>
        <PurchaseButton />
    </TextWrapper>
    <MockupAnimation/>
  </ContentWrapper>
</Wrapper>
  </>
}

export default HeroSection