import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';



const Page = styled.section`
width: 100%;

`;

const Bold = styled.span`
font-weight: 900;

`;


const Section4 = () => {

    return (

        <Page className="p4">
        <div className="text_wrapper">
        <Fade bottom cascade distance={'30%'}> 

            <div className="main_text_div">
                <p><Bold>테이블</Bold>까지 <br/>
                가는 길</p>
                <img src="/Images/Brand/p4_redline.svg" className="highlight" alt="highlight"></img>

            </div>
        </Fade>
        </div>
        </Page>
    );
};

export default Section4;