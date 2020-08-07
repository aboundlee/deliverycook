import React from 'react';
import styled, { css } from "styled-components";

import Grid from '@material-ui/core/Grid';

const GridItem = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem 1.5rem;
    width: 26.125rem;
    height: 29.563rem;
    cursor: pointer;

    border: 1px solid #050505;

    
    &:hover {
        background: rgba(0, 0, 0, 0.05);
    }
    $:active {
        background: rgba(0, 0, 0, 0.05);
    }
`;


const ThumbNail = styled.div`
    width: 100%;
    height: 17.313rem;
    ${props => props.src && 
        css`
            background: url(${props.src}) no-repeat;
    `} 
    background-size: cover;

`;

const Title = styled.p`
    font-size: 1.375rem;
    font-weight: bold;
    margin: 1rem 0;

    
`;

const SubTitle = styled.p`
    font-size: 1rem;
    color: #727171;
    margin-top: 0.25rem;
    text-align: left;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0.5rem;

`;

const Post = ({index, title, subtitle}) => {
    const image_url = `/Images/Brand/News/${index}.png`;
    const image_alt = `deliverycook_${index}`;
    return (
        <GridItem item lg={4} md={4} sm={6} xs={12}>
        
            <ThumbNail src={image_url} alt={image_alt}/>
            <Content>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </Content>
        </GridItem>
    )
};

export default Post;



