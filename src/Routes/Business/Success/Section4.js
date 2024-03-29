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

/* section 2 */

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


const Section4 = () =>    {


    return( 
        <Page> 
           <BookContainer>
                <ImgContainer>
                    <Fade left> 

                        <BookImg src="/Images/Business/bps4.jpg" alt="bps4"></BookImg>
                    </Fade>

                </ImgContainer>
            <TextContainer>
                    <div className="main_text_div">
                        <Fade top>
                            <Index>03.</Index>
                        </Fade>

                        <Fade right> 

                            <MainText>실력 갖추기</MainText>
                        </Fade>
                        <Fade right> 

                        <SubText>Good Cook 교육, 좋은 요리사로 재탄생하다.</SubText>
                        </Fade>
                        <Fade bottom>
                        <Content>
                            체계적인 교육 시스템과 간편한 조리 방법 개발로
                            <br/>초보 요리사도 쉽게 실력 있는 요리사로 거듭나도록
                            <br/>본사만의 특별한 교육을 지원합니다.</Content>
                        </Fade>

                    </div>
            	</TextContainer>
	     </BookContainer>
        </Page>
    );
};

export default Section4;

