import React from "react";
import styled, {css} from "styled-components";



const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    color: #FFFFFF;
    
    height: 100%;
    padding-top: 109px;

    @media (max-width: 768px) {
        padding-top: 80px;
        flex-direction: column;

    }
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

const Title = styled.p`

    font-weight: 500;
    font-size: 3rem;
    line-height: 5rem;
`;

const SubTitle = styled.p`
    font-weight: 300;
    font-size: 2rem;
    line-height: 3.5rem;
    margin-top: 3rem;
`;

const Bold = styled.span`
  font-weight: bold;
`;


const MenuIndicator = styled.div`
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    flex-direction: column;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Text = styled.p`
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.5rem;

`;

const Indicator = styled.img`

`;
export default ({brand}) => {

    let bgColor = 1; 
    if (brand === '1') {
        bgColor = '#D53833';
    } else if (brand === '2') {
        bgColor = '#F49E21';
    } else if (brand === '3') {
        bgColor = '#C5171E';
    }

    return (
        <Wrapper>
        
            <LogoSection bgImage={brand}>
                <Filter/>
                <Logo src={`/Images/Brand/About/Brand${brand}/brandLogo.png`}/>
            </LogoSection>
            
            { brand === '1' && (
            <DetailSection bgColor={bgColor}>
                    
                <Title>
                    공존하는 <Bold>친환경 축산</Bold>
                </Title>
                <SubTitle>
                    사람이 먹기위해 기르는 가축일지라도, 
                    <br/>최소한 사육할 때는 
                    <br/>고통스럽게 키우지 
                    <br/>않아야 한다고 믿어요.
                </SubTitle>
            </DetailSection>
            )}

            { brand === '2' && (
            <DetailSection bgColor={bgColor}>
                    
                <Title>
                    <Bold>1등급 국내산 수제 돈까스</Bold>
                </Title>
                <SubTitle>
                    1등급 국내산 돼지고기로 
                    <br/>100% 수제돈까스.
                    <br/>파스타 샐러드와 
                    <br/>만나 맛나다!
                </SubTitle>
            </DetailSection>
            )}

            { brand === '3' && (
            <DetailSection bgColor={bgColor}>
                    
                <Title>
                    떡볶이, <Bold>새로 태어나다</Bold>
                </Title>
                <SubTitle>
                    떡볶이에 닭을 입다,
                    <br/>떡볶이에 돈까스를 입다 
                    <br/>떡볶이,
                    <br/>새로 태어나다.
                </SubTitle>
            </DetailSection>
            )}

            <MenuIndicator>
                <Text>메뉴 보기</Text>
                <Indicator src="/Images/Brand/About/indicator.svg"/>
            </MenuIndicator>
        </Wrapper>
    );
  };
  
