import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';



const Page = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #242424;
    height: 100%;
    margin: 2rem 0;
    @media screen and (max-width:480px) {
        height: 40rem;
    }
`;



const BookContainer = styled.div`

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    @media screen and (max-width:480px) {
        flex-direction: column;
    }
`;


const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 22rem;
    width: 28rem;
`;
const BookImg = styled.img`

    height: 100%;
    width: 100%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
    padding-right: 10%;
    color: #242424;
    @media screen and (max-width:480px) {
        padding: 0;
        padding-top: 2rem;

        align-items: center;
    }
`;

const MainText = styled.p`
    font-size: 2.25rem;
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
    line-height: 1.5rem;
    @media screen and (max-width:480px) {
        padding-top: 1rem;
    }

`;

const TextHighlight = styled.span`
    font-size: 1.25rem;
    color: #fff;
    text-align: left;
    width: max-content;
    line-height: 1.75rem;
    background-color: rgba(229,0,18, 0.85);

`;



const Datail = () =>    {


    return( 
        <Page> 
           <BookContainer>
           <Fade right> 

                <ImgContainer>

                        <BookImg src="/Images/Business/detail2.jpg" alt="highlight"></BookImg>

                </ImgContainer>
                </Fade>

            <TextContainer>
                    <div className="main_text_div">
                        <Fade left>
                            <MainText>판매 방식의 확장</MainText>
                        </Fade>
 
                        <Fade left>
                        <Content>
                            <TextHighlight>테이크 아웃</TextHighlight>, <TextHighlight>배달</TextHighlight>, <TextHighlight>HMR 제품</TextHighlight> 까지 
                        <br/>고객 편리성에 맞춘 판매 방식으로
                        <br/>안정적인 운영 구조를 제공합니다.
                        </Content>
                        </Fade>

                    </div>
              </TextContainer>
           </BookContainer>
        </Page>
    );
};

export default Datail;
