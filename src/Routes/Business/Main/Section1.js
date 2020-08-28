import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';
import './Styles';
import MenuCarosuel from "../../../Components/Carousel";



import { Page, Bold } from './Styles';


const Page2 = styled(Page)`
    background-color: #242424;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    display: flex;
    height: 100%;
    @media (max-width: 480px) {
        flex-direction: column-reverse;
    }
    
`;



const CaroselContainer = styled.div`
    position: relative;
    /* top: 50%; */
    /* transform: translateY(-50%); */
     width: 50%; 
     z-index: 10;
     @media (max-width: 480px) {
        width: 100%;
    }

`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    z-index:10;
    margin: 0 4%;

    @media (max-width: 480px) {
        margin-bottom: 40px;
   
        padding-top: 3.5vh;

    }
`;

const MainText = styled.h2`
    font-style: normal;
    font-size: 3.75rem;
    line-height: 5rem;
`;




const Section2 = () => {

    return (
        <Page2>
            <CaroselContainer>
                <MenuCarosuel category="Business" mobileItem="2"/>
            </CaroselContainer>
            <TextContainer>
                <Fade bottom distance={'30%'} delay={400}> 
                <MainText><Bold>하나의 주방</Bold>에서 <br/><Bold>2개 이상의 브랜드</Bold>를 <br/>운영해보세요</MainText>
                </Fade>
            </TextContainer>

    </Page2>
    );
};

export default Section2;



