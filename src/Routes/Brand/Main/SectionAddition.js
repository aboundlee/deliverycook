
import React, {useState,useEffect} from 'react';

import styled, { css } from "styled-components";
import Fade from 'react-reveal/Fade';
import MenuCarosuel from "../../../Components/BigCarousel"
import Loader from '../../../Components/Loader';
import Grid from '@material-ui/core/Grid';
import GridContent from '../../../Components/GridContent';




const Page = styled.section`
    width: 100%;
    min-height: 820px;
    height: 100%;

background-color: rgba(229, 0, 18, 0.9);
    
    text-align: center;
    color: #fff;

`;

const Bold = styled.span`
font-weight: bold;

`;

const TextContainer = styled.div`
    padding-top: 6.5rem;

    margin-bottom: 50px;
    height: 30%;
    @media (max-width: 480px) {
    padding-top: 14.5vh;
    margin-bottom: 12px;
    }

`;


const MainTextContainer = styled.div`


`;

const MainText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 3.125rem;
    line-height: 5rem;
    @media (max-width: 480px) {
    line-height: 4rem;
    }
`;

const SubText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 1.875rem; 
    margin-bottom: 1.1rem;

`;

const SubTextContainer = styled.div`
margin-top: 14px;

`;

const Highlight = styled.img`
    width: 8.688rem;
    margin-right: 19rem;
    @media (max-width: 480px) {
      width: 8rem;
      margin-right: 19.5rem;
    }


`;

const GridContainer = styled(Grid)`
    margin: 3rem 0;
`;


const GridItem = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem 1.5rem;
    width: 26.125rem;
    height: 29.563rem;

   @media(max-width: 480px) {
    height: 15.563rem;
    padding: 0.5rem 3.5rem;
  }

   

    
/*
    cursor: pointer;
    &:hover {
        background: rgba(0, 0, 0, 0.05);
        border: 2px solid #fff;
    }
    $:active {
        background: rgba(0, 0, 0, 0.05);
    }
*/
`;
const G = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
   @media(max-width: 480px) {
    flex-direction: row;
   }
`;

const ThumbNail = styled.div`
    width: 100%;
    height: 17.313rem;
    ${props => props.src && 
        css`
            background: url(${props.src}) no-repeat;
    `} 
    background-size: cover;

   @media(max-width: 480px) {
    height: 100%;
  }


`;

const TitleCook = styled.p`
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0.5rem 0;

    
`;
const Title = styled.p`
    font-size: 1.75rem;
    font-weight: normal;
    margin: 0.5rem 0;

    
`;

const SubTitle = styled.p`
    font-size: 1.25rem;
    color: #727171;
    margin-top: 0.25rem;
`;
const Paper= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
`;

const Content = styled.div`
    font-size: 1rem;
    margin-top: 1rem;
    line-height: 1.3rem;
`;



const Section2 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    	setLoading(false);
	return () => setLoading(true);
  },[]);
   const onGridClick = () => {

  };

    const image_url = `/Images/Brand/News/`;
    const image_alt = `deliverycook_1`;

    return (
        <Page>
        <Fade bottom cascade distance={'30%'}> 

            <TextContainer>

                <MainTextContainer>
                    <SubText>딜리버리쿡의 <Bold>운영철학</Bold></SubText>
                    <MainText>믿음을 만드는 <Bold>3 COOK</Bold></MainText>
                </MainTextContainer>


            </TextContainer>
        </Fade>

            <GridContainer container>
		<GridItem item lg={4} md={4} sm={4} xs={12} onClick={()=>onGridClick()}>

		<G>

		    <ThumbNail src="/Images/Brand/3cook-1.jpg" alt="3cook-1"/>
            <Paper>
                <Fade bottom cascade distance={'30%'}> 
                    <TitleCook>1 COOK</TitleCook>
                    <Title>깐깐한<Bold> 재료</Bold></Title>
                    <Content>동물복지, 최저 항생제 삼겹살<br/>국내산 수제 돈까스, 순수 닭다리살 사용</Content>
                </Fade>
            </Paper>

		</G>

		</GridItem>
		<GridItem item lg={4} md={4} sm={4} xs={12} onClick={()=>onGridClick()}>
		<G>
		
		    <ThumbNail src="/Images/Brand/3cook-2.jpg" alt="3cook-2"/>
                <Paper>   
                    <Fade bottom cascade distance={'30%'} delay={300}> 
                        <TitleCook>2 COOK</TitleCook>
                        <Title>청결한<Bold> 환경</Bold></Title>
                        <Content>시스템 주방으로 <br/>더 깨끗하게 더 편리하게</Content>
                    </Fade>
                </Paper>

		</G>
		</GridItem>
		<GridItem item lg={4} md={4} sm={4} xs={12} onClick={()=>onGridClick()}>
		<G>
		
		    <ThumbNail src="/Images/Brand/News/3.png" alt="deliverycook_3"/>
            <Paper>
                <Fade bottom cascade distance={'30%'} delay={500}> 
                    <TitleCook>3 COOK</TitleCook>
                    <Title>좋은<Bold> 사람</Bold></Title>
                    <Content>GOOK COOK 전문 교육 필수! <br/>실력과 마인드가 검증된 요리사만</Content>
                </Fade>
            </Paper>
		</G>
		</GridItem>
            </GridContainer>

            
        </Page>

    );
};

export default Section2;
    

