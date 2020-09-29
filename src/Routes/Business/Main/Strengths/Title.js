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
    padding-top: 2rem;
    line-height: 1.813rem;

    @media screen and (max-width:480px) {
        padding-top: 1rem;
    }

`;

const Datail1 = () =>    {


    return( 
        <Page> 


            <TextContainer>
                    <div className="main_text_div">
                        <Fade right>
                            <MainText>홀 없는 푸드코트 매장</MainText>
                        </Fade>
 
                        <Fade bottom>
                        <Content>
                        각 전문점이 한 곳에 모여있는 매장에서
                        <br/>고객이 편리하게 쇼핑하듯
                        <br/>조리한 메뉴를 골라가는 시스템입니다.
                        </Content>
                        </Fade>

                    </div>
              </TextContainer>
        </Page>
    );
};

export default Datail1;
