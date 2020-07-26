import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';



const Page = styled.section`
    width: 100%;
    background-color: rgba(var(--b3f,250,250,250),1);
    display: flex;
    align-items: center;
    /* justify-content: center; */
    background: url("/Images/Business/bps1.png") no-repeat; 
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    color: black;
    position: relative;
`;

const Bold = styled.span`
    font-weight: 900;

`;

const Hilight = styled.img`
    width: 10rem;
    
    vertical-align:middle;
    margin-left: 23px;


`;
const BigBold = styled.span`
    font-size: 6.25rem;
    font-weight: 900;
`;

const Navigator = styled.div`
    display: flex;
    flex-direction: row;
    position:absolute;
    color: white;
    font-size: 2.5rem;
    text-align: center;
    right: 15%;
    bottom: 5%;
    height: 120px;
    
    @media screen and (max-width:870px) {
        height: 80px;
    }
    @media (max-width: 480px) { 
        height: 60px;
        margin-right: 50px;
    }

`;
const Circle = styled.div`
    position:relative;
    width: 64px;
    height: 100%;
    border-color: white;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
        .arrow:before,
        .arrow:after {
            background: white;
            }
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    color: white;
    padding-top: 5%;


`;

const MainTextContainer = styled.div`
    margin-bottom: 4em;

`;


const MainText = styled.p`
 
    font-style: normal;
    font-weight: normal;
    font-size: 3.125rem;
    line-height: 5rem;
    margin-left: 1.4rem;
    /* or 133% */
    @media screen and (max-width:870px) {

        line-height: 4rem;
    }
`;
const SubTextContainer = styled.div`
   margin-bottom: 1px;

`;
const SubText = styled.p`
    line-height: 3.125rem;
    vertical-align:middle;

    font-style: normal;
    font-size: 2.5rem;
    margin-left: 1.4rem;
`;



const Section1 = () =>    {


    return( 
        <Page> 

        <TextContainer>
            <Fade bottom distance={'30%'}> 
                <MainTextContainer>
                    <MainText><BigBold>10</BigBold>년이 넘어도,</MainText>
                    <Hilight src="/Images/Business/bps1_redline.svg" alt="highlight"></Hilight>
                </MainTextContainer>
            </Fade>
            <Fade bottom distance={'30%'}> 
                <SubTextContainer>
                    <SubText>점주님들이 운영할 수 있는<br/><Bold>브랜드</Bold>를 만들고 싶었습니다.</SubText>
                </SubTextContainer>
            </Fade>
        </TextContainer>
        <Navigator>
            <p>딜리버리쿡<br/><Bold>성공가이드북</Bold></p>
            <Circle>
                <div className="arrow arrow-first"></div>
                <div className="arrow arrow-second"></div>
            </Circle>
        </Navigator>
    </Page>
    );
};

export default Section1;




