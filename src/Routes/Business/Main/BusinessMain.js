import React from "react";
import styled from "styled-components";
import "../../../Styles/BusinessMain.css";

// import Section1 from './Section1';
import Section2 from './Section2';
// import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Footer from '../../../Components/Footer';

import BrandSection1 from '../../Brand/Main/Section1';

// import AOS from 'aos';


import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import path from 'path';
import dotenv from 'dotenv';
// dotenv.config({ path: path.join(__dirname,'../../../.env') });
dotenv.config();
// import '../../../env.js';

const FullpageWrapper = () => {
   
    return (
    <ReactFullpage
        licenseKey = {process.env.REACT_APP_FULLPAGE_KEY}
        navigation

        render={({ state, fullpageApi }) => {
        return (
            <ReactFullpage.Wrapper>
            <div className="section"><BrandSection1/></div>

            <div className="section"><Section2/></div>
            <div className="section"><Section4/></div>
            <div className="section"><Section5/></div>
            <div className="section"><Section6/></div>
            <div className="section"><Section7/><Footer/></div>
            </ReactFullpage.Wrapper>
        );
    }}
     />);

};


export default FullpageWrapper;


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

