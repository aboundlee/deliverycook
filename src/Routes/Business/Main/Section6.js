import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';


import './Styles';

import { Page, Bold } from './Styles';


const Page6 = styled(Page)`
    text-align: right;
    display: flex;
    align-items: center;

    color: #FFFFFF;
    background: url("/Images/Business/p6.png") no-repeat; 
    background-position: center;
    background-size: cover;
    height: 100%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 10%;
`;

const MainTextContainer = styled.div`
    margin-bottom: 2em;
`;

const MainText = styled.p`

    font-style: normal;
    font-weight: normal;
    font-size: 3.75rem;
    margin-left: 1.4rem;
    line-height: 5rem;
    font-weight: bold;

${'' /* 
    &:first-child {
    line-height: 3rem;
    } */}

`;

/*
const Hilight = styled.img`
   margin-right: 7em;
    height: 1.386em;


    @media (max-width: 480px) {
        width: 22rem;
        margin-right: 4em;
        height: 11px;
    }
`;

*/

const SubTextContainer = styled.div`
   margin-bottom: 1px;

`;

const SubText = styled.p`
    vertical-align:middle;
    font-style: normal;
    font-size: 1.875rem;
    margin-left: 1.4rem;
    line-height: 2.813rem;
`;



const Section6 = () => {

    return (

        <Page6>

        <TextContainer>
            <Fade bottom cascade distance={'30%'}> 

            <MainTextContainer>
                <MainText>적게 움직이고<br/>쉽게 만드세요</MainText>
            </MainTextContainer>
            </Fade>

            <Fade bottom distance={'30%'} delay={300}> 

            <SubTextContainer>
                    <SubText>
                    주방과 주방기구를 <Bold>최적으로 디자인</Bold>하여,
                    <br/>여러 브랜드를 <Bold>효율적으로 조리</Bold>하고
                    <br/><Bold>운영</Bold>할 수 있도록 했습니다.</SubText>
            </SubTextContainer>
            </Fade>
        </TextContainer>
    </Page6>

    );
};


export default Section6;
    


/*


  <MainText><Bold>최적화된 주방</Bold>으로</MainText>
                <Hilight src="/Images/Business/p3_redline.svg" alt="highlight"></Hilight>

                <MainText><Bold>적게</Bold> 움직이고, <Bold>쉽게</Bold> 만드세요</MainText>

                */
