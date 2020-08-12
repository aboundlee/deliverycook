import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';

import './Styles';

import { Page, Bold } from './Styles';


const Page1 = styled(Page)`

    position: relative;
    height: 100%;
    
`;


const Background = styled.div`
   background: url("/Images/Business/p1.png") no-repeat; 
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;

    left: 0;
    left: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
`;

const Filter = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: #242424;

    filter:alpha(opacity=85);
    -moz-opacity:0.85;
    -khtml-opacity: 0.85;
    opacity: 0.85;

    will-change: opacity;

    height: 100%;
    width: 100%;

    z-index: 2;
`;


const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 6;
    padding-top: 8%;
`;

const MainText = styled.p`
   font-style: normal;
    font-weight: normal;
    font-size: 3.75rem;
    line-height: 5rem;
`;

const SubText = styled.p`
    vertical-align:middle;
    font-style: normal;
    font-weight: normal;
    font-size: 1.563rem;
`;





const ImgContainer = styled.div`
    margin-top: 21px;
    padding: 0 3%;

`;

const LogoImg = styled.img`
  vertical-align:middle;
    margin-top: 90px;
    width: 100%;
`;




const Section1 = () =>    {

    return (
        <Page1 className="bp1"  id="scroll-section-1">
        <Background>
        <Filter/>
            <TextContainer>
                <Fade bottom distance={'30%'}>  
                    <MainText><Bold>하나의 매장</Bold>에서<br/><Bold>여러개</Bold>의 <Bold>배달 전문점</Bold>을 운영하다.</MainText>
                </Fade>
                <Fade duration={3000}> 
                    <ImgContainer>
                        <LogoImg src="/Images/Business/p1_logo.png" className="logo" alt="logo"></LogoImg>
                    </ImgContainer>
                </Fade>
            </TextContainer>
  
            </Background>

    </Page1>


    );


};

export default Section1;
