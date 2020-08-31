import React, {useRef, useState, useEffect} from 'react';
import styled, {css} from "styled-components";

import Fade from 'react-reveal/Fade';




const Page = styled.section`
    width: 100%;
    background-color: #242424;
    height: 295.25rem;
    display: flex;
    text-align: center;
    background: url("/Images/Brand/p4_background.jpg") no-repeat; 
    background-position: center;
    background-size: cover;

    justify-content: center;

    padding-top: 6.5rem;
    @media screen and (max-width:480px) {
        height: 200rem;
    }

`;

const Bold = styled.span`
    font-weight: bold;
`;
const TextContainer = styled.div`

    color: #fff;
    width: 100%;
`;

const MainTextContainer = styled.div`

`;
const MainText = styled.p`
    font-style: normal;
    font-weight: 900;
    font-size: 3.125rem;
    line-height: 5rem;

`;

const Highlight = styled.img`

    @media screen and (max-width:480px) {
        width: 12rem;
    } 
`;

const BigHighlight = styled.img`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 240.438rem;

    @media screen and (max-width:480px) {
        width: 22rem;
        top: 175.438rem;
    } 
`;

const ImageContainer = styled.div`
    position: absolute;

    ${'' /* left: calc(50% - 39.688rem); */}

    
    left: 50%;
    transform: translate(-50%);
    margin-left: ${(props) => props.toLeft || "0px"};
    margin-right: ${(props) => props.toRight || "0px"};



    ${props => props.top   && 
        css`top: ${props.top};`} 
    
    
    ${props => props.bottomSticked && 
        css`bottom: 0px;`} 


    z-index: 3;

    @media (max-width: 480px) {
        width: ${(props) => props.width || "0px"};
        height: ${(props) => props.height || "0px"};

    }
`;

const ImageContainer1 = styled(ImageContainer)`
    width: 20.625rem;
    height: 23.75rem;
    @media (max-width: 480px) {
        width: 12rem;
        height: 14rem;
        margin-left: -10rem;
        top:18.188rem;

    }
`;

const ImageContainer2  = styled(ImageContainer)`
    width: 32.375rem;
    height: 27.75rem;
    @media (max-width: 480px) {
        width: 14.8125rem;
        height: 16.844rem;
        top: 57.438rem;
        margin-left: -11rem;

    }
`;

const ImageContainer3 = styled(ImageContainer)`
    width: 29.25rem;
    height: 25.25rem;
    @media (max-width: 480px) {
        width: 14.4375rem;
        height: 18.4375rem;
	top: 70.625rem;
        margin-left: 10rem;

    }
`;

const ImageContainer4 = styled(ImageContainer)`
    width: 25.75rem;
    height: 40.875rem;
    @media (max-width: 480px) {
        width: 14.4375rem;
        height: 18.4375rem;
        margin-left: -12rem;
	top: 94.75rem;
    }
`;

const ImageContainer5 = styled(ImageContainer)`
    width: 11.125rem;
    height: 10.375rem;
    @media (max-width: 480px) {
        width: 8.4375rem;
        height: 12.4375rem;
        margin-left: 12rem;
	top: 123rem;

    }
`;


const ImageContainer6 = styled(ImageContainer)`
    width: 22.25rem;
    height: 18.688rem;
    @media (max-width: 480px) {
        width: 10.4375rem;
        height: 12.4375rem;
        margin-left: 15rem;
	top: 113rem;

    }
`;



const ImageContainer7 = styled(ImageContainer)`
    width: 34.527rem;
    height: 35.563rem;
    @media (max-width: 480px) {
        width: 24.875rem;
        height: 28.3125rem;
        margin-left: 11rem;

    }
`;


const ImageContainer8 = styled(ImageContainer)`
    width: 26.188rem;
    height: 27.875rem;
    @media (max-width: 480px) {
        width: 24.875rem;
        height: 28.3125rem;
        margin-left: 11rem;

    }
`;


const ImageContainer9 = styled(ImageContainer)`
    width: 56rem;
    height: 30.125rem;
    @media (max-width: 480px) {
        width: 42.58rem;
        height: 22.91rem;

    }
`;

const Image = styled.img`
    position: absolute;


    width: 100%;
    
    left: 50%;
    transform: translate(-50%);
    z-index: 3;
`;


const Line = styled.svg`
    left: 19.945rem;

    position: absolute;

    width: 56.994rem;
    height: 173.563rem;


    overflow: visible;
    left: 50%;
    transform: translate(-50%);
    margin-left: -10.438rem;
    margin-top: 9.375rem;

    fill: none;
    @media screen and (max-width:480px) {
        width: 375px;

        height: 144.563rem;
        margin-top: -8rem;
	margin-left: -5.438rem;
    }
`;

