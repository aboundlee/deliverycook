import React from "react";
import "../../../Styles/animation.scss";
// import AOS from 'aos';

import Section1 from './Section1.js'
import Section2 from './Section2.js'
import Section3 from './Section3.js'
import Section4 from './Section4.js'
import Section5 from './Section5.js'
import Section6 from './Section6.js'
import DivLinker from '../../../Components/DivLinker';



import ReactFullpage from "@fullpage/react-fullpage";


//import dotenv from 'dotenv';
//dotenv.config();

  
const FullpageWrapper = () => {
     
      return (
      <ReactFullpage
          licenseKey = {process.env.REACT_APP_FULLPAGE_KEY}
          navigation

          render={({ state, fullpageApi }) => {
          return (
              <ReactFullpage.Wrapper>
              <div className="section"><Section1/></div>
              <div className="section"><Section2/></div>
              <div className="section"><Section3/></div>
              <div className="section"><Section4/></div>
              <div className="section"><Section5/></div>
              <div className="section"><Section6/></div>
	    <div className="section  fp-auto-height"><DivLinker link={'/info'} text="창업안내 보기"/></div>
              </ReactFullpage.Wrapper>
          );
      }}
       />);
  
  };
  
  
  export default FullpageWrapper;
