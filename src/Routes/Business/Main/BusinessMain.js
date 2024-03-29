import React from "react";
import "../../../Styles/BusinessMain.css";
import {withRouter} from 'react-router-dom';

import {isIE} from 'react-device-detect';
import styled from "styled-components";



import Section1 from './Section1';
import Section12 from './Section12';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Footer from '../../../Components/Footer';

import DetailTitle from './Strengths/DetailTitle';


import BrandSection1 from '../../Brand/Main/Section1';
import DivLinker from '../../../Components/DivLinker';


// import AOS from 'aos';


import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

//import path from 'path';
//import dotenv from 'dotenv';
// dotenv.config({ path: path.join(__dirname,'../../../.env') });
//dotenv.config();
// import '../../../env.js';

const Wrapper = styled.div`

    width: 100%;
    height: 100%;
`;

const Section = styled.section`
   width: 100%;
    height: 100%;
    position: relative;
`;

const SectionAdder = styled.section`
   width: 100%;
    height: 30%;
    position: relative;
`;

const SmallSection = styled.section`

`;

const FullpageWrapper = () => {
   
    

    window.scrollTo(0, 0);
        return (
            <Wrapper>
            <Section className="section"><BrandSection1/></Section>
            {/* <Section className="section"><Section1/></Section> */}
            <Section className="section"><Section12/></Section>
            <SmallSection className="section"><DetailTitle/></SmallSection>
 


            <Section className="section"><Section2/></Section>
            <Section className="section"><Section3/></Section>
            <Section className="section"><Section5/><Footer/></Section>
	        <SectionAdder className="section  fp-auto-height"><DivLinker link={'/success'} text="성공가이드북"/></SectionAdder>
        </Wrapper>
        );
    

        

    // return (
    // <ReactFullpage
    //     licenseKey = {process.env.REACT_APP_FULLPAGE_KEY}
    //     navigation

    //     render={({ state, fullpageApi }) => {
    //     return (
    //         <ReactFullpage.Wrapper>
    //         {/* <div className="section"><BrandSection1/></div> */}
    //         <div className="section"><BrandSection1/></div>
    //         <div className="section"><Section1/></div>
    //         <div className="section"><Section12/></div>
    //         <div className="section"><Section2/></div>
    //         <div className="section"><Section3/></div>
    //         <div className="section"><Section4/></div>
    //         <div className="section"><Section5/><Footer/></div>
	//     <div className="section  fp-auto-height"><DivLinker link={'/success'} text="성공가이드북"/></div>
    //         </ReactFullpage.Wrapper>
    //     );
    // }}
    //  />
    //  );

};


 export default withRouter(FullpageWrapper);


//              <button onClick={() => fullpageApi.moveSectionDown()}>
// Click me to move down
// </button>






// <Wrapper>
//   <Fullpage>
//       <FullPageSections>
        //   /* <FullpageSection><Section1/></FullpageSection> */

      
     //     <FullpageSection> <BrandSection1/></FullpageSection>
     //     <FullpageSection><Section2/></FullpageSection>

            //   {/* <FullpageSection>
            //       <Page className="bp22">
            //           <div className="carosuel_wrapper">
            //               <MenuCarosuel category="Business"/>
            //           </div>
            //       </Page>
            //   </FullpageSection> */}
// 
            //   {/* <FullpageSection><Section3/></FullpageSection> */}
      //        <FullpageSection><Section4/></FullpageSection>
       //       <FullpageSection><Section5/></FullpageSection>
        //      <FullpageSection><Section6/></FullpageSection>
         //     <FullpageSection><Section7/></FullpageSection>

//           </FullPageSections>
//   </Fullpage>
//   </Wrapper>

