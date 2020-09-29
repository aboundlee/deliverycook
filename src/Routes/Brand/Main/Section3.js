



import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';


const Page = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background: url("/Images/Brand/p3_cook.png") no-repeat; 
    background-size: contain;

    align-items: center;
    background-position: left top;

    height: 100%;
    @media screen and (max-width:480px) {
    	background-image: url("/Images/Brand/p3_cook_mobile2.png") no-repeat; 
    	background-size: cover; 

    }
`;

const Filter = styled.div`
   position: absolute;
    background-color: #242424;

    filter:alpha(opacity=50);
    -moz-opacity:0.5;
    -khtml-opacity: 0.5;
    opacity: 0.5;
    height: 100%;
    width: 100%;
    @media screen and (min-width:480px) {
        display: none;
    }
`;
const Bold = styled.span`
font-weight: bold;

`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 50%;
    color: #242424;
    @media screen and (max-width:480px) {
        padding-left: 0;
        text-align: center;
    	color: #fff;
    }
`;

const MainTextContainer = styled.div`

`;

const MainText = styled.p`
   font-style: normal;
    font-weight: normal;
    font-size: 3.75rem;
    line-height: 5rem;
`;

const SubTextContainer = styled.div`
   margin-bottom: 1.1rem;

`;

const SubText = styled.p`
    vertical-align:middle;

    font-style: normal;
/*font-weight: bold;*/
/*font-size: 2.5rem;*/
    font-size: 1.875rem;
    line-height: 2.5rem;

`;

const Hilight = styled.img`
    vertical-align:middle;
    margin-bottom: 21px;

    @media screen and (max-width:480px) {
       width: 180px; 
     /*  display: none;*/
    }
`;

const Section3 = () => {


    return (
        <Page className="p3"> 
        <Filter/>
            <TextContainer>

                <Fade bottom distance={'30%'}> 

                <SubTextContainer>
                    <SubText>딜리버리쿡의 <Bold>특별함</Bold></SubText>
                </SubTextContainer>
                <MainTextContainer>
                        <MainText><Bold>배달음식</Bold>을<br/><Bold>믿고 먹을 수 </Bold>있도록 하다.</MainText>
                        <Hilight src="/Images/Brand/p5_redline.svg" alt="highlight"></Hilight>

                </MainTextContainer>

                </Fade>
            </TextContainer>
        </Page>    
    );
};

export default Section3;

