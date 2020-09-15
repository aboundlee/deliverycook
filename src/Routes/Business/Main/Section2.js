import React, {useState} from 'react';
import styled, { css, keyframes } from "styled-components";

import Fade from 'react-reveal/Fade';

import './Styles';
import useInterval from "../../../Hooks/useInterval";

import { Page, Bold } from './Styles';


const Page4 = styled(Page)`
    position:relative;
    height: 100%;

    overflow: hidden;
    /*max-height: 1000px;*/

    background: url("/Images/Business/p4.jpg") no-repeat; 
    background-position: center;
    background-size: cover;

    color: white;

`;

const ColorBold = styled(Bold)`
    ${props => {
            if (props.color) {
                
                return css `color: #${props.color}`;
            }
    }}
`;

const Filter = styled.div`
   position: absolute;
    background-color: #242424;

    filter:alpha(opacity=90);
    -moz-opacity:0.9;
    -khtml-opacity: 0.9;
    opacity: 0.9;
    height: 100%;
    width: 100%;
`;


const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding-top: 6.5rem;
    height: 40%;
    z-index: 4;

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

    font-weight: 900;

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


const ImageWrapper = styled.div`
    height: 60%;
    position: relative;

`;

const Phone = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
    height: 29.813rem;
    width: auto;    

    @media (max-width: 480px) {
        height: 400px;
    }
    

    ${'' /* @media (min-width: 1600px) {
        height: 630px;

    } */}

`;

const ScreenContainer = styled.div`
    position: absolute;
    width: 9.688rem;
    height: 21.25rem;
    bottom: 5.625rem;
    left: 50%;
    transform: translateX(-50%);

    overflow: hidden;

    @media (max-width: 480px) {
        width: 129px;
        height: 290px;
        bottom: 73px;
    }

    ${'' /* @media (min-width: 1600px) {
        width: 200px;
        height: 450px;
        bottom: 123px;
    } */}

`;


const Screen = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    height: 100%;
    width: auto;  
    ${props => {
            if (props.active) {
                return css `
                -webkit-animation:  ${slideIn} 0.45s forwards linear alternate;
                -moz-animation:    ${slideIn} 0.45s forwards linear alternate;
                -o-animation:       ${slideIn} 0.45s forwards linear alternate;
                animation:         ${slideIn}  0.45s forwards linear alternate;
                `;
            }
    }}

`;



const slideIn = keyframes`
    from {
      margin-left: 110%; 
    }
  
    to {
      margin-left: 0%;
    }
`;






const Section4 = () => {

    const [slide, setSlide] = useState(1);
    const [slidezIndex, setSlidezIndex] = useState([3,2,1]);
    const Category = [ "돈까스","분식", "한식"];
    const TextColor = ["F49E21","C5171E","E71E27"];
        useInterval(() => {
            setSlidezIndex(slidezIndex.map(x => (x===1) ? 3 : x-1));

            if (slide === 1) {
                setSlide(3);
            }
            else {
                setSlide(slide-1);
            }
          }, 1200);
        

    return (
        <Page4>
        <Filter/>
        <TextContainer>
        <Fade bottom cascade distance={'30%'}> 

            <MainTextWrapper>
                <MainText>배달앱 카테고리<br/>어디든지 있어요</MainText>
            </MainTextWrapper>
            <SubTextWrapper>
                <SubText><ColorBold color={TextColor[slide-1]}>{Category[slide-1]}</ColorBold>에도 딜리버리쿡</SubText>
            </SubTextWrapper>
            </Fade>

        </TextContainer>
        <ImageWrapper>
            <Phone src="/Images/Business/p4_phone.png" className="phone" alt="phone"></Phone> 
            <ScreenContainer>
                <Screen src="/Images/Business/p4_screen1.png" active= {slide===1 && 'active'} style={{zIndex:slidezIndex[0]}} alt="screen"></Screen> 
                <Screen src="/Images/Business/p4_screen2.png" active= {slide===2 && 'active'} style={{zIndex:slidezIndex[1]}} alt="screen"></Screen> 
                <Screen src="/Images/Business/p4_screen3.png" active= {slide===3 && 'active'} style={{zIndex:slidezIndex[2]}}  alt="screen"></Screen> 
            </ScreenContainer>
        </ImageWrapper>
        
    </Page4>

    );
};

export default Section4;
    

