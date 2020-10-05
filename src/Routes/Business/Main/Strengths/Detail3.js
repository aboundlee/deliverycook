import React,{useState} from 'react';


import Fade from 'react-reveal/Fade';
import styled, { css, keyframes } from "styled-components";
import useInterval from "../../../../Hooks/useInterval";



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
    height: 20rem;
    width: 28rem;

    @media screen and (max-width:480px) {
        height: 23rem;
    }

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
        padding-left: 0;
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
    color: #fff;
    text-align: left;
    width: max-content;
    line-height: 1.75rem;
    background-color: rgba(229,0,18, 0.85);
`;




const BrandContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    ${'' /* justify-content: center; */}
    align-items: center;
    @media (max-width: 768px) {
        justify-content: center;    
    }

`;

const BrandWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 768px) {
        left: 50%;
    }
`;




const Menu = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    height: 22.563rem;
    width: 28rem;
`;

const LogoWrapper = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 16.344rem;
    height: 16.344rem;
`;

const Logo = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 10.188rem; 
    height: 7.688rem;
`;


const Datail = () =>    {

    const [slide, setSlide] = useState(1);
    const [slidezIndex, setSlidezIndex] = useState([3,2,1]);
    useInterval(() => {
        setSlidezIndex(slidezIndex.map(x => (x===1) ? 3 : x-1));

        if (slide === 1) {
            setSlide(3);
        }
        else {
            setSlide(slide-1);
        }
      }, 600);


    return( 
        <Page> 
           <BookContainer>
           <Fade left>

                <ImgContainer>
                    <BrandContainer>

                        <BrandWrapper style={{zIndex:slidezIndex[0]}} >
                            <Logo src="/Images/Business/p1_logo1.png" alt="logo1" />
                            <LogoWrapper src="/Images/Business/p1_logoWrapper.png" alt="wrapper"/>
                            <Menu src="/Images/Business/p1_menu1.png" alt="menu1" />
                        </BrandWrapper> 
                        <BrandWrapper style={{zIndex:slidezIndex[1]}} >
                            <Logo src="/Images/Business/p1_logo2.png" alt="logo2" />
                            <LogoWrapper src="/Images/Business/p1_logoWrapper.png" alt="wrapper"/>
                            <Menu src="/Images/Business/p1_menu2.png" alt="menu2" />
                        </BrandWrapper> 
                        <BrandWrapper style={{zIndex:slidezIndex[2]}}>
                            <Logo src="/Images/Business/p1_logo3.png" alt="logo3" />
                            <LogoWrapper src="/Images/Business/p1_logoWrapper.png" alt="wrapper"/>
                            <Menu src="/Images/Business/p1_menu3.png" alt="menu3" />
                        </BrandWrapper>
                </BrandContainer>
                </ImgContainer>
                </Fade>

            <TextContainer>
                    <div className="main_text_div">
                        <Fade right>
                            <MainText>비수기가 없습니다.</MainText>
                        </Fade>
 
                        <Fade right>
                        <Content>
                        
                        <br/>한결같이 사랑받는 <TextHighlight>스테디셀러 메뉴</TextHighlight>들로
                        <br/>상권, 계절, 시간 어떤 변수에도
                        <br/>안정적으로 운영 해보세요.
                        </Content>
                        </Fade>

                    </div>
              </TextContainer>
           </BookContainer>
        </Page>
    );
};

export default Datail;
