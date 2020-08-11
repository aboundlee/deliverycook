import React, {useState,useEffect} from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';
import MenuCarosuel from "../../../Components/BigCarousel"
import Loader from '../../../Components/Loader';



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
    height: 60%;
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
        <Fade bottom cascade distance={'30%'}> 

            <TextContainer>

                <MainTextContainer>
                    <MainText>어떤 음식이 땡기시나요?</MainText>
                </MainTextContainer>

                <SubTextContainer>
                    <SubText><Bold>딜리버리쿡</Bold>이 요리해 드릴게요</SubText>
                    <Hilight src="/Images/Brand/p2_redline.svg" alt="highlight"></Hilight>

                </SubTextContainer>

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
    

