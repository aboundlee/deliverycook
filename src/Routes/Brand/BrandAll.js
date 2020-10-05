
import React from "react";
import styled, {css} from "styled-components";

import Fade from 'react-reveal/Fade';
import DivLinker from '../../Components/DivLinker.js';


const Page = styled.section`
    width: 100%;
    height: 100%;
  padding-top: 70px;
  
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
const MainWrapper = styled.div`
    background: url("/Images/Brand/About/brandBackground.jpg") no-repeat; 
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
`;

const ImageContainer = styled.div`
    background: url("/Images/Brand/About/deliverycook.png") no-repeat; 
    background-position: center;
    background-size: 70%;
    width: 100%;
    height: 100%;

`;
const DetailSection = styled.div`
    width: 100%;
    height: 100%;
    ${'' /* background-color: #D53833; */}
    
    ${props => props.bgColor && 
        css`
        background-color: ${props.bgColor};
    `} 
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

const Title = styled.h1`

    font-weight: 500;
    font-size: 3rem;
    line-height: 5rem;
`;

const SubTitle = styled.h2`
    font-weight: 300;
    font-size: 2rem;
    line-height: 3.5rem;
    margin-top: 3rem;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Accent = styled.img`
    margin: 2rem 0;
    width: 2.5rem;
    @media (max-width: 480px) {
        margin: 1.5rem 0;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    color: #FFFFFF;
    
    height: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ReverseWrapper = styled(Wrapper)`


    flex-direction: row-reverse;

`;

const LogoSection = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #1D1D1D;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.bgImage && 
        css`
        background-image: url('/Images/Brand/About/Brand${props.bgImage}/background.png');
    `} 
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left bottom;

`;

const Filter = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color:  rgba(29, 29, 29, 0.7);
    z-index: 1;
    left: 0;
    top: 0;
`;

const Logo = styled.img`
    width: 19.5rem;
    height: 14.75rem;
    z-index: 2;

`;


const TextContainer = styled.div`
 
    z-index:10;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-left: 10%;
    color: #ffffff;

    position: relative;
`;



const MainTextWrapper = styled.div`
    margin-bottom: 2rem;
`;

const MainText = styled.p`
   font-style: normal;
    font-size: 3rem;
    line-height: 5rem;
    font-weight: normal;
    margin-left: 1.4rem;
    @media (max-width: 480px) {
      font-size: 3rem;
    }

`;

const SubTextWrapper = styled.div`
   margin-top: 14px;
    z-index: 4;
`;

const SubText = styled.p`
    vertical-align:middle;
    line-height: 2.7rem;

    font-size: 1.75em;
    font-style: normal;
    margin-left: 1.4rem;

    @media (max-width: 480px) {
      font-size: 1.5rem;
      line-height: 2rem;
      padding-right: 9rem;
    }

`;

export default () => {

    return (
        <Page>
	{/*
            <MainWrapper>
          <Filter/>

		  <TextContainer>
		    <Fade bottom distance={'30%'}> 
			<MainTextWrapper>
			   <MainText><Bold>딜리버리쿡</Bold>은,</MainText>
			</MainTextWrapper>
		    </Fade>
		    <Fade bottom distance={'30%'}> 
			<SubTextWrapper>
			     <SubText>
				<Bold>배달&테이크아웃</Bold> 전문점입니다.
				<br/><Bold>우리 동네 작은 푸드코트</Bold> 컨셉으로
				<br/>주방에서 갓 나온 음식을 다양하게 선택하여 <Bold>포장과 배달</Bold>로 즐길 수 있습니다.
				<br/>직접 조리하고 싶은 경우, <Bold>HMR (밀키트)</Bold>도 이용이 가능합니다.
				<br/> <br/>

				<br/> 고객을 위한 <Bold>좋은 재료</Bold>,
				<br/> 고객을 위한 <Bold>깨끗한 환경</Bold>,
				<br/> 고객을 위한 <Bold>전문 쉐프</Bold>의 음식으로 정성스러운 먹거리를 선사하겠습니다.
			     </SubText>


			</SubTextWrapper>
		    </Fade>

		  </TextContainer>
          </MainWrapper>
        <Wrapper>
	  <ImageContainer/>
            <DetailSection bgColor={'#242424'}>
                <Accent src={`/Images/Brand/About/accent1.png`} alt="accent1"/>

                <Title>
                    우리 동네 작은 <Bold>푸드코트</Bold>
                </Title>
                <SubTitle>
                    한결같이 사랑받는<br/>메뉴만을 
                    모았습니다.
                    <br/>내 취향대로 골라먹는
                    <br/>재미를 느껴보세요.
                </SubTitle>
                <Accent src={`/Images/Brand/About/accent2.png`} alt="accent2"/>

            </DetailSection>
        </Wrapper>

	*/}

        <ReverseWrapper>
            <LogoSection bgImage={'1'}>
                <Filter/>
                <Logo src={`/Images/Brand/About/Brand1/brandLogo.png`} alt="logo"/>
            </LogoSection>
            <DetailSection bgColor={'#D53833'}>
                <Accent src={`/Images/Brand/About/accent1.png`} alt="accent1"/>

                <Title>
                    공존하는 <Bold>친환경 축산</Bold>
                </Title>
                <SubTitle>
                    사람이 먹기위해 기르는 가축일지라도, 
                    <br/>최소한 사육할 때는 
                    <br/>고통스럽게 키우지 
                    <br/>않아야 한다고 믿어요.
                </SubTitle>
                <Accent src={`/Images/Brand/About/accent2.png`} alt="accent2"/>

            </DetailSection>
        </ReverseWrapper>
        <Wrapper>
            <LogoSection bgImage={'2'}>
                <Filter/>
                <Logo src={`/Images/Brand/About/Brand2/brandLogo.png`} alt="logo"/>
            </LogoSection>
            <DetailSection bgColor={'#F49E21'}>
                <Accent src={`/Images/Brand/About/accent1.png`} alt="accent1"/>

                <Title>
                    <Bold>1등급 국내산 수제 돈까스</Bold>
                </Title>
                <SubTitle>
                    1등급 국내산 돼지고기로 
                    <br/>100% 수제돈까스.
                    <br/>파스타 샐러드와 
                    <br/>만나 맛나다!
                </SubTitle>
                <Accent src={`/Images/Brand/About/accent2.png`} alt="accent2"/>
            </DetailSection>
        </Wrapper>

        <ReverseWrapper>
            <LogoSection bgImage={'3'}>
                <Filter/>
                <Logo src={`/Images/Brand/About/Brand3/brandLogo.png`} alt="logo"/>
            </LogoSection>
            <DetailSection bgColor={'#C5171E'}>
                <Accent src={`/Images/Brand/About/accent1.png`} alt="accent1"/>

                <Title>
                    떡볶이, <Bold>새로 태어나다</Bold>
                </Title>
                <SubTitle>
                    떡볶이에 닭을 입다,
                    <br/>떡볶이에 돈까스를 입다 
                    <br/>떡볶이,
                    <br/>새로 태어나다.
                </SubTitle>
                <Accent src={`/Images/Brand/About/accent2.png`} alt="accent2"/>
            </DetailSection>
        </ReverseWrapper>
        <DivLinker link={'/about/1'} text={'삼겹살쿡'}  />
        </Page>
    );
  };
  
