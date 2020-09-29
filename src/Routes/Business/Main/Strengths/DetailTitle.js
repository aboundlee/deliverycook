import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';
import Detail1 from './Detail1';
import Detail2 from './Detail2';
import Detail3 from './Detail3';
import Detail4 from './Detail4';


const Page = styled.section`
    width: 100%;
    background-color: #f7f7f7;
    padding: 5rem 0;
    overflow: hidden;
`;




const SmallSection = styled.div`

`;

const BookContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width:480px) {
        flex-direction: column-reverse;
    }
`;


const TextContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;


    width: 100%;

    color: #242424;
    margin: 5rem 0;

    @media screen and (max-width:480px) {
        padding: 0;
    }
`;

const MainText = styled.p`
    font-size: 3.125rem;
    line-height: 5rem;
    font-weight: bold;
    @media screen and (max-width:480px) {
        font-size: 3rem;
    }

`;

const SubText = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
    text-decoration-line: underline;

`;


const Content = styled.p`
    font-size: 1.25rem;
    padding-top: 2rem;
    line-height: 1.813rem;
    color: gray;
    @media screen and (max-width:480px) {
        padding-top: 1rem;
    }

`;

const DetailTitle = () =>    {


    return( 
        <Page> 


            <TextContainer>
                        <Content>
                        언택트 시대 흐름에 따른 변화된 라이프 스타일 속에서
                        <br/>혁신적인 비즈니스로 성공적인 창업을 시작해보세요.
                        </Content>
              </TextContainer>

              <SmallSection className="section"><Detail1/></SmallSection>
            <SmallSection className="section"><Detail2/></SmallSection>
            <SmallSection className="section"><Detail3/></SmallSection>
            <SmallSection className="section"><Detail4/></SmallSection>
        </Page>
    );
};

export default DetailTitle;
