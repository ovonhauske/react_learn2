import React from "react";
import styled from "styled-components";



const Wrapper = styled.div`
    max-width: 240px;
    height: 77px;
    padding: 12px 24px 12px 12px;
    background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    border: 0px;
    display: grid;
    grid-template-columns: 52px auto;
    align-content: center;
    grid-gap: 8px;
    

     
   *, & {
    transition: 0.3s ease-in-out;
    transition-delay: 0.1s;
    }

    :hover{
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 30px 60px rgba(23, 0, 102, 0.5),
            inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
            transform: translateY(-3px) scale(1.1);

    }
    
`
const Title = styled.p`
    	color: black;
`
const Subtitle = styled.p`
    color: black;
  opacity: 0.7;

`
const IconWrapper = styled.div`
    height: 45px;
    width: 45px;
    background: linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%);
    display: grid;
    align-content: center;
    justify-content: center;
    border-radius: 999999px;
    position: relative;
`

const Icon =styled.img`
    width: 29px;
  height: 29px;

`
const TextWrapper = styled.div`
align-content: center;
`
const Ring = styled.img`
    position: absolute;
    top: -15px;
    left: -16px;
    ${Wrapper}:hover & {
        transform: rotate(30deg) scale(1.05) translate(0px, 2px);
    }
`



function PurchaseButton () {
return (
<Wrapper>
    <IconWrapper>
        <Icon src="/images/icons/credit.svg" className="icon"/>
        <Ring src="/images/icons/icon-ring.svg" />
    </IconWrapper>
    <TextWrapper>
        <Title> Get Pro Access</Title>
        <Subtitle>$19 per mont</Subtitle>
    </TextWrapper>
</Wrapper>    
)
}

export default PurchaseButton
