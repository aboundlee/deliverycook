import React from 'react';
import styled, { css } from "styled-components";

import Grid from '@material-ui/core/Grid';

const GridItem = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 1rem 1.5rem;
    width: 26.125rem;
    height: 20rem;
    cursor: pointer;

    border-top: 1px solid #050505;

    @media (max-width:768px) {
        border-left: 0px;
    }

    &:hover {
        background: rgba(0, 0, 0, 0.05);
    }
    $:active {
        background: rgba(0, 0, 0, 0.05);
    }

    ${props => props.border && 
        css`
            border-left: 1px solid #050505;
    `} 
    

`;
const G = styled.div`

    border: 1px solid #050505;
`;

const ThumbNail = styled.div`
    width: 17.375rem;
    height: 17.375rem;



    ${props => props.src && 
        css`
            background: url(${props.src}) no-repeat;
    `} 
    background-size: cover;


`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    text-align: left;
    width: 50%;
    @media (max-width:768px) {
        padding-right: 3.5rem;
    }
`;


const Title = styled.p`
    font-size: 2.5rem;
    font-weight: bold;    

`;

const SubTitle = styled.p`
    font-size: 1.25rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 1.5rem;

    @media (max-width:768px) {
        margin: 1rem 0;    
        }

`;

const Detail = styled.p`
    font-size: 1.25rem;
    color: #727171;
    margin-top: 2.5rem;
    text-align: left;
    line-height: 1.75rem;

    @media (max-width:768px) {
        margin-top: 1rem;
    }
`;

const TextHighlight = styled.span`
    font-size: 1.25rem;
    color: #fff;
    text-align: left;
    width: max-content;
    line-height: 1.75rem;

    ${props => {
        if (props.brand === '1') {
          return css`
    	  background-color: #D53833;
          `;
        } else if (props.brand === '2'){
          return css`
    	  background-color: rgb(244, 158, 33);
          `;
        } else if (props.brand === '3'){
          return css`
    	  background-color: #C5171E;
          `;
        }
    }}
`;

const Menu = ({brand, index, name, subtitle, detail, highlightText}) => {
    const image_url = `/Images/Brand/About/Brand${brand}/${index}.jpg`;
    const image_alt = `deliverycook_${index}`;
    let border = false;
    let splited_name = name.split(" ");

    
    if (index%2 === 0) {
        border = true;
    } else {
        border = false;
    }


    return (
        <GridItem item border={border ? 1: 0} lg={6} md={6} sm={6} xs={12}>
        
            <ThumbNail src={image_url} alt={image_alt}/>
            <Content>
                <SubTitle>{subtitle}</SubTitle>
                {splited_name.map((each_name, index)=> (
                    <Title key={index}>{each_name}</Title>
                ))}
                <Detail>{detail}</Detail>
                <TextHighlight brand={brand}>{highlightText}</TextHighlight>

            </Content>
        </GridItem>
    )
};

export default Menu;



