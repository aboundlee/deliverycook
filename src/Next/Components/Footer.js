
import React, {useState} from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
    width: 100vw;
    background-color: #242424;

    opacity: 0.6;
    filter:alpha(opacity=60);
    -moz-opacity:0.6;
    -khtml-opacity: 0.6;
    
    color: #fff;
    position: absolute;
    bottom: 0;
    height: 100px;
    padding: 40px;

    display:flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;


    @media screen and (max-width:480px) {
        height: 120px;
        padding: 0px;
        padding-left: 20px;
        align-items: baseline;


    }

`;

const Text = styled.p`
    font-size: 0.75rem;
    display: inline;

    @media screen and (max-width:480px) {
        display: block;
    }

`;

const SubText = styled.p`
    font-size: 0.75rem;
    padding-top: 10px;

`;
const Footer = () => {





    return (
        <Wrapper>
            <div>
                <Text>대표이사 : 이희경  </Text>
                <Text>사업자등록번호 : 691-88-01138 </Text>
                <Text>상호명 : (주) 드림위드FC </Text>
                <Text>사무실주소: 경기도 고양시 무원로 36번길 46. 202호(행신동) </Text>
                <Text>전화번호: 1661-1758</Text>


            </div>
            <div>
                <SubText>
                    COPYRIGHT ⓒ 2020 딜리버리쿡 . ALL RIGHT RESREVED.
                </SubText>
            </div>

        </Wrapper>


    )
};

export default Footer;



