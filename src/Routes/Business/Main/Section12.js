
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
    font-size: 2.75rem;
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
      line-height: 2rem;
      padding-right: 9rem;
    }

`;

const Section12 = () => {

    return (


        <Page12> 
        <TextContainer>
            <Fade bottom distance={'30%'}> 
                <MainTextWrapper>
                    <MainText><Bold>이제는 집에서 밥을 해먹지 않는 시대!</Bold></MainText>
                </MainTextWrapper>
            </Fade>
            <Fade bottom distance={'30%'}> 
                <SubTextWrapper>
                    <SubText><Bold>배달 & Take Out 푸드코트 비즈니스</Bold>는,
                    <br/>바쁜 현대인, 언택트 시대에 적합한 최적의 비즈니스.
                    <br/>
                    <br/>반찬이 아니라 <Bold>메인 요리</Bold>를 골라 담아
                    <br/>푸짐한 한상 차림을 배달과 포장으로 즐깁니다.
		            </SubText>
                </SubTextWrapper>
            </Fade>
        </TextContainer>
        </Page12>

    );
};

export default Section12;
    

