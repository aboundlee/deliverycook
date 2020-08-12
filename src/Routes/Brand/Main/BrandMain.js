import React from "react";
import "../../../Styles/BrandMain.css";
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import SectionAddition from './SectionAddition';
import Footer from '../../../Components/Footer';

import 'fullpage.js/vendors/scrolloverflow';

import ReactFullpage from "@fullpage/react-fullpage";

//import dotenv from 'dotenv';
//dotenv.config();

import $ from 'jquery';



const Section= styled.div`
 height: 100%;
 position: relative;
`;

const SectionContainer2 = styled.div`
 position: relative;
`;


const LongSection = styled.div`
 position: relative;
 overflow: hidden;
`;


const FullpageWrapper = () => {
     

     return (<>
         <Section className="section"><Section1/></Section>
         <Section className="section"><Section2/></Section>
              <SectionContainer2 className="section"><SectionAddition/></SectionContainer2>
         <LongSection className="section"><Section4/></LongSection>
         <Section className="section"><Section5/><Footer/></Section>
         </>
     );

    
      return (
      <ReactFullpage
          licenseKey = {process.env.REACT_APP_FULLPAGE_KEY}
          navigation
        //   scrollBar= {true}

          scrollOverflow = {true}

       
          render={({ state, fullpageApi }) => {
      
          return (
              <ReactFullpage.Wrapper>
              <div className="section"><Section1/></div>
              <div className="section"><Section2/></div>
              {/*<div className="section"><Section3/></div>*/}
              <div className="section"><SectionAddition/></div>
              <div className="section"><Section4/></div>
              <div className="section"><Section5/><Footer/></div>

              </ReactFullpage.Wrapper>
          );
      }}
       />);
  
  };
  
  
 export default withRouter(FullpageWrapper);


