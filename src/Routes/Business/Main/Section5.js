import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';


import { Page, Bold } from './Styles';


const Page7 = styled(Page)`
    display: flex;
    align-items: center;

    color: #242424;
    background: url("/Images/Business/p7.jpg") no-repeat; 
    background-position: center;
    background-size: cover;
    height: 100vh;
    @media (max-width: 480px) {
        background-position: right -102px top;

    }
`;




const TextContainer = styled.div`
   display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 10%;
    margin-bottom: 15.5em;

    @media (max-width: 480px) {
        padding-left: 3%;

    }
`;

const MainTextContainer = styled.div`
    margin-bottom: 2em;
`;

const MainText = styled.p`


    font-style: normal;
    font-weight: normal;
    line-height: 5rem;
    font-size: 3.75rem;
    margin-left: 1.4rem;
    @media (max-width: 480px) {
        line-height: 4rem;
        font-size: 3rem;

    }

`;


const SubTextContainer = styled.div`
   margin-bottom: 1px;

`;

const SubText = styled.p`
   vertical-align:middle;

    font-style: normal;
    font-size: 1.875rem;
    margin-left: 1.4rem;
    line-height: 2.813rem;
    display: inline;

    &:nth-of-type(2) {
        margin-left: 0;
    }
    @media (max-width: 480px) {
        display: block;

        &:nth-of-type(2) {
            margin-left: 1.4rem;
        }
    }
`;




const Section7 = () => {

    return (


        <Page7>

        <TextContainer>
        <Fade bottom distance={'30%'}> 

            <MainTextContainer>
                <MainText><Bold>요리에만 집중하세요.</Bold></MainText>
                <MainText><Bold>운영지원</Bold>은 본사가 할게요.</MainText>                
            </MainTextContainer>
        </Fade>
        <Fade bottom distance={'30%'} delay={300}> 

            <SubTextContainer>
                    <SubText>본사의 <Bold>운영지원팀</Bold>과 </SubText>
                    <SubText><Bold>전략기획팀</Bold>이 함께 합니다.</SubText>
            </SubTextContainer>

        </Fade>
        </TextContainer>
    </Page7>

    );
};

export default Section7;
    

