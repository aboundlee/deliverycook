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
    margin-top: 1rem;

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


const SubImageContainer = styled.div`

    margin-top: 2.5rem;
`;

const SubTextContainer = styled.div`
    margin-bottom: 0.5rem;

`;
const SubText = styled.p`
    vertical-align:middle;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
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
    font-weight: bold;
`;
const Section1 = () => {

    return (
        <Page>
	<Background/>
        <Fade duration={2000}> 
        <TextContainer>
            <SubTextContainer>
            <SubText>
                    배달 & Take Out 전문
                </SubText>
            </SubTextContainer>
            <MainTextContainer>
                <MainText><Bold>푸드코트 </Bold></MainText>
                <MainText>비즈니스</MainText>
            </MainTextContainer>
            <SubImageContainer>

                <Logo src="/Images/LogoBrand.png" alt="딜리버리쿡"/>
            </SubImageContainer>
        
        </TextContainer>
        </Fade>
    </Page>

    );
};

export default Section1;
    

