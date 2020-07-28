import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';
import MenuCarosuel from "../../../Components/Carousel"



const Page = styled.section`
width: 100%;
background-color: #242424;
    
    text-align: center;
    color: #FFFFFF;
    padding-top: 6.5rem;
    height: 100vh;
    min-height: 56.25rem;

`;

const Bold = styled.span`
font-weight: 900;

`;

const TextContainer = styled.div`

    margin-bottom: 50px;
    height: 30%;
`;


const MainTextContainer = styled.div`


`;

const MainText = styled.p`
    font-style: normal;
    font-weight: 900;
    font-size: 3.125rem;
    line-height: 80px;
`;

const SubText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 1.875rem;
`;

const SubTextContainer = styled.div`
margin-top: 14px;

`;

const Hilight = styled.img`
    margin-right: 11em;

`;

const CarosuelContainer = styled.div`
    height: 60%;
`;
const Section2 = () => {

    return (
        <Page>
        <Fade bottom cascade distance={'30%'}> 

            <TextContainer>

                <MainTextContainer>
                    <MainText>오늘 땡기는 음식으로</MainText>
                </MainTextContainer>

                <SubTextContainer>
                    <SubText><Bold>딜리버리쿡</Bold>이 요리해 드릴게요</SubText>
                    <Hilight src="/Images/Brand/p2_redline.svg" alt="highlight"></Hilight>

                </SubTextContainer>

            </TextContainer>
        </Fade>

            <CarosuelContainer>
                <MenuCarosuel category="Brand" mobileItem="1"/>
            </CarosuelContainer>
            
        </Page>

    );
};

export default Section2;
    

