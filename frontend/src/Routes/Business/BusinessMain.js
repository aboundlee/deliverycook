import React, { Component, useState, useEffect} from "react";
import styled from "styled-components";
import "../../Styles/BusinessMain.css";
import  "../../Styles/BusinessMain.css";

import MenuCarosuel from "../../Components/Carousel";
import Fade from 'react-reveal/Fade';
import AOS from 'aos';

import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'



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

  
    const [scroller, seScroller] = useState({current: 0, horizontal: true, swipe: true, factor: 0.3, loop: true});
  

    useEffect(() => {
     
    },[]);
    
    let options = {
      sectionClassName:     'section',
      anchors:              ['business', 'business', 'business', 'business', 'business', 'business', 'business'],
      scrollBar:            false,
      navigation:           false,
      verticalAlign:        false,
      delay:                1000, // the scroll animation speed
  
      arrowNavigation:      false
    };
    AOS.init();
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
    
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  
    return (
        <Wrapper>

        <Fullpage>
            <FullPageSections>

                <FullpageSection>
                    <Page className="bp1"  id="scroll-section-1">
                        <div className="background">
                        <div className="filter animated_filter"></div>
                            <div className="text_wrapper">
                                <Fade bottom distance={'30%'}>  
                                    <div className="main_text_div">
                                        <p><Bold>하나의 매장</Bold>에서<br/><Bold>여러개</Bold>의 <Bold>배달 전문점</Bold>을 운영하다.</p>
                                    </div>
                                </Fade>
                                <Fade duration={3000}> 
                                    <div className="sub_text_div">
                                        <img src="/Images/Business/p1_logo.png" className="logo" alt="logo"></img>
                                    </div>
                                </Fade>
                            </div>
                            <div className="scroll-section">
                                <canvas className="image-blend-canvas" width="auto" height="auto"></canvas>
                            </div>
                        </div>
                    </Page>
                </FullpageSection>
                <FullpageSection>
                    <Page className="bp2">
                        <div className="carosuel_wrapper">
                            <MenuCarosuel category="Business"/>
                        </div>
                        <Fade bottom distance={'30%'}> 
                            <div className="text_wrapper">
                                <div className="main_text_div">
                                    <p><Bold>하나의 주방</Bold>에서 <br/><Bold>2개 이상의 브랜드</Bold>를 <br/><Bold>직접</Bold> 운영 해보세요</p>
                                </div>
                            </div>
                        </Fade>
                    </Page>
                    </FullpageSection>
                    <FullpageSection>
                        <Page className="bp22">
                            <div className="carosuel_wrapper">
                                <MenuCarosuel category="Business"/>
                            </div>
                        </Page>
                    </FullpageSection>
                    <FullpageSection>
                        <Page className="bp3"> 
                            <div className="text_wrapper">
                                <Fade bottom distance={'30%'}> 
                                    <div className="main_text_div">
                                        <p><Bold>뭉치면 산다.</Bold></p>
                                        <img src="/Images/Business/p3_redline.svg" className="highlight" alt="highlight"></img>
                                        <p>단, <Bold>제대로</Bold> 뭉쳐야 한다.</p>
                                    </div>
                                </Fade>
                                <Fade bottom distance={'30%'}> 
                                    <div className="sub_text_div">
                                        <p>제대로 된 <Bold>전문 배달음식 브랜드</Bold>로 <Bold>골라서</Bold> 창업하다.</p>
                                    </div>
                                </Fade>
                            </div>
                        </Page>
                    </FullpageSection>
                    <FullpageSection>
                    <Page className="bp4">
                        <div className="filter"></div>
                        <Fade bottom cascade distance={'30%'}> 
                        <div className="text_wrapper">
                            <div className="main_text_div">
                                <p>배달앱 어디든지<br/>카테고리마다 딜리버리쿡!</p>
                            </div>
                            <div className="sub_text_div">
                                <p>무엇이 먹고 싶든 그곳에 딜리버리쿡이 있도록,</p>
            
                            </div>
                        </div></Fade>
                        <div className="image_wrapper">
                            <img src="/Images/Business/p4_phone.png" className="phone" alt="phone"></img> 
            
                            <div>
                    
                            </div>
                        </div>
                        
                    </Page>
                    </FullpageSection>
                    <FullpageSection>

            
                    
                    <Page className="bp5">
                        <div className="filter"></div>
                        <Fade bottom cascade distance={'30%'}> 
                        <div className="text_wrapper">
                            <div className="main_text_div">
                                <p><Bold>점심</Bold>먹을 때도, <Bold>간식</Bold>먹을 때도<br/><Bold>저녁</Bold>먹을 때도, <Bold>야식</Bold>먹을 때도</p>
                            </div>
                            <div className="sub_text_div">
                                <p>시간 대 별 다른 아이템 판매 전략으로<br/><Bold>30% 추가 매출</Bold>을 만들다.</p>
            
                            </div>
                        </div></Fade>
                        <div className="image_wrapper">
                            <div className="image_container">
            
                            <img src="/Images/Business/p5_redline.svg" className="redline" alt="redline"></img> 
                                <Fade bottom distance={'50%'}> 
            
                                <img src="/Images/Business/p5_blueline.svg" className="blueline" alt="blueline"></img> 
                                </Fade>
            
                                <Fade bottom distance={'50%'} delay={500}> 
                                <img src="/Images/Business/p5_redcircle.svg" className="redcircle" alt="redcircle"></img> 
                                <img src="/Images/Business/p5_arrow.svg" className="arrow_up" alt="arrow_up"></img> 
                                <img src="/Images/Business/p5_percent.svg" className="percent" alt="percent%"></img> 
                                </Fade>
            
                                <img src="/Images/Business/p5_line.svg" className="line" alt="line"></img> 
            
                                <p className="label">점심</p>
                                <p className="label">간식</p>
                                <p className="label">저녁</p>
                                <p className="label">야식</p>
            
                            </div>
                        </div>
                        
                    </Page>

                    </FullpageSection>
                    <FullpageSection>


                    <Page className="bp6">
                        <Fade bottom cascade distance={'30%'}> 
            
                        <div className="text_wrapper">
                            <div className="main_text_div">
                                <p><Bold>최적화된 주방</Bold>으로</p>
                                <img src="/Images/Business/p3_redline.svg" className="highlight" alt="highlight"></img>
            
                                <p><Bold>적게</Bold> 움직이고, <Bold>쉽게</Bold> 만들도록</p>
                                
                            </div>
            
                            <div className="sub_text_div">
                                    <p>여러 브랜드를 운영해도 <br/>
                                    주방과 주방기구를 최적으로 디자인하여,<br/>
                                    최소한의 동선과 <Bold>효율적인 조리와 운영</Bold>을 가능하게 하다.</p>
                            </div>
                        </div></Fade>
                    </Page>

                    </FullpageSection>
                    <FullpageSection>


                    <Page className="bp7">
                        <Fade bottom cascade distance={'30%'}> 
            
                        <div className="text_wrapper">
                            <div className="main_text_div">
                                <p><Bold>운영지원</Bold>은 <Bold>본사</Bold>가 할게요.</p>
            
                                <p><Bold>창업은 누가 하실래요?</Bold></p>
                                
                            </div>
            
                            <div className="sub_text_div">
                                    <p>본사의 <Bold>운영지원팀</Bold>과 <Bold>전략기획팀</Bold>이 함께 합니다.</p>
                            </div>
                        </div></Fade>
                    </Page>
                    </FullpageSection>
                </FullPageSections>
          </Fullpage>
        </Wrapper>
  
    );
  };


