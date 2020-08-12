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

   @media(max-width: 480px) {
    height: 13.563rem;
    padding: 0.5rem 3.5rem;
  }

   

    
    &:hover {
        background: rgba(0, 0, 0, 0.05);
        border: 2px solid #fff;
    }
    $:active {
        background: rgba(0, 0, 0, 0.05);
    }
`;
const G = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
   @media(max-width: 480px) {
    flex-direction: row;
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

   @media(max-width: 480px) {
    height: 100%;
  }


`;

const Title = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;

    
`;

const SubTitle = styled.p`
    font-size: 1rem;
    color: #727171;
    margin-top: 0.25rem;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0.5rem;
    width: 100%;
`;

const Post = ({title, img_url ,onGridClick}) => {
    const image_url = `/Images/Brand/News/${img_url}.png`;
    const image_alt = `deliverycook_1`;
    return (
        <GridItem item lg={4} md={4} sm={4} xs={12} onClick={()=>onGridClick()}>
	<G>
        
            <ThumbNail src={image_url} alt={image_alt}/>
            <Content>
                <Title>{title}</Title>
            </Content>
	</G>
        </GridItem>
    )
};

export default Post;



