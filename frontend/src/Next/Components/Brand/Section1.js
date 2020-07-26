import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';




const Page = styled.section`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFFFFF;
    background: url("/Images/Brand/p1.png") no-repeat; 
    background-position: center;
    background-size: cover;
    height: 100%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const MainTextContainer = styled.div`

`;


const MainText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 3.75rem;
    line-height: 5rem;

    display: inline;

    @media screen and (max-width:480px) {
        display: block;
    }

`;


const SubTextContainer = styled.div`
    margin-top: 21px;

`;



const SubText = styled.p`
    vertical-align:middle;
    font-style: normal;
    font-weight: normal;
    font-size: 1.563rem;
`;


const Hilight = styled.img`
    vertical-align:middle;
    margin-top: 1px;
    @media screen and (max-width:480px) {
    	width: 7rem;
    }

`;

const Bold = styled.span`
    font-weight: 900;
`;
const Section1 = () => {

    return (
        <Page>
        <Fade duration={2000}> 
        <TextContainer>
            <MainTextContainer>
                <MainText>대한민국 </MainText>
                <MainText><Bold>배달음식</Bold>의 </MainText>
                <MainText>대표브랜드,</MainText>
            </MainTextContainer>
            <SubTextContainer>
                <SubText>딜리버리쿡</SubText>
                <Hilight src="/Images/Brand/highlight.svg" alt="highlight"></Hilight>
            </SubTextContainer>
        
        </TextContainer>
        </Fade>
    </Page>

    );
};

export default Section1;
    

