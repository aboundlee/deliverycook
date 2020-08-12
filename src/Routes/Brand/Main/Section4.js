import React, {useRef, useState, useEffect} from 'react';
import styled, {css} from "styled-components";

import Fade from 'react-reveal/Fade';
// import '../../../Styles/LineAnimation.css';
//import '../../../Animations/LineAnimation.js';

 
//import $ from 'jquery';



const Page = styled.section`
    width: 100%;
    background-color: #242424;
    height: 281.25rem;
    display: flex;
    text-align: center;

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
    width: ${(props) => props.width || "0px"};
    height: ${(props) => props.height || "0px"};

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
    @media (max-width: 480px) {
        width: 20rem;
        height: 22rem;
        margin-left: -10rem;
        top:18.188rem;

    }
`;

const ImageContainer2  = styled(ImageContainer)`
    @media (max-width: 480px) {
        width: 20.8125rem;
        height: 22.844rem;
        top: 55.438rem;
        margin-left: -11rem;

    }
`;

const ImageContainer3 = styled(ImageContainer)`
    @media (max-width: 480px) {
        width: 20.4375rem;
        height: 22.4375rem;
    }
`;

const ImageContainer4 = styled(ImageContainer)`
    @media (max-width: 480px) {
        width: 24.875rem;
        height: 28.3125rem;
        margin-left: 11rem;

    }
`;


const ImageContainer5 = styled(ImageContainer)`
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
    margin-left: 1.438rem;
    margin-top: 9.375rem;

    fill: none;
    @media screen and (max-width:480px) {
        width: 375px;

        height: 144.563rem;
        margin-top: 0px;
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
font-size: 3rem;
line-height: 3rem;
}
    
    
`;

const Text1 = styled(Text)`
    @media screen and (max-width:480px) {

    top: 42rem;
    }
`


const Text2 = styled(Text)`
    @media screen and (max-width:480px) {

    top: 106rem;
    margin-left: -3px;
    }
`


const Text3 = styled(Text)`
    @media screen and (max-width:480px) {

    top: 166rem;
    }
`
const SubText = styled.p`
    position: absolute;
    font-size: 2.5rem;
    font-weight: normal;

  
    z-index: 3;
    line-height: 5rem;
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


    font-size: 2rem;
    line-height: 3rem;
    }
`;


const SubText1 = styled(SubText)`
  @media screen and (max-width:480px) {

    top: 71.625rem;
    margin-right: -7.4rem;

}
`;
const SubText2 = styled(SubText)`
  @media screen and (max-width:480px) {

    top: 136.625rem;
    margin-left: -7rem;
}
`;

const SubText3 = styled(SubText)`
  @media screen and (max-width:480px) {

    top: 171.625rem;

}
`;



