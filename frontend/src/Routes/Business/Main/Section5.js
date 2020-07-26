import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';


import './Styles';

import { Page, Bold } from './Styles';

const Page5 = styled(Page)`
    position:relative;
    height: 100vh;
    /*max-height: 1000px;*/

    background: url("/Images/Business/p4.png") no-repeat; 
    background-position: center;
    background-size: cover;

    color: black;

`;

const Filter = styled.div`
  position: absolute;
    background-color: #fff;

    filter:alpha(opacity=90);
    -moz-opacity:0.9;
    -khtml-opacity: 0.9;
    opacity: 0.9;

    height: 100%;
   /* max-height: 1000px;*/

    width: 100%;

`;

const TextContainer = styled.div`

    height: 50%;

    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding-top: 6.5rem;

    @media (max-width: 480px) {
        padding-top: 14.5vh;
    }
`;

const MainTextWrapper = styled.div`

    z-index: 4;

`;
const MainText = styled.p`
   font-style: normal;
    font-size: 3.75rem;
    line-height: 5rem;
    font-weight: bold;

`;



const SubTextWrapper = styled.div`
   margin-top: 14px;
    z-index: 4;
`;

const SubText = styled.p`
    vertical-align:middle;
    line-height: 2.7rem;

    font-size: 2.188rem;


`;

const ImageContainer = styled.div`
    height: 50%;
    position: relative;
`;

const ImageWrapper = styled.div`
    width: 45.5rem;
    height: 20.25rem;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;


    @media (max-width: 480px) {
        width: 330px;
        height: 100%;
    }

`;

const RedLine = styled.img`
   position: absolute;
    z-index: 4;
    width: 662px;
    height: 218.34px;

    left: 10px;
    top: 40px;
    

    @media (max-width: 480px) {
        width: 331px;
        height: auto;
        left: 50%;
        transform: translate(-50%,0);
        -webkit-transform: translate(-50%,0);
    }

`;

const BlueLine = styled.img`
   position: absolute;
    z-index: 4;
    left: 265.5px;
    top: 77.83px;


    @media (max-width: 480px) {
        width: 205.5px;
        height: auto;
        left: 128px;
        top: 61.83px;
    }
`;

const RedCircle = styled.img`
   position: absolute;
    z-index: 4;
    left: 304px;
    top: 38px;


    @media (max-width: 480px) {
        width: 21.5px;
        height: auto;
        left: 138px;
        top: 23px;


    }
`;
const ArrowUp = styled.img`
    position: absolute;
    z-index: 4;
    left: 312px;
    top: 45px;


    @media (max-width: 480px) {
        width: 13px;
        height: auto;
        left: 142px;
        top: 27px;


    }
`;

const Line = styled.img`
    position: absolute;
    z-index: 4;
    top: 274px;
    left: 50%;
    transform: translate(-50%,0);
        -webkit-transform: translate(-50%,0);
    @media (max-width: 480px) {
        width: 333.5px;
        height: 1px;
        top: 180px;



    }
`;

const Percent = styled.img`
    position: absolute;
    z-index: 4;
    left: 225px;
    top: 40px;


    @media (max-width: 480px) {
        width: 50.5px;
        height: auto;
        left: 81px;
        top: 23px;

    }
`;

const Label = styled.p`
    position: absolute;
    z-index: 4;
    display: inline-block;
    font-weight: 500;
    font-size: 1.563rem;
    line-height: 3.75rem;
    /* or 360% */
    top: 280px;
    text-align: center;

    &:first-of-type {
    left: 155px;
    }

    &:nth-of-type(2) {
        left: 330px;
    }
    &:nth-of-type(3){
        left: 495px;
    }
    &:nth-of-type(4) {
        left: 660px;
    }

    @media (max-width: 480px) {
        top: 190px;

        &:first-of-type {
            left: 58px;
        }

        &:nth-of-type(2) {
            left: 140px;
        }
        &:nth-of-type(3){
            left: 220px;
        }
        &:nth-of-type(4) {
            left: 300px; 
        }

    }
`;

const Percents = styled.div`

    position: relative;
    height: 50px;

`;




const Section5 = () => {

    return (

                    
        <Page5>
        <Filter/>
        <TextContainer>
            <Fade bottom distance={'30%'}> 
            <MainTextWrapper>
                {/* <MainText><Bold>점심</Bold>에도, <Bold>간식</Bold>에도<br/><Bold>저녁</Bold>에도, <Bold>야식</Bold>에도</MainText> */}
                <MainText>점심에도, 간식에도<br/>저녁에도, 야식에도</MainText>
            </MainTextWrapper>
            </Fade>
            <Fade bottom distance={'30%'}> 

            <SubTextWrapper>
                <SubText>각 시간대를 모두 공략한<br/><Bold>매출 상승</Bold>을 경험해보세요</SubText>

            </SubTextWrapper>
            </Fade>

        </TextContainer>
        <ImageContainer>
            <ImageWrapper>

                <RedLine src="/Images/Business/p5_redline.svg" alt="redline"></RedLine> 
                <Fade bottom distance={'30%'} delay={400}> 
                    <BlueLine src="/Images/Business/p5_blueline.svg" alt="blueline"></BlueLine> 
                </Fade>

                <Fade bottom distance={'50%'} delay={700}> 
                    <Percents>
                    <RedCircle src="/Images/Business/p5_redcircle.svg" alt="redcircle"></RedCircle> 
                    <ArrowUp src="/Images/Business/p5_arrow.svg" alt="arrow_up"></ArrowUp> 
                    <Percent src="/Images/Business/p5_percent_black.svg" alt="percent%"></Percent>
                    </Percents>
                </Fade>

                <Line src="/Images/Business/p5_line_black.svg" alt="line"></Line> 

                <Label className="label">점심</Label>
                <Label className="label">간식</Label>
                <Label className="label">저녁</Label>
                <Label className="label">야식</Label>

            </ImageWrapper>
        </ImageContainer>
        
    </Page5>


    );
};

export default Section5;
    

