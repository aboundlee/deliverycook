
import React from 'react';
import styled from "styled-components";




const LinkCircle = styled.div`
    width: 173px;
    height: 173px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:absolute;
    right: 5%;
    bottom: 5%;
    border-radius: 110px;
    background: #E50012;
    color: white;
    cursor:pointer;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

    &:hover {
    -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    }


    @media screen and (max-width:580px) {
        width: 100px;
    height: 100px;

    }
`;

const LinkRing = styled.div`
    position: absolute;
    top:-55px;
    width: 200px;
    height: 200px;
    border: solid 10px #ffffff;
    border-radius: 120px;

  /* Firefox */
  -moz-transition: all 0.6s ease;
  /* WebKit */
  -webkit-transition: all 0.6s ease;
  /* Opera */
  -o-transition: all 0.6s ease;
  /* Standard */
  transition: all 0.6s ease;
`;

const LinkText = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    /* or 109% */
    text-align: center;
    line-height: 38px;
    @media screen and (max-width:580px) {
        font-size: 26px;
        line-height: 26px;
    }
`;


const LinkSubText = styled.p`
    font-size: 16px;
    margin-top: 7px;
    font-weight: bold;

    @media screen and (max-width:580px) {
        font-size: 14px;
    }
`;



export default () => {
    
    return (
    <LinkCircle>
        <LinkText>창업<br/>문의</LinkText>
        <LinkSubText>바로가기</LinkSubText>
    </LinkCircle>
    )
}