
import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';



import { Page, Bold } from './Styles';

const Page12 = styled(Page)`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    background: url("/Images/Business/p3.png") no-repeat; 
    background-position: right bottom;
    background-size: contain;

    color: #242424;

`;


const TextContainer = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 10%;
    color: #242424;
    @media (max-width: 480px) {
      padding-left: 2%;
    }
`;


const MainTextWrapper = styled.div`
    margin-bottom: 2rem;
`;

const MainText = styled.p`
   font-style: normal;
    font-size: 3.75rem;
    line-height: 5rem;
    font-weight: normal;
    margin-left: 1.4rem;
    @media (max-width: 480px) {
      font-size: 3rem;
    }

`;

const SubTextWrapper = styled.div`
   margin-top: 14px;
    z-index: 4;
`;

const SubText = styled.p`
    vertical-align:middle;
    line-height: 2.7rem;

    font-size: 1.75em;
    font-style: normal;
    margin-left: 1.4rem;

    @media (max-width: 480px) {
      font-size: 1.5rem;
      line-height: 1.7rem;
      padding-right: 3rem;
    }

`;

const Section12 = () => {

    return (


        <Page12> 
        <TextContainer>
            <Fade bottom distance={'30%'}> 
                <MainTextWrapper>
                    <MainText><Bold>배달 푸드코트 비즈니스</Bold>란?</MainText>
                </MainTextWrapper>
            </Fade>
            <Fade bottom distance={'30%'}> 
                <SubTextWrapper>
                    <SubText>하나의 매장에서 <Bold>여러개의 브랜드</Bold>를 운영함으로서</SubText>
                    <SubText>푸드코트처럼 <Bold>여러 고객의 니즈</Bold>를 충족시켜 <Bold>수익을 다각화</Bold>하며</SubText>
		    <SubText><Bold>상권에 따라</Bold> 최적의 브랜드를 <Bold>맞춤형으로 창업</Bold>하는 비즈니스입니다.</SubText>
                </SubTextWrapper>
            </Fade>
        </TextContainer>
        </Page12>

    );
};

export default Section12;
    

