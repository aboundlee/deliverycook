import React,{useState, useEffect} from 'react';
import styled, { css, keyframes } from "styled-components";

import Fade from 'react-reveal/Fade';
import './Styles';
import MenuCarosuel from "../../../Components/Carousel";
import { Page, Bold } from './Styles';
import useInterval from "../../../Hooks/useInterval";

const Page2 = styled(Page)`
    background-color: #242424;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    display: flex;
    height: 100%;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }    
`;

const CaroselContainer = styled.div`
    position: relative;
    /* top: 50%; */
    /* transform: translateY(-50%); */
     width: 50%; 
     z-index: 10;
     @media (max-width: 768px) {
        width: 100%;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    z-index:10;

    width: 100%;
    height: 100%;
    margin-left: 3rem;
    @media (max-width: 768px) {

        padding-top: 14.5vh;
        padding-left: 2rem;
    }
`;

const MainText = styled.h2`
    font-style: normal;
    font-size: 3.5rem;
    line-height: 5rem;
    font-weight: normal;
    @media (max-width: 768px) {
        font-size: 3.75rem;
    }
`;


const BrandContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    ${'' /* justify-content: center; */}
    align-items: center;
    @media (max-width: 768px) {
        justify-content: center;    
        margin-bottom: 8rem;
    }

`;

const BrandWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    @media (max-width: 768px) {
        left: 50%;
    }
`;



const Menu = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    height: 27.563rem;
    width: 34.606rem;
`;

const LogoWrapper = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 16.344rem;
    height: 16.344rem;
`;

const Logo = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 10.188rem; 
    height: 7.688rem;
`;

const BrandColorDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    height: 15.75rem;
    width: 29.813rem;

    ${props => {
            if (props.brand === 1) {
                return css`background-color: #E71E27`;
            } else if (props.brand === 2) {
                return css`background-color: #F49E21`;
            } else if (props.brand === 3) {
                return css`background-color: #C5171E`;
            }

            
    }}
`;

const Section2 = () => {

    const [slide, setSlide] = useState(1);
    const [slidezIndex, setSlidezIndex] = useState([3,2,1]);
    useInterval(() => {
        setSlidezIndex(slidezIndex.map(x => (x===1) ? 3 : x-1));

        if (slide === 1) {
            setSlide(3);
        }
        else {
            setSlide(slide-1);
        }
      }, 600);
    
    return (
        <Page2>
            {/* <CaroselContainer>
                <MenuCarosuel category="Business" mobileItem="2"/>
            </CaroselContainer> */}
            <BrandContainer>
                <BrandColorDiv brand= {slide} />
                <BrandWrapper style={{zIndex:slidezIndex[0]}} >
                    <Logo src="/Images/Business/p1_logo1.png" alt="logo1" />
                    <LogoWrapper src="/Images/Business/p1_logoWrapper.png" alt="wrapper"/>
                    <Menu src="/Images/Business/p1_menu1.png" alt="menu1" />
                </BrandWrapper> 
                <BrandWrapper style={{zIndex:slidezIndex[1]}} >
                    <Logo src="/Images/Business/p1_logo2.png" alt="logo2" />
                    <LogoWrapper src="/Images/Business/p1_logoWrapper.png" alt="wrapper"/>
                    <Menu src="/Images/Business/p1_menu2.png" alt="menu2" />
                </BrandWrapper> 
                <BrandWrapper style={{zIndex:slidezIndex[2]}}>
                    <Logo src="/Images/Business/p1_logo3.png" alt="logo3" />
                    <LogoWrapper src="/Images/Business/p1_logoWrapper.png" alt="wrapper"/>
                    <Menu src="/Images/Business/p1_menu3.png" alt="menu3" />
                </BrandWrapper>
            </BrandContainer>
            
            <TextContainer>
                <Fade bottom distance={'30%'} delay={400}> 
                <MainText><Bold>업종 변경 고민</Bold> 없는<br/><Bold>맞춤형 브랜드 창업</Bold>을 <br/><Bold>한 번</Bold>에 하세요</MainText>
                </Fade>
            </TextContainer>

    </Page2>
    );
};

export default Section2;



