import React from "react";
import "../../../Styles/BusinessMain.css";
import {withRouter} from 'react-router-dom';

import {isIE} from 'react-device-detect';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Footer from '../../../Components/Footer';

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

const FullpageWrapper = () => {
   
    return (
    <ReactFullpage
        licenseKey = {process.env.REACT_APP_FULLPAGE_KEY}
        navigation

        render={({ state, fullpageApi }) => {
        return (
            <ReactFullpage.Wrapper>
            {/* <div className="section"><BrandSection1/></div> */}

            <div className="section"><Section1/></div>
            <div className="section"><Section2/></div>
            <div className="section"><Section3/></div>
            <div className="section"><Section4/></div>
            <div className="section"><Section5/><Footer/></div>
	    <div className="section  fp-auto-height"><DivLinker link={'/success'} text="성공가이드북"/></div>
            </ReactFullpage.Wrapper>
        );
    }}
     />);

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

