import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';




const Page = styled.section`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    height: 100%;
`;
const Background = styled.div`
    background: url("/Images/Brand/p1.jpg") no-repeat; 
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
   position: absolute;
    top: 0;
    left: 0;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;

`;

const MainTextContainer = styled.div`

`;


const MainText = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 3.75rem;
    line-height: 5rem;

    display: inline;

    @media screen and (max-width:480px) {
        display: block;
    }

`;


const SubTextContainer = styled.div`

    margin-top: 2.5rem;
`;



const SubText = styled.p`
    vertical-align:middle;
    font-style: normal;
    font-weight: normal;
    font-size: 1.563rem;
`;


const Logo = styled.img`
    vertical-align:middle;
    margin-top: 1px;
    width: 9rem;
    @media (max-width: 480px) {
    width: 8rem;
    }

`;

const Bold = styled.span`
    font-weight: 900;
`;
const Section1 = () => {

    return (
        <Page>
	<Background/>
        <Fade duration={2000}> 
        <TextContainer>
            <MainTextContainer>
                <MainText>대한민국 </MainText>
                <MainText><Bold>배달음식</Bold>의 </MainText>
                <MainText>대표브랜드</MainText>
            </MainTextContainer>
            <SubTextContainer>

                <Logo src="/Images/Logo_KR.png" alt="딜리버리쿡"/>
            </SubTextContainer>
        
        </TextContainer>
        </Fade>
    </Page>

    );
};

export default Section1;
    

