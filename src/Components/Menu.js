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
    

    @media (max-width:768px) {
        height: 15rem;
        border-left: 0px;
    }
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

    @media (max-width:768px) {

        width: 10.375rem;
        height: 10.375rem;
    }


`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    text-align: left;
`;


const Title = styled.p`
    font-size: 2.5rem;
    font-weight: bold;    

    @media (max-width:768px) {
        font-size: 2rem;
    }
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

    @media (max-width:768px) {
        font-size: 1rem;
        margin-top: 1rem;
    }
`;

const Post = ({index, name, subtitle, detail}) => {
    const image_url = `/Images/Brand/About/Brand1/${index}.png`;
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

            </Content>
        </GridItem>
    )
};

export default Post;



