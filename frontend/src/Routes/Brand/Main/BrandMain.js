import React from "react";
import styled from "styled-components";
import "../../../Styles/BrandMain.css";
import Fade from 'react-reveal/Fade';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Footer from '../../../Components/Footer';

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

  
const Page = styled.section`
width: 100%;

`;

const Bold = styled.span`
font-weight: 900;

`;


const FullpageWrapper = () => {
     
      return (
      <ReactFullpage
          licenseKey = {process.env.REACT_APP_FULLPAGE_KEY}
          navigation

          scrollOverflow = {true}
          render={({ state, fullpageApi }) => {
          return (
              <ReactFullpage.Wrapper>
              <div className="section"><Section1/></div>
              <div className="section"><Section2/></div>
              <div className="section"><Section3/></div>
              <div className="section"><Section4/></div>
              <div className="section"><Section5/><Footer/></div>

              </ReactFullpage.Wrapper>
          );
      }}
       />);
  
  };
  
  
 export default FullpageWrapper;



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