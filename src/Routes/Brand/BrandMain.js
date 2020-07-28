import React from "react";
import styled from "styled-components";
import "../../Styles/BrandMain.css";
import MenuCarosuel from "../../Components/Carousel"
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
 height: 100%;
 width: 100%;

`;


const Page = styled.section`
    width: 100%;

`;

const Bold = styled.span`
    font-weight: 900;

`;

export default () => {


  return (
    <Wrapper>
        <Page className="p1">
            <Fade duration={2000}> 
            <div className="text_wrapper">
            

                <div className="main_text_div">
                    <p>대한민국 <Bold>배달음식</Bold>의 대표브랜드,</p>
                </div>
                <div className="sub_text_div">
                    <p>딜리버리쿡</p>
                    <img src="/Images/Brand/highlight.svg" className="highlight" alt="highlight"></img>
                </div>
            
            </div>
            </Fade>
        </Page>
        <Page className="p2">
        <Fade bottom cascade distance={'30%'}> 

            <div className="text_wrapper">

                <div className="main_text_div">
                    <p>오늘 땡기는 음식으로</p>
                </div>

                <div className="sub_text_div">
                    <p><span className="bold">딜리버리쿡</span>이 요리해 드릴게요</p>
                    <img src="/Images/Brand/p2_redline.svg" className="highlight" alt="highlight"></img>

                </div>

            </div>
        </Fade>

            <div>
                <MenuCarosuel category="Brand"/>
            </div>
            
        </Page>

        <Page className="p3"> 
            <div className="text_wrapper">
                <Fade bottom distance={'30%'}> 

      
                </Fade>

                <Fade bottom distance={'30%'}> 

                <div className="main_text_div">
                        <p>배달음식도<br/><Bold>믿고 먹을 수</Bold> 있어야 해요.</p>
                        <img src="/Images/Brand/p5_redline.svg" className="highlight" alt="highlight"></img>

                </div>

                <div className="sub_text_div">
                    <p>집에서 <Bold>먹는 배달음식</Bold>을<br/>집에서 <Bold>만든 음식</Bold>처럼 먹을 수 있는,</p>
                </div>
                </Fade>
            </div>
        </Page>
        
        <Page className="p4">
            <div className="text_wrapper">
            <Fade bottom cascade distance={'30%'}> 

                <div className="main_text_div">
                    <p><Bold>테이블</Bold>까지 <br/>
                    가는 길</p>
                    <img src="/Images/Brand/p4_redline.svg" className="highlight" alt="highlight"></img>

                </div>
            </Fade>
            </div>
        </Page>

    </Wrapper>
  );
};

        /*
        <Page className="p5">
            <div className="text_wrapper">
            <Fade bottom distance={'30%'}> 

                <div className="main_text_div">
                    <p><Bold>딜리버리쿡</Bold>은<br/>어떻게 <Bold>좋은 요리사</Bold>를 선별할까요?</p>
                    <img src="/Images/Brand/p5_redline.svg" className="highlight" alt="highlight"></img>

                </div>
            </Fade>

            </div>
        </Page>

        <Page className="p6">

      
        </Page>

        <Page className="p7">

        </Page>
        */

        
/*

          <div className="sub_text_div">
                        <p>우리의 다짐,</p>
                        <img src="/Images/Brand/p3_redline.svg" className="highlight" alt="highlight"></img>
                </div>

                */