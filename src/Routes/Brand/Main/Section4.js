import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';



const Page = styled.section`
    width: 100%;
    background-color: #242424;
    height: 600vh;
    display: flex;
    text-align: center;

    justify-content: center;

    padding-top: 6.5rem;

`;

const Bold = styled.span`
    font-weight: 900;
`;
const TextContainer = styled.div`
    margin-bottom: 50px;
    color: #fff;

`;

const MainTextContainer = styled.div`

`;
const MainText = styled.p`
    font-style: normal;
    font-weight: 900;
    font-size: 3.125rem;
    line-height: 5rem;

`;

const Hilight = styled.img`

    @media screen and (max-width:480px) {
        width: 12rem;
    } 


`;
const Section4 = () => {

    return (

        <Page>
        <TextContainer>
        <Fade bottom cascade distance={'30%'}> 

            <MainTextContainer>
                <MainText><Bold>테이블</Bold>까지 <br/>
                가는 길</MainText>
                <Hilight src="/Images/Brand/p4_redline.svg" alt="highlight"></Hilight>

            </MainTextContainer>
        </Fade>
        </TextContainer>
        </Page>
    );
};

export default Section4;
