import React from "react";
import styled from "styled-components";

//import Fade from 'react-reveal/Fade';


const Page = styled.section`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: #242424;
    height: 100vh;
`;

const Text = styled.p`
    font-size: 12px;
`;


export default () => {
    return (
        <Page><Text>페이지 준비중입니다.</Text></Page>
    );
  };
