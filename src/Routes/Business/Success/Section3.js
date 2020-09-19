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

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;

    @media screen and (max-width:480px) {
        width: 85vw;
        padding: 0;
    }

`;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
    width: 50%;
    height: 86%;


    @media screen and (max-width:480px) {
        margin-top: 5rem;
    }
`;
const ImgDiv1 = styled.div`
  display: flex;
align-items: center;
  justify-content: center;
  margin-right: 3%;

`;
const ImgDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    margin-right: 7%;

`;
const BookImg1 = styled.img`
    width: 323px;
    height: auto;
    margin: 3%;

    @media screen and (max-width:870px) {
        width: 215px;
    }
    @media screen and (max-width:480px) {
        width: 150.5px;
    }
`;

const BookImg2 = styled.img`

    width: 323.46px;
    height: auto;
    margin: 3%;
    @media screen and (max-width:870px) {
        width: 215.64px;
    }

    @media screen and (max-width:480px) {
        width: 150.6px;
    }
`;

//    margin-right: 7%;
const BookImg3 = styled.img`

    width: 323.46px; 
    height: auto;
    margin: 3%;
    vertical-align: bottom;

    @media screen and (max-width:870px) {
        width: 215.64px;
    }


    @media screen and (max-width:480px) {
        width: 150.6px;
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
        <Page> 
           <BookContainer>
            <TextContainer>
                    <div className="main_text_div">
                    <Fade top>

                    <Index>02.</Index>
                    </Fade>
                        <Fade left>
                            <MainText>창업, 두 번은 없도록</MainText>
                        </Fade>
                        <Fade left> 

                        <SubText>시작부터 되는 아이템을 조합하여 창업하다.</SubText>
                        </Fade>
                        <Fade bottom>
                        <Content>상권, 계절, 시간대,
                        <br/>어떤 변수에도 안정적인 운영이 가능하도록
                        <br/>브랜드를 만들었습니다.
                        <br/>시작부터 유연하게 창업하세요.</Content>
                        </Fade>

                    </div>
            </TextContainer>
            <ImgContainer>
		<ImgDiv1>
                        <Fade bottom>
                        <BookImg1 src="/Images/Business/bps3_left.jpg" alt="bps3_left"></BookImg1>
                        </Fade>
		</ImgDiv1>
		<ImgDiv2>
                        <Fade top>
                        <BookImg2 src="/Images/Business/bps3_right_top.jpg" alt="bps3_right_top"></BookImg2>
                        </Fade>
                        <Fade right>
                        <BookImg3 src="/Images/Business/bps3_right_bottom.jpg" alt="bps3_right_bottom"></BookImg3>
                        </Fade>
		</ImgDiv2>

            </ImgContainer>
           </BookContainer>

        </Page>
    );
};

export default Section2;
