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
    flex-direction: row;
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
    padding-left: 10%;
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



const Datail1 = () =>    {


    return( 
        <Page> 
           <BookContainer>
                <Fade left> 

                <ImgContainer>
                        <BookImg src="/Images/Business/detail1.jpg" alt="highlight"></BookImg>
                </ImgContainer>
                </Fade>

                <TextContainer>
                        <div className="main_text_div">
                            <Fade right>
                                <MainText>실속있는 가성비 전략</MainText>
                            </Fade>
    
                            <Fade right>
                            <Content>
                                취향존중, 내맘대로 고르는 요리.
                                <br/>삼겹살, 돈까스, 닭볶이, 부대찌개 등 
                                <br/>실속 있는 <TextHighlight>메인 요리</TextHighlight>들을 
                                <br/><TextHighlight>7,000원대</TextHighlight>의 저렴한 가격에 
                                <br/>고객이 직접 골라가는 시스템입니다.
                            </Content>
                            </Fade>

                        </div>
                </TextContainer>
           </BookContainer>
        </Page>
    );
};

//메인 요리 중심</TextHighlight>으로 된
export default Datail1;
