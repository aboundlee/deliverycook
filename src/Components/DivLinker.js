
import React, { useState } from 'react';
import styled, {css} from "styled-components";

import { Link, withRouter, useLocation } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    height: 30vh;

`;

const Background = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #242424;

/*
    filter:alpha(opacity=8);
    -moz-opacity:0.8;
    -khtml-opacity: 0.8;
    opacity: 0.8;
*/
    &:hover {
	    background: url("/Images/Business/LinkToSuccess.png") no-repeat; 
	    background-position: center;
	    background-size: cover;
	    filter:alpha(opacity=10);
	    -moz-opacity:1;
	    -khtml-opacity: 1;
	    opacity: 1;

    }
`;


const MainTextContainer = styled.div`

    display: flex;
   flex-direction: column; 
    color: #fff;
`;


const MainText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 3rem;
    line-height: 4rem;

    display: inline;

    @media screen and (max-width:480px) {
        display: block;
    }

`;

const Bold = styled.span`
 font-weight: bold;
`;

const Highlight = styled.img`
   width: 14.25rem;

`;
const DivLinker = ({link, text, background=''}) => {


//10.25rem
    

    return (
       <Wrapper>
            <Link to={link}>
		<Background>
		<MainTextContainer>
                	<MainText><Bold>{text}</Bold> 보기</MainText>
			<Highlight src="/Images/Business/Link_redline.svg" alt="highlight" />
		</MainTextContainer>
		</Background>

	            </Link>
       </Wrapper>
    );


};


export default DivLinker;
