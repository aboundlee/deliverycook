import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';




const Page = styled.section`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #242424;
    background: url("/Images/Brand/p5.jpg") no-repeat; 
    background-position: center;
    background-size: cover;
    height: 100%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15rem;
`;

const MainTextContainer = styled.div`

`;


const MainText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 3.5rem;
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
const Section5 = () => {

    return (
        <Page>
        <Fade duration={2000}> 
        <TextContainer>
            <MainTextContainer>
                <MainText>이제 <Bold>믿을 수 있는</Bold> </MainText>
                <MainText><Bold>배달음식</Bold>을 </MainText>
                <MainText>드세요</MainText>
            </MainTextContainer>
            <SubTextContainer>
                <Logo src="/Images/LogoBrand.png" alt="딜리버리쿡"/>
            </SubTextContainer>
        
        </TextContainer>
        </Fade>
    </Page>

    );
};

export default Section5;
    

