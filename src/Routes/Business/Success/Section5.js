import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';



const Page = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
/*    color: #242424; */
    color: #fff;  
    background-color: #242424; 
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
    margin-left: 10%;
    @media screen and (max-width:480px) {
        margin: 0;
    }
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
    width: 40vw;


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
    font-size: 1.875rem;
    padding-top: 4rem;
    line-height: 2.5rem;

    @media screen and (max-width:480px) {
        padding-top: 3rem;
    }

`;
const Space = styled.span`
    text-decoration-line: none;
`;

const Section5 = () =>    {


    return( 
        <Page> 
           <BookContainer>
            <TextContainer>
                    <div className="main_text_div">
                        <Fade top>
                        <Index>04.</Index>
                        </Fade>
                        <Fade left>
                            <MainText>단골 만들기</MainText>
                        </Fade>
                        <Fade left> 

                        <SubText>한 번 먹었던 손님이 두 번,<Space> </Space>세 번 오도록</SubText>
                        </Fade>
                        <Fade bottom>
                        <Content>#경험하게하고
                        <br/>#또먹게하고
                        <br/>#소문나게하다</Content>
                        </Fade>

                    </div>
            </TextContainer>
            <ImgContainer>
                    <Fade right> 

                        <BookImg src="/Images/Business/bps5.jpg" alt="bps5"></BookImg>
                    </Fade>

            </ImgContainer>
           </BookContainer>

        </Page>
    );
};

export default Section5;
