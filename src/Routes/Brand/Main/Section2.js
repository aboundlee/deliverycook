import React, {useState,useEffect} from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';
import MenuCarosuel from "../../../Components/BigCarousel"
import Loader from '../../../Components/Loader';



const Page = styled.section`
width: 100%;
height: 100%;
background-color: #242424;
    position: relative;
    
    background: url("/Images/Brand/p1_background.jpg") no-repeat; 
    background-position: center;
    background-size: cover;
    height: 100%;    
    text-align: center;
    
    color: #FFFFFF;
    padding-bottom: 5rem;
`;

const Filter = styled.div`
  position: absolute;
    background-color: #242424;

    filter:alpha(opacity=80);
    -moz-opacity:0.8;
    -khtml-opacity: 0.8;
    opacity: 0.8;

    height: 100%;
   /* max-height: 1000px;*/

    width: 100%;

`;

const Bold = styled.span`
font-weight: bold;

`;

const TextContainer = styled.div`
    padding-top: 9.5rem;
    margin-bottom: 2rem;

    height: 30%;
    @media (max-width: 480px) {
    padding-top: 17.5vh;
    }

`;


const MainTextContainer = styled.div`


`;

const MainText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 3.5rem;
    line-height: 5rem;
`;

const SubText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 1.875rem;
    margin-bottom: 0.5rem;
`;

const SubTextContainer = styled.div`
margin-top: 14px;

`;

const Hilight = styled.img`
    margin-right: 13.5rem;
    width: 11.688rem;
    @media (max-width: 480px) {
    margin-right: 10em;
    width: 10rem;
    }

    @media (min-width: 1600px) {
    margin-right: 15.5rem;

    }

`;

const CarosuelContainer = styled.div`

`;
function useAsync(asyncFn, onSuccess) {
  useEffect(() => {
    let isMounted = true;
    asyncFn().then(data => {
      if (isMounted) onSuccess(data);
    });
    return () => {
      isMounted = false;
    };
  }, [asyncFn, onSuccess]);
}

const Section2 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    	setLoading(false);
	return () => setLoading(true);
  },[]);

    return (
        <Page>
        <Filter/>
        <Fade bottom cascade distance={'30%'}> 

            <TextContainer>

                <MainTextContainer>
                <SubText>내 입맛대로 다양하게 즐기는</SubText>
                    <MainText>우리동네 작은 <Bold>푸드코트</Bold></MainText>
                </MainTextContainer>


            </TextContainer>
        </Fade>

            <CarosuelContainer>
		{ loading 
		? (
		    <Loader loading={loading}/>
		) 
		: (
                <MenuCarosuel/>
		)}
            </CarosuelContainer>
            
        </Page>

    );
};

export default Section2;
    

