

import styled from "styled-components";
// import "../../../Styles/BusinessMain.css";


import Section2 from '../Next/Components/Business/Section2';
import Section4 from '../Routes/Business/Main/Section4';
import Section5 from '../Routes/Business/Main/Section5';
import Section6 from '../Routes/Business/Main/Section6';
import Section7 from '../Next/Components/Business/Section7';
import Footer from '../Components/Footer';
import BrandSection1 from '../Routes/Brand/Main/Section1';

import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client


import path from 'path';
import dotenv from 'dotenv';
dotenv.config();


const Business = () => {
   
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


export default Business;