const Header = styled.p`
    position: absolute;
    font-size: 2rem;
    font-weight: 900;
    left: 50%;
    transform: translate(-50%);
    z-index: 3;
    top: ${(props) => props.top || "0px"};
    margin-left: ${(props) => props.toLeft || "0px"};
    
    @media screen and (max-width:480px) {
	font-size: 1.25rem;
	line-height: 1rem;
}
`;

const Header1 = styled(Header)`

    @media screen and (max-width:480px) {
    top: 33rem;
    }
`;

const Header2 = styled(Header)`
    @media screen and (max-width:480px) {
    top: 103rem;
	margin-left: 0rem;
    }

`;
const Header3 = styled(Header)`
    @media screen and (max-width:480px) {
    top: 159rem;
    }

`;

const Text = styled.p`
    position: absolute;
    font-size: 3.75rem;
    font-weight: bold;
    left: 50%;
    transform: translate(-50%);
    z-index: 3;
    top: ${(props) => props.top || "0px"};
    margin-left: ${(props) => props.toLeft || "0px"};
    
    @media screen and (max-width:480px) {
	font-size: 2.5rem;
	line-height: 3rem;
}
`;

const Text1 = styled(Text)`
    @media screen and (max-width:480px) {

    top: 35rem;
    }
`


const Text2 = styled(Text)`
    @media screen and (max-width:480px) {
    top: 105rem;
	margin-left: 0rem;
    }
`


const Text3 = styled(Text)`
    @media screen and (max-width:480px) {

    top: 161rem;
    }
`
const SubText = styled.p`
    position: absolute;
    font-size: 2.5rem;
    font-weight: normal;

  
    z-index: 3;
    line-height: 3.75rem;
    top: ${(props) => props.top || "0px"};
    margin-left: ${(props) => props.toLeft || "0px"};

    margin-right: ${(props) => props.toRight || "0px"};
    text-align: ${(props) => props.textAlign || "center"};

    ${props => props.toLeft && 
        css`
            left: 50%;
            transform: translate(-50%);
    `} 

    ${props => props.toRight && 
        css`
            right: 50%;
            transform: translate(50%);
    `} 

    ${props => props.center && 
        css`
            right: 50%;
            transform: translate(50%);
            width: 100%;
    `} 
    @media screen and (max-width:480px) {


    font-size: 1.5rem;
    line-height: 2.25rem;
    }
`;


const SubText1 = styled(SubText)`
  @media screen and (max-width:480px) {

    top: 40rem;
    margin-left: -6rem;
    text-align: left;

}
`;
const SubText2 = styled(SubText)`
  @media screen and (max-width:480px) {

    top: 110.625rem;
    margin-left: 4rem;
}
`;

const SubText3 = styled(SubText)`
  @media screen and (max-width:480px) {

    top: 166.625rem;

}
`;



const Content = styled.p`
    position: absolute;
    font-size: 1.875rem;
    font-weight: normal;

  
    z-index: 3;
    line-height: 3.125rem;
    top: ${(props) => props.top || "0px"};
    margin-left: ${(props) => props.toLeft || "0px"};

    margin-right: ${(props) => props.toRight || "0px"};
    text-align: ${(props) => props.textAlign || "center"};

    ${props => props.toLeft && 
        css`
            left: 50%;
            transform: translate(-50%);
    `} 

    ${props => props.toRight && 
        css`
            right: 50%;
            transform: translate(50%);
    `} 

    ${props => props.center && 
        css`
            right: 50%;
            transform: translate(50%);
            width: 100%;
    `} 
    @media screen and (max-width:480px) {
    font-size: 1rem;
    line-height: 1.5rem;
    }
`;
const Content1 = styled(Content)`
  @media screen and (max-width:480px) {
	margin-right: -6rem;
	top: 57rem;
  }
`;

const Content2 = styled(Content)`
  @media screen and (max-width:480px) {
	margin-left: -12rem;
	top: 72rem;
	text-align:left;
  }
`;
const Content3 = styled(Content)`
  @media screen and (max-width:480px) {
	margin-left: 2rem;
	top: 84rem;
  }
`;
const Content4 = styled(Content)`
  @media screen and (max-width:480px) {
	margin-left: -5rem;
	top: 128rem;
  }
`;

const Content5 = styled(Content)`
  @media screen and (max-width:480px) {
	margin-left: -14rem; 
	top: 177rem;
  }
`;
const Section4 = () => {


    const pathSelector1 = useRef();
    const pathSelector2 = useRef();


  const [pathLength, setPathLength] = useState({'first': 0, 'second':0});
  //const [totalPathLength, setTotalPathLength] = useState({'first': 0, 'second':0, 'third':0, 'fourth':0});
  let totalPathLength;


  //const [pathHeight, setPathHeight] = useState([0,0,0,0]);
  let pathHeight;
  const [dashArray, setDashArray] = useState({'first': "none", 'second':"none"});
    


    useEffect(()=> {

        if (pathSelector1.current){

        const path = [pathSelector1.current, pathSelector2.current] ;
        //setTotalPathLength({'first': path[0].getTotalLength(), 'second':path[1].getTotalLength(), 'third':path[2].getTotalLength(), 'fourth':path[3].getTotalLength()});
        totalPathLength={'first': path[0].getTotalLength(), 'second':path[1].getTotalLength()};
        setDashArray(totalPathLength);
        setPathLength(totalPathLength);

        path[0].getBoundingClientRect();
        path[1].getBoundingClientRect();
        pathHeight = [path[0].getBoundingClientRect().height, 
                      path[1].getBoundingClientRect().height];
	window.addEventListener('scroll', listenToScroll);

        }

	return (() =>  window.removeEventListener('scroll', listenToScroll));

    },[]);
    

    const listenToScroll = () => {
         // Scroll에 따라, svg선을 그려주는 함수.
        // input : 스크롤 값
    
        let totalScroll = document.documentElement.scrollHeight;
        let screenSize = document.documentElement.clientHeight;
        
        let yOffset = window.pageYOffset;
        let divOffset = screenSize*4 + 300; // Svg 의 margin-top 반영
    
        let pathEndSCroll1 = divOffset + pathHeight[0]; // 현재 div 사이즈가 600vh 이므로
        let pathEndSCroll2 = pathEndSCroll1 + pathHeight[1]; // 현재 div 사이즈가 600vh 이므로
        
        let scrollPercentage1 = (yOffset - divOffset) / (pathHeight[0]);
        let scrollPercentage2 = (yOffset - pathEndSCroll1) / (pathHeight[1]);
    

        // console.log(`yOffset : ${yOffset}`);
        // console.log(`pathEndSCroll1 : ${pathEndSCroll1}`);
        //  console.log(screenSize);
        //  console.log(`percent : ${scrollPercentage1}`);
         //console.log(`pathEndSCroll2 : ${pathEndSCroll2}`);
   
    
    
        var drawLength1 = totalPathLength.first * scrollPercentage1;
        var drawLength2 = totalPathLength.second * scrollPercentage2;
    
        
        // Draw in reverse
        if ((scrollPercentage1 <= 0.99) && (scrollPercentage1 >= 0)){
            setPathLength(prevState => ({...prevState, 'first':totalPathLength.first - drawLength1}));
            
        } else if (scrollPercentage1 < 0) {
            setPathLength(prevState => ({...prevState, 'first':totalPathLength.first}));
        }
    
        if ((scrollPercentage2 <= 0.99) && (scrollPercentage2 >= 0)){
            setPathLength(prevState => ({...prevState, 'second':totalPathLength.second - drawLength2}));
        } else if (scrollPercentage2 < 0) {
            setPathLength(prevState => ({...prevState, 'second':totalPathLength.second})); 
        }
    
    
    
        // When complete, remove the dash array, otherwise shape isn't quite sharp
       // Accounts for fuzzy math
        if (scrollPercentage1 >= 0.99) {
            setDashArray(prevState => ({...prevState, 'first':"none"}));
        } 
         else {
            setDashArray(prevState => ({...prevState, 'first':totalPathLength.first}));    
        }
        if (scrollPercentage2 >= 0.99) {
            setDashArray(prevState => ({...prevState, 'second':"none"}));
        } 
         else {
            setDashArray(prevState => ({...prevState, 'second':totalPathLength.second}));    
        }
      };
    

    return (

        <Page>
        <TextContainer>
        <Fade bottom cascade distance={'30%'}> 

            <MainTextContainer>
                <MainText><Bold>테이블</Bold>까지 <br/>
                가는 길</MainText>
                <Highlight src="/Images/Brand/p4_redline.svg" alt="highlight" />

            </MainTextContainer>
        </Fade>


            <Header1 top={"35.188rem"} toLeft={"-10rem"}>1 COOK</Header1>
            <Text1 top={"40.188rem"} toLeft={"-10rem"}>재료</Text1>
            <SubText1 top={"46.625rem"} toLeft={"-17rem"} textAlign={"right"}><Bold>깐깐한 재료</Bold>가<br/>좋은 요리의 시작이다.</SubText1>
            <Content1 top={"75.438rem"} toRight={"-20rem"} textAlign={"left"}>
		<Bold>동물복지, 최저 항생제</Bold> 사용 삼겹살
		<br/>표고버섯 외 21가지 재료 숙성
		<br/>직접 개발한 레몬 숙성 백김치와 
		<br/>비법 소스로 더 맛있게
            </Content1>

            <Content2 top={"97.438rem"} toLeft={"-27rem"} textAlign={"right"}>
		국내산 계육 100%
		<br/>순수 닭다리살만 사용
            </Content2>
            <Content3 top={"112.438rem"} toLeft={"-3rem"} textAlign={"right"}>
		1등급 국내산 돈육사용
		<br/>매일 깨끗한 기름
		<br/>100% 수작업
            </Content3>

            <Header2 top={"142.188rem"} toLeft={"-7.3rem"}>2 COOK</Header2>
            <Text2 top={"146.625rem"} toLeft={"-7.3rem"}>환경</Text2>
            <SubText2 top={"152.438rem"} toLeft={"-0.3rem"} textAlign={"left"}><Bold>청결한 주방</Bold>에서<br/> 좋은 요리가 탄생한다.</SubText2>
            <Content4 top={"182.438rem"} toLeft={"-16rem"} textAlign={"right"}>
		전제품 100% HACCP 인증 기관에서 제조
		<br/>철저한 위생관리 교육 및 이수
		<br/>일 1회 이상 조리기구 및 식기류 소독
		<br/>보건증 의무화
            </Content4>

            <Header3 top={"231.188rem"}>3 COOK</Header3>
            <Text3 top={"235.438rem"}>사람</Text3>
            <SubText3 top={"241.438rem"} center><Bold>좋은 사람</Bold>이<br/>좋은 요리를 완성한다.</SubText3>

            <Content5 top={"257.438rem"} toLeft={"-25.5rem"} textAlign={"left"}>
		본사 3COOK 인증 
		<br/>조리사가 직접조리
		<br/>GOOD COOK 교육
            </Content5>

        
            <ImageContainer1 top={"12.188rem"} toLeft={"-22rem"} >
                <Image  src="/Images/Brand/p4_no1.png" alt="food1"/>
           </ImageContainer1>

           <ImageContainer2 top={"65.438rem"} toLeft={"-23rem"} > 
                <Image  src="/Images/Brand/p4_no2.png" alt="food2"/>
           </ImageContainer2>

            <ImageContainer3 top={"93.625rem"} toLeft={"22rem"} >
                <Image  src="/Images/Brand/p4_no3.png" alt="food3"/>
           </ImageContainer3>

            <ImageContainer4 top={"133.75rem"} toLeft={"-23rem"} >
                <Image  src="/Images/Brand/p4_no4.png" alt="food4"/>
           </ImageContainer4>

           <ImageContainer5 top={"177rem"} toLeft={"16.5rem"} >
                <Image  src="/Images/Brand/p4_no5.png" alt="food4"/>
           </ImageContainer5>

           <ImageContainer6 top={"159.75rem"} toLeft={"31rem"} >
                <Image  src="/Images/Brand/p4_no6.png" alt="food4"/>
           </ImageContainer6>

           <ImageContainer7 top={"201.75rem"} toLeft={"-23rem"}>
                <Image  src="/Images/Brand/p4_no7.png" alt="food4"/>
           </ImageContainer7>

           <ImageContainer8 top={"228.75rem"} toLeft={"27rem"}>
                <Image  src="/Images/Brand/p4_no8.png" alt="food4"/>
           </ImageContainer8>

            <ImageContainer9 bottomSticked width={"63.875rem"} height={"34.375rem"}> 
                <Image src="/Images/Brand/p4_no9.png" alt="highlight"/>
           </ImageContainer9>



           

           <Line id="linesvg"  viewBox="0 0 868.63 2194.59" fill="none" xmlns="http://www.w3.org/2000/svg" id="star-svg">

	<path ref={pathSelector1} id="star-path" d="M578.788 4C673.455 27.6667 868.488 110.1 891.288 250.5C919.788 426 393.788 374.5 336.788 616C279.788 857.5 633.188 977.172 820.288 1042.5C999.288 1105 1007 1263.5 870.501 1326C674.753 1415.63 422.03 1345.4 275.001 1477C91.2138 1641.5 190.501 1894 497.001 1944.5C717.501 1980.83 870.501 1990 931.001 2071.5C991.501 2153 906.501 2264.92 813.001 2238.5C744.001 2219 644.212 2063.87 870.501 1969C1096.79 1874.13 1302 2271.71 1003.5 2358C770.001 2425.5 591.001 2467.5 591.001 2783.5"
		stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
		strokeDasharray={dashArray.first} strokeDashoffset={pathLength.first}
	/>

<path ref={pathSelector2} x="-110" id="star-path" d=" M433 3206.8C433 3334.62 380.264 3439.26 234.948 3471.53C53.3029 3511.85 -48.6099 3376.05 33.7714 3251.39C100.737 3150.05 374 3162.05 550.5 3508.06"
		stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
		strokeDasharray={dashArray.second} strokeDashoffset={pathLength.second}
	/>



        </Line>
 


        </TextContainer>
        </Page>
    );
};

export default Section4;