const Section4 = () => {


    const pathSelector1 = useRef();
    const pathSelector2 = useRef();
    const pathSelector3 = useRef();
    const pathSelector4 = useRef();


  const [pathLength, setPathLength] = useState({'first': 0, 'second':0, 'third':0, 'fourth':0});
  const [totalPathLength, setTotalPathLength] = useState({'first': 0, 'second':0, 'third':0, 'fourth':0});


  const [pathHeight, setPathHeight] = useState([0,0,0,0]);
  const [dashArray, setDashArray] = useState({'first': "none", 'second':"none", 'third':"none", 'fourth':"none"});
    
  const [offsetY, setOffsetY] = useState(0);


    useEffect(()=> {

        if (pathSelector1.current){

        const path = [pathSelector1.current, pathSelector2.current,pathSelector3.current,pathSelector4.current] ;
        setTotalPathLength({'first': path[0].getTotalLength(), 'second':path[1].getTotalLength(), 'third':path[2].getTotalLength(), 'fourth':path[3].getTotalLength()});
        setDashArray(totalPathLength);
        setPathLength(totalPathLength);

        path[0].getBoundingClientRect();
        path[1].getBoundingClientRect();
        path[2].getBoundingClientRect();
        path[3].getBoundingClientRect();
        setPathHeight([path[0].getBoundingClientRect().height, 
                      path[1].getBoundingClientRect().height, 
                      path[2].getBoundingClientRect().height, 
                      path[3].getBoundingClientRect().height])
        };

    },[]);


    function getComputedTranslateY(obj)
    {

        // CSS에서 transform( x, y)의 y값 추출하는 함수 
        // input : string css
        // output : y
        if(!window.getComputedStyle) return;
        let style = getComputedStyle(obj);
        let transform = style.transform || style.webkitTransform || style.mozTransform;
        let mat = transform.match(/^matrix3d\((.+)\)$/);
        if(mat) return parseFloat(mat[1].split(', ')[13]);
        mat = transform.match(/^matrix\((.+)\)$/);
        return mat ? parseFloat(mat[1].split(', ')[5]) : 0;
    }
    

  
    function listenToScroll (yOffset) {
         // Scroll에 따라, svg선을 그려주는 함수.
        // input : 스크롤 값
    
        //let totalScroll = document.documentElement.scrollHeight;
        let screenSize = document.documentElement.clientHeight;
        
    
    //    let yOffset = window.pageYOffset;
        let divOffset = screenSize*3 + 200; // Svg 의 margin-top 반영
    
        let pathEndSCroll1 = divOffset + pathHeight[0]; // 현재 div 사이즈가 600vh 이므로
        let pathEndSCroll2 = pathEndSCroll1 + pathHeight[1]; // 현재 div 사이즈가 600vh 이므로
        let pathEndSCroll3 = pathEndSCroll2 + pathHeight[2]; // 현재 div 사이즈가 600vh 이므로
        let pathEndSCroll4 = pathEndSCroll3 + pathHeight[3]; // 현재 div 사이즈가 600vh 이므로
        
        let scrollPercentage1 = (yOffset - divOffset) / (pathHeight[0]);
        let scrollPercentage2 = (yOffset - pathEndSCroll1) / (pathHeight[1]);
        let scrollPercentage3 = (yOffset - pathEndSCroll2) / (pathHeight[2]);
        let scrollPercentage4 = (yOffset - pathEndSCroll3) / (pathHeight[3]);  // 분모 : 스크롤하는 총 길이(path의 height), 분자 : 현재 스크롤 - 이전 path 애니매이션의 끝
    

        // console.log(dashArray);

        // console.log(`yOffset : ${yOffset}`);
        // console.log(`pathEndSCroll1 : ${pathEndSCroll1}`);
        // console.log(screenSize);
        // console.log(`percent : ${scrollPercentage1}`);
        // console.log(`pathEndSCroll2 : ${pathEndSCroll2}`);
    
        // console.log(`pathEndSCroll3 : ${pathEndSCroll3}`);
    
    
        var drawLength1 = totalPathLength.first * scrollPercentage1;
        var drawLength2 = totalPathLength.second * scrollPercentage2;
        var drawLength3 = totalPathLength.third * scrollPercentage3;
        var drawLength4 = totalPathLength.fourth * scrollPercentage4;
    
        
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
    
        if ((scrollPercentage3 <= 0.99) && (scrollPercentage3 >= 0)){
            setPathLength(prevState => ({...prevState, 'third':totalPathLength.third - drawLength3}));
        } else if (scrollPercentage3 < 0) {
            setPathLength(prevState => ({...prevState, 'third':totalPathLength.third}));
        }
    
        if ((scrollPercentage4 <= 0.99) && (scrollPercentage4 >= 0)){
            setPathLength(prevState => ({...prevState, 'fourth':totalPathLength.fourth - drawLength4}));
        } else if (scrollPercentage4 < 0) {
            setPathLength(prevState => ({...prevState, 'fourth':totalPathLength.fourth}));
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
        if (scrollPercentage3 >= 0.99) {
            setDashArray(prevState => ({...prevState, 'third':"none"}));
        } 
         else {
            setDashArray(prevState => ({...prevState, 'third':totalPathLength.third}));    
        }
        if (scrollPercentage4 >= 0.99) {
            setDashArray(prevState => ({...prevState, 'fourth':"none"}));
        } 
         else {
            setDashArray(prevState => ({...prevState, 'fourth':totalPathLength.fourth}));    
        }
      };
    

    return (

        <Page onWheel = {(e) => {



          let elem = document.querySelector('.fp-scroller');
          //let y = getComputedTranslateY(elem);
          let screen = document.documentElement.clientHeight;

           // setOffsetY(-y+3*screen);

        //    listenToScroll(offsetY);

            }
        }>
        <TextContainer>
        <Fade bottom cascade distance={'30%'}> 

            <MainTextContainer>
                <MainText><Bold>테이블</Bold>까지 <br/>
                가는 길</MainText>
                <Highlight src="/Images/Brand/p4_redline.svg" alt="highlight" />

            </MainTextContainer>
        </Fade>

            <Text1 top={"41.188rem"}>재료</Text1>
            <Text2 top={"138.625rem"} toLeft={"-1.3rem"}>환경</Text2>
            <Text3 top={"229.438rem"}>사람</Text3>
            <SubText1 top={"85.625rem"} toRight={"-9.4rem"} textAlign={"left"}><Bold>깐깐한 재료</Bold>가<br/>좋은 요리의 시작이다.</SubText1>
            <SubText2 top={"184.438rem"} toLeft={"-11rem"} textAlign={"right"}><Bold>청결한 주방</Bold>에서<br/> 좋은 요리가 탄생한다.</SubText2>
            <SubText3 top={"235.438rem"} center><Bold>좋은 사람</Bold>이 좋은 요리를 완성한다.</SubText3>
           <BigHighlight src="/Images/Brand/p4_highlight.svg" alt="highlight" />

        
            <ImageContainer1 top={"12.188rem"} toLeft={"-18rem"} width={"40rem"} height={"44rem"}>
                <Image  src="/Images/Brand/p4_no1.png" alt="food1"/>
           </ImageContainer1>

           <ImageContainer2 top={"63.438rem"} toLeft={"-20rem"} width={"41.625rem"} height={"45.688rem"}> 
                <Image  src="/Images/Brand/p4_no2.png" alt="food2"/>
           </ImageContainer2>

            <ImageContainer3 top={"97.625rem"} toLeft={"14rem"} width={"40.875rem"} height={"44.875rem"}>
                <Image  src="/Images/Brand/p4_no3.png" alt="food3"/>
           </ImageContainer3>

            <ImageContainer4 top={"133.75rem"} toLeft={"-23rem"} width={"49.75rem"} height={"56.625rem"}>
                <Image  src="/Images/Brand/p4_no4.png" alt="food4"/>
           </ImageContainer4>

            <ImageContainer5 bottomSticked width={"63.875rem"} height={"34.375rem"}> 
                <Image src="/Images/Brand/p4_no5.png" alt="highlight"/>
           </ImageContainer5>



           

           <Line id="linesvg"  viewBox="0 0 868.63 2194.59" fill="none" xmlns="http://www.w3.org/2000/svg" id="star-svg">
<path ref={pathSelector1} id="star-path" d="M525.379 4C594.212 26.5 728.179 106.3 713.379 245.5C694.879 419.5 191.133 286.099 
149.379 526.5C132.879 621.5 242.379 696 337.379 719" 
        stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={dashArray.first} strokeDashoffset={pathLength.first}

/>
<path ref={pathSelector2} id="star-path" d="M783.379 805C829.879 824.167 941.979 909.5 910.379 1017.5C870.879 1152.5 676.379 1239.9 525.379 1230C311.879 1216 191.379 1248.5 177.379 1320.5C163.379 1392.5 221.379 1450 297.879 1473.5" 
        stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={dashArray.second} strokeDashoffset={pathLength.second}

/>
<path ref={pathSelector3} id="star-path" d="M488.379 1504C537.212 1521.83 671.879 1583 615.879 1687.5C549.508 1811.35 181.182 1646.14 37.8789 1852C-25.1211 1942.5 2.87874 2114.5 95.8789 2189" 
        stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={dashArray.third} strokeDashoffset={pathLength.third}

/>
<path ref={pathSelector4} id="star-path" d="M471.879 2237.5C571.046 2249.17 757.279 2303.6 708.879 2428C648.379 2583.5 409.379 2544 409.379 2781" 
        stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={dashArray.fourth} strokeDashoffset={pathLength.fourth}

/>
        </Line>
 


        </TextContainer>
        </Page>
    );
};

export default Section4;






