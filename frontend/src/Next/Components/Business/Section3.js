import React from 'react';
import styled from "styled-components";

import Fade from 'react-reveal/Fade';

import './Styles';


import { Page, Bold } from './Styles';



const Section3 = () => {

    return (


        <Page className="bp3"> 
        <div className="text_wrapper">
            <Fade bottom distance={'30%'}> 
                <div className="main_text_div">
                    <p><Bold>뭉치면 산다.</Bold></p>
                    <img src="/Images/Business/p3_redline.svg" className="highlight" alt="highlight"></img>
                    <p>단, <Bold>제대로</Bold> 뭉쳐야 한다.</p>
                </div>
            </Fade>
            <Fade bottom distance={'30%'}> 
                <div className="sub_text_div">
                    <p>제대로 된 <Bold>전문 배달음식 브랜드</Bold>로 <Bold>골라서</Bold> 창업하다.</p>
                </div>
            </Fade>
        </div>
        </Page>

    );
};

export default Section3;
    