/*

export default () => {

    const [loader, setLoader] = useState(0);
  
    const [scroller, seScroller] = useState({current: 0, horizontal: true, swipe: true, factor: 0.3, loop: true});
  
    useEffect(() => {
     
    },[]);
    
    let options = {
      sectionClassName:     'section',
      anchors:              ['business', 'business', 'business', 'business', 'business', 'business', 'business'],
      scrollBar:            false,
      navigation:           false,
      verticalAlign:        false,
      delay:                1000, // the scroll animation speed
  
      arrowNavigation:      false
    };
    AOS.init();
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  
    return (
      <Wrapper>
  
        <SectionsContainer className="container" {...options}>
            <Page className="bp1"  id="scroll-section-1">
          <div className="background">
  
            <div className="filter animated_filter"></div>
  
                  <div className="text_wrapper">
                      <Fade bottom distance={'30%'}> 
  
                      <div className="main_text_div">
                          <p><Bold>하나의 매장</Bold>에서<br/><Bold>여러개</Bold>의 <Bold>배달 전문점</Bold>을 운영하다.</p>
                      </div>
                      
                      </Fade>
  
                      <Fade duration={3000}> 
  
                      <div className="sub_text_div">
                          <img src="/Images/Business/p1_logo.png" className="logo" alt="logo"></img>
                      </div>
                      </Fade>
  
                  </div>
  
                <div className="scroll-section">
                  
                  <canvas className="image-blend-canvas" width="auto" height="auto"></canvas>
  
                </div>
            </div>
          </Page>
          <Page className="bp2">
                <div className="carosuel_wrapper">
              <MenuCarosuel category="Business"/>
               </div>
               <Fade bottom distance={'30%'}> 
               <div className="text_wrapper">
  
                <div className="main_text_div">
                    <p><Bold>하나의 주방</Bold>에서 <br/><Bold>2개 이상의 브랜드</Bold>를 <br/><Bold>직접</Bold> 운영 해보세요</p>
                </div>
  
          
                </div>
                </Fade>
          </Page>
  
          <Page className="bp22">
                <div className="carosuel_wrapper">
              <MenuCarosuel category="Business"/>
               </div>
               
          </Page>
  
  
          <Page className="bp3"> 
              <div className="text_wrapper">
              <Fade bottom distance={'30%'}> 
              <div className="main_text_div">
                          <p><Bold>뭉치면 산다.</Bold></p>
                          <img src="/Images/Business/p3_redline.svg" className="highlight" alt="highlight"></img>
  
                          <p>단, <Bold>제대로</Bold> 뭉쳐야 한다.</p>
                  </div>
                  </Fade>
  
                  <Fade bottom distance={'30%'}> 
  
                  <div className="sub_text_div">
                          <p>제대로 된 <Bold>전문 배달음식 브랜드</Bold>로 <Bold>골라서</Bold> 창업하다.</p>
                  </div>
                  </Fade>
              </div>
          </Page>
  
          
  
          
          <Page className="bp4">
              <div className="filter"></div>
              <Fade bottom cascade distance={'30%'}> 
              <div className="text_wrapper">
                  <div className="main_text_div">
                      <p>배달앱 어디든지<br/>카테고리마다 딜리버리쿡!</p>
                  </div>
                  <div className="sub_text_div">
                      <p>무엇이 먹고 싶든 그곳에 딜리버리쿡이 있도록,</p>
  
                  </div>
              </div></Fade>
              <div className="image_wrapper">
                <img src="/Images/Business/p4_phone.png" className="phone" alt="phone"></img> 
  
                <div>
         
                </div>
              </div>
              
          </Page>
  
  
        
          <Page className="bp5">
              <div className="filter"></div>
              <Fade bottom cascade distance={'30%'}> 
              <div className="text_wrapper">
                  <div className="main_text_div">
                      <p><Bold>점심</Bold>먹을 때도, <Bold>간식</Bold>먹을 때도<br/><Bold>저녁</Bold>먹을 때도, <Bold>야식</Bold>먹을 때도</p>
                  </div>
                  <div className="sub_text_div">
                      <p>시간 대 별 다른 아이템 판매 전략으로<br/><Bold>30% 추가 매출</Bold>을 만들다.</p>
  
                  </div>
              </div></Fade>
              <div className="image_wrapper">
                <div className="image_container">
  
                  <img src="/Images/Business/p5_redline.svg" className="redline" alt="redline"></img> 
                    <Fade bottom distance={'50%'} delay={500}> 
  
                    <img src="/Images/Business/p5_blueline.svg" className="blueline" alt="blueline"></img> 
                    </Fade>
  
                    <Fade bottom distance={'50%'} delay={900}> 
                    <img src="/Images/Business/p5_redcircle.svg" className="redcircle" alt="redcircle"></img> 
                    <img src="/Images/Business/p5_arrow.svg" className="arrow" alt="arrow"></img> 
                    <img src="/Images/Business/p5_percent.svg" className="percent" alt="percent%"></img> 
                    </Fade>
  
                    <img src="/Images/Business/p5_line.svg" className="line" alt="line"></img> 
  
                    <p className="label">점심</p>
                    <p className="label">간식</p>
                    <p className="label">저녁</p>
                    <p className="label">야식</p>
  
                </div>
              </div>
              
          </Page>
          <Page className="bp6">
              <Fade bottom cascade distance={'30%'}> 
  
              <div className="text_wrapper">
                  <div className="main_text_div">
                      <p><Bold>최적화된 주방</Bold>으로</p>
                      <img src="/Images/Business/p3_redline.svg" className="highlight" alt="highlight"></img>
  
                      <p><Bold>적게</Bold> 움직이고, <Bold>쉽게</Bold> 만들도록</p>
                      
                  </div>
  
                  <div className="sub_text_div">
                          <p>여러 브랜드를 운영해도 <br/>
                          주방과 주방기구를 최적으로 디자인하여,<br/>
                          최소한의 동선과 <Bold>효율적인 조리와 운영</Bold>을 가능하게 하다.</p>
                  </div>
              </div></Fade>
          </Page>
          <Page className="bp7">
              <Fade bottom cascade distance={'30%'}> 
  
              <div className="text_wrapper">
                  <div className="main_text_div">
                      <p><Bold>운영지원</Bold>은 <Bold>본사</Bold>가 할게요.</p>
  
                      <p><Bold>창업은 누가 하실래요?</Bold></p>
                      
                  </div>
  
                  <div className="sub_text_div">
                          <p>본사의 <Bold>운영지원팀</Bold>과 <Bold>전략기획팀</Bold>이 함께 합니다.</p>
                  </div>
              </div></Fade>
          </Page>
   
  
  
  
          </SectionsContainer>
      </Wrapper>
  
  
    );
  };
*/







/*
    <Fade bottom cascade distance={'30%'}> 

            <div className="text_wrapper">
                <div className="main_text_div">
                    <p>요리사 선택하기</p>
                </div>
                <div className="sub_text_div">
                    <p><span className="bold">오늘의 요리사</span>를 선택하세요</p>
                    <img src="/Images/Brand/p2_redline.svg" className="highlight" alt="highlight"></img>

                </div>
            </div></Fade>
            

            */
