
import React, {useState,useEffect} from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';
import MenuCarosuel from "../../../Components/BigCarousel"
import Loader from '../../../Components/Loader';
import Grid from '@material-ui/core/Grid';
import GridContent from '../../../Components/GridContent';



const Page = styled.section`
width: 100%;
background-color: #242424;
    
    text-align: center;
    color: #FFFFFF;
    height: 100%;

`;

const Bold = styled.span`
font-weight: 900;

`;

const TextContainer = styled.div`
    padding-top: 6.5rem;

    margin-bottom: 50px;
    height: 30%;
    @media (max-width: 480px) {
    padding-top: 14.5vh;
    }

`;


const MainTextContainer = styled.div`


`;

const MainText = styled.p`
    font-style: normal;
    font-weight: 900;
    font-size: 3.125rem;
    line-height: 5rem;
`;

const SubText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 1.875rem;
`;

const SubTextContainer = styled.div`
margin-top: 14px;

`;

const Highlight = styled.img`
    width: 8.688rem;
    margin-right: 9rem;
    @media (max-width: 480px) {
      width: 8rem;
      margin-right: 10rem;
    }


`;

const GridContainer = styled(Grid)`
    margin-top: 3rem;
   @media(max-width: 480px) {
    margin-top: 0rem;
  }
`;

const Section2 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    	setLoading(false);
	return () => setLoading(true);
  },[]);
   const onGridClick = () => {

  };

    return (
        <Page>
        <Fade bottom cascade distance={'30%'}> 

            <TextContainer>

                <MainTextContainer>
                    <MainText>믿음을 만드는 3가지 이유</MainText>
                </MainTextContainer>

                <SubTextContainer>
                    <SubText><Bold>3 COOK</Bold>으로 요리하다</SubText>
                    <Highlight src="/Images/Brand/p2_redline.svg" alt="highlight"></Highlight>

                </SubTextContainer>

            </TextContainer>
        </Fade>

            <GridContainer container>
                    <GridContent title={"재료"} img_url={"1"} onGridClick={onGridClick}/>
                    <GridContent title={"환경"} img_url={"3"} onGridClick={onGridClick}/>
                    <GridContent title={"사람"} img_url={"2"} onGridClick={onGridClick}/>
            </GridContainer>

            
        </Page>

    );
};

export default Section2;
    

