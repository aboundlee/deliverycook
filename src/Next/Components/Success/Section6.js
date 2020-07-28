import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';



const Page = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: relative;
    color: black;
    height: 100vh;
`;

/* section 2 */

const ImgContainer = styled.div`
    margin: 0;
    padding 0 7%;
    width: 100%;
`;
const BookImg = styled.img`
    width: 100%;
    height : auto;
    /*height: 17.625rem;
    width: auto; */
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 7%;
    margin-bottom: 3rem;
    color: #242424;
    @media screen and (max-width:580px) {

        flex-direction: column;
    }

`;

const Title = styled.div`
  width: 100%;
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
    display: inline;
`;

const SubText = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
    text-decoration-line: underline;
    display: inline;


`;


const Contents = styled.div`
  width: 100%;
  margin-top: 11.5rem;
  @media screen and (max-width:580px) {
    margin-top: 3rem;
  }
`;


const Content = styled.p`
    font-size: 1.5rem;
    display: inline;
    line-height: 1.813rem;

`;

/* link */




const Section6 = () =>    {
  


    return( 
        <Page> 

            <TextContainer>
		<Title>
                        <Fade top>
                        <Index>05.</Index>
                        </Fade>
                        <Fade left>
                            <MainText>미래를 대비하고 발전하기</MainText>
                        </Fade>
                        <Fade left> 

                        <SubText>운영지원팀과 전략기획팀이 함께합니다.</SubText>
                        </Fade>
		</Title>
		<Contents>
                        <Fade right>
                            <Content>걱정마세요.
                                <br/>트랜드가 바뀌어도 안정적으로 운영하도록
                                <br/>전략을 기획하여 그에 따른 대안을 제시합니다.
                                <br/>운영지원팀은 지속적으로 가맹점 매출을 분석하고
                                <br/>매장운영 중 발생할 수 있는 문제들을 지원합니다.
                            </Content>
                        </Fade>
		</Contents>
            </TextContainer>
            <ImgContainer>
                    <Fade bottom> 
                        <BookImg src="/Images/Business/bps6.png" alt="highlight"></BookImg> 
                    </Fade>

            </ImgContainer>


        </Page>
    );
};

export default Section6;

