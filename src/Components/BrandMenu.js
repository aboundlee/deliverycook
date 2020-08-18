import React,{useState} from "react";
import styled from "styled-components";

//import Fade from 'react-reveal/Fade';
import Menu from "./Menu";
import { Menus } from "../Data/Menus";
import Grid from '@material-ui/core/Grid';

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    display: flex;

    flex-direction: column;
    padding: 0 5rem;
    color: #242424;
    background-color: #FFFFFF;

`;

const TitleWrapper = styled.div`
   display: flex;
    align-items: center;
    margin-top: 20vh;
`;
const Title = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 1rem;
    align-items: center;
`;

const Text = styled.p`
    font-size: 2.75rem;
    font-weight: bold;
    line-height: 4rem;
`;
const HighLight = styled.img`
        width: 12.625rem;
`;

const SubTitle = styled.div`
    margin-left: 1.5rem;
    @media (max-width:480px) {
        margin-left: 0px;

    }
`;


const SubText = styled.p`
    font-size: 1.5rem;

    display: inline;
    @media (max-width:480px) {
        width: 13rem;

        display: block;

    }
`;

const GridMenus = styled(Grid)`
    margin: 3rem 0;
    border-bottom: 1px solid #050505;

`;


export default () => {

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>
                    <Text>메뉴소개</Text>
                    <HighLight src="/Images/Brand/store_highlight.svg" alt="highlight"/>
                </Title>
                <SubTitle><SubText>삼겹살쿡 메뉴 </SubText></SubTitle>
            </TitleWrapper>
            <GridMenus container>
                { Menus  && Menus.map((menu, index) => (
                    <Menu index={menu.index} name={menu.name} subtitle={menu.subtitle} detail={menu.detail} key={index}/>
                            ))}
            </GridMenus>
        </Wrapper>
    );
  };
  
