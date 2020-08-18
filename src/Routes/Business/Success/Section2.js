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
`;



const BookContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width:480px) {
        flex-direction: column-reverse;
    }
`;
const ImgContainer = styled.div`
`;
const BookImg = styled.img`

    height: 36rem;
    width: auto;

    @media screen and (max-width:870px) {
        height: 27rem;
    }

    @media screen and (max-width:480px) {
        height: 30rem;
        margin-top: 5rem;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;
    padding-left: 10%;
    color: #242424;
    @media screen and (max-width:480px) {
        width: 80vw;
        padding: 0;
    }
`;


const Index = styled.p`
    font-size: 7.5rem;
    font-weight: bold;
    margin-bottom: 1.7rem;

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
    font-size: 1.5rem;
    padding-top: 7rem;
    line-height: 1.813rem;

    @media screen and (max-width:480px) {
        padding-top: 3rem;
    }

`;

const Section2 = () =>    {


    return( 
        <Page className="bps2"> 
           <BookContainer>
                <ImgContainer>
                    <Fade left> 

                        <BookImg src="/Images/Business/bps2.png" alt="highlight"></BookImg>
                    </Fade>

                </ImgContainer>
            <TextContainer>
                    <div className="main_text_div">
                        <Fade top>

                        <Index>01.</Index>
                        </Fade>
                        <Fade right>
                            <MainText>고객. 그리고 고객</MainText>
                        </Fade>
                        <Fade right> 

                        <SubText>고객을 감동시키는 것이 10년 브랜드의 사명입니다.</SubText>
                        </Fade>
                        <Fade bottom>
                        <Content>
                        딜리버리쿡의 모든 기준은 고객으로부터 시작합니다.
                        <br/>맛, 구성, 가격 모두 갖춘 "가심비" 메뉴로
                        <br/>고객감동에 다가갔습니다.
                        </Content>
                        </Fade>

                    </div>
              </TextContainer>
           </BookContainer>
        </Page>
    );
};

export default Section2;
