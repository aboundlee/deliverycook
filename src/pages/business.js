
import styled from "styled-components";

// import "../../../Styles/BusinessMain.css";
import {useState, useEffect} from 'react';

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


const Sec = styled.div`
width: 100%;
height: 100%;
`;

const Business = () => {
   
    const [isLoading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);

	
    },[]);

/*
  return(
<Sec>
            <BrandSection1/>
            <Section2/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/><Footer/>
</Sec>
);
*/

    return (
<> {isLoading ? ( 
    <ReactFullpage
        licenseKey = {process.env.REACT_APP_FULLPAGE_KEY}
          navigation

        render={({ state, fullpageApi }) => {
        return (
            <ReactFullpage.Wrapper>
            <Sec className="section"><BrandSection1/></Sec>
            <Sec className="section"><Section2/></Sec>
            <Sec className="section"><Section4/></Sec>
            <Sec className="section"><Section5/></Sec>
            <Sec className="section"><Section6/></Sec>
            <Sec className="section"><Section7/><Footer/></Sec> 
            </ReactFullpage.Wrapper>
        );
    }}
     /> 
     
	) : (<p>loading</p>)}
	</>
     );


};


export default Business;



