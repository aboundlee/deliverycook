


import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';


const Page = styled.section`
width: 100%;

`;

const Bold = styled.span`
font-weight: 900;

`;

const Section3 = () => {


    return (
        <Page className="p3"> 
            <div className="text_wrapper">
                <Fade bottom distance={'30%'}> 

      
                </Fade>

                <Fade bottom distance={'30%'}> 

                <div className="main_text_div">
                        <p>배달음식도<br/><Bold>믿고 먹을 수</Bold> 있어야 해요.</p>
                        <img src="/Images/Brand/p5_redline.svg" className="highlight" alt="highlight"></img>

                </div>

                <div className="sub_text_div">
                    <p>집에서 <Bold>먹는 배달음식</Bold>을<br/>집에서 <Bold>만든 음식</Bold>처럼 먹을 수 있는,</p>
                </div>
                </Fade>
            </div>
        </Page>    
    );
};

export default Section3;