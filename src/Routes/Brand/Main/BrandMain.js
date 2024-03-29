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


/*
const Section1 = React.lazy(() => import('./Section1'));
const Section2= React.lazy(() => import('./Section2'));
const Section3 = React.lazy(() => import('./Section3'));
const Section4 = React.lazy(() => import('./Section4'));
const Section5 = React.lazy(() => import('./Section5'));
const Footer= React.lazy(() => import('../../../Components/Footer'));
const SectionAddition = React.lazy(() => import('./SectionAddition'));
*/


const Section= styled.div`
 height: 100%;
 position: relative;
`;

const SectionContainer2 = styled.div`
 height: 100%;
 position: relative;

`;

const SectionContainer3 = styled.div`
 position: relative;
 width: 100%;
    min-height: 820px;
    height: 100%;
`;


const LongSection = styled.div`
 position: relative;
 overflow: hidden;
`;


const FullpageWrapper = () => {
     

     return (<>

         <SectionContainer2 className="section"><Section2/></SectionContainer2>
         <Section className="section"><Section3/></Section>
              <SectionContainer3 className="section"><SectionAddition/></SectionContainer3>
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

              <div className="section"><Section2/></div>
              <div className="section"><Section3/></div>
              <div className="section"><SectionAddition/></div>
              <div className="section"><Section4/></div>
              <div className="section"><Section5/><Footer/></div>

              </ReactFullpage.Wrapper>
          );
      }}
       />);
  
  };
  
  
 export default withRouter(FullpageWrapper);


