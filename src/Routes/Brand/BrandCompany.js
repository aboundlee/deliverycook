import React,{useState} from "react";
import styled from "styled-components";
import Timeline from  '../../Components/Timeline.js';
import Fade from 'react-reveal/Fade';
import {isIE} from 'react-device-detect';

//import Fade from 'react-reveal/Fade';


const Page = styled.section`
    width: 100%;
    display: flex;

    flex-direction: column;
    padding: 0 5rem;
    background-color: #242424;
    color: #fff;
    overflow: hidden;
    @media (max-width:480px) {
      padding: 0;
    }

`;

const TitleWrapper = styled.div`
   display: flex;
    align-items: center;
    margin-top: 20vh;
`;
const Title = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 1rem;
    align-items: center;
`;

const Text = styled.h1`
    font-size: 2.75rem;
    font-weight: bold;
    line-height: 4rem;
`;
const HighLight = styled.img`
        width: 12.625rem;
`;

const SubTitle = styled.div`
    margin-left: 1.5rem;
    @media (max-width:480px) {
        margin-left: 0px;

    }
`;


const SubText = styled.h2`
    font-size: 1.5rem;

    display: inline;
    @media (max-width:480px) {
        width: 13rem;

        display: block;

    }
`;
const Column1 = styled.div`
    text-align: center;
  display: flex;
    text-align: center;
  align-items: center;
  justify-content: center;
   padding: 3rem;
  margin-top: 3rem;
  flex-direction: column;
   
`;
const Content = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;

`;
const Bold = styled.span`
  font-weight: bold;
`;


export default () => {
    const [selectedPost, setSelectedPost] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onPostClick = (post) => {
	//handleShow();
	//setSelectedPost(post);
	

    };

    return (
        <Page>
            <TitleWrapper>
                <Title>
                    <Text>회사소개</Text>
                    <HighLight src="/Images/Brand/store_highlight.svg" alt="highlight"/>
                </Title>
                <SubTitle><SubText>드림위드 FC</SubText></SubTitle>
            </TitleWrapper>
	    <Column1>
                <Fade bottom distance={'30%'}> 
              <Content> 
                
				저희 (주)드림위드FC는  <Bold>“신뢰를 파는 식품 제조 유통 기업”</Bold>을 목표로 하고 있으며 
     <br/>“가맹점, 직원, 협력업체의 구성원들이 함께 꿈꾸고 함께 이루며 나누는 상생의 플렛폼 공간”을 만들어 
     <br/>사회에 기여하는 것을 경영철학으로 삼고 있습니다.
<br/>
<br/>
		</Content>
                </Fade>
                <Fade bottom distance={'30%'}> 
              <Content> 

				트랜드의 변화에 빠른 대응을 하고 있는 기업으로써 
<br/> 현재 가맹사업은 물론,  <Bold>HMR 제조</Bold>를 통한 <Bold>온라인 플랫폼</Bold>, <Bold>소스 제조</Bold>를 통한 <Bold>해외수출</Bold>까지 
<br/>
<Bold> 글로벌 기업</Bold>을 만들기 위해 구성원들이 함께 노력하고 있습니다. 
<br/>
<br/>
		</Content>
                </Fade>
                <Fade bottom distance={'30%'}> 
              <Content> 

				(주)드림위드FC는 2014년 10월 <Bold>동물복지와 항생제 최소화</Bold>를 기업이념으로 하고 있는 
<br/> 독일 기업의 삼겹살을 저희 브랜드에 특징에 맞게 숙성맛을 개발하여 직영점을 2년간 운영 후, 
<br/> 전국규모의 가맹사업을 시작하여 현재 <Bold>80개의 가맹점</Bold>을 운영하고 있는 프랜차이즈 본사입니다. 
<br/>
<br/>
		</Content>
                </Fade>
                <Fade bottom distance={'30%'}> 
              <Content> 
				그후 삼겹살 배달 브랜드로 판매방식을 전환하여 <Bold>"배달삼겹 갈통삼"</Bold>으로 운영하였으며 
<br/> 최근 커지는 배달 시장의 수요에 맞춰  시즌2 <Bold>"딜리버리쿡"</Bold> 으로 브랜드를 변경하여 
<br/> <Bold>배달음식의 대표 브랜드</Bold>로 <Bold>카테고리별 공략</Bold> 방법으로 소비자에게 다가가고 있습니다.  
<br/> 저희 회사는 외부환경에 맞춰 빠르게 방향을 만들어가며 
<br/> 4차산업에 걸맞게 <Bold>주방시스템의 자동화</Bold>에도 투자를 아끼지 않고 개발중에 있습니다. 
<br/> <br/> 

				또한, 믿고 먹을수 있는 음식을 제공하기 위해 <Bold>건강한 재료</Bold>를 선택하는것을 최우선으로 하며, 
<br/> <Bold>깨끗한 환경</Bold>에서 <Bold>정성껏 조리</Bold>하는 음식을 제공하는 <Bold>3COOK의 운영방식</Bold>을 원칙으로 하고 있습니다.

              </Content>
                </Fade>
            </Column1>
	{ (!isIE) && <Timeline/> }

</Page>
    );
  };
  
