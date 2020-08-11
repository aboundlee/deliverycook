
import React from 'react';
import styled from "styled-components";


const Item = styled.li`
    display: flex;
    flex-direction: row;
    padding: 1rem 1.5rem;
    cursor: pointer;

    &:hover {
        background: rgba(229, 0, 18, 0.1);
    }
    $:focus {
        background: rgba(229, 0, 18, 0.1);
    }
`;


const MarkerImg = styled.img`
    width: 4rem;
    height: 4rem;
`;

const Name = styled.p`
    font-size: 1.25rem;
    font-weight: bold;
`;

const PhoneNumber = styled.p`
    font-size: 0.875rem;

    color: #727171;
    margin-left: 0.875rem;
`;

const Address = styled.p`
    font-size: 1rem;
    color: #727171;
    margin-top: 0.25rem;
    text-align: left;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.5rem;
    margin-top: 0.5rem;

`;

const FirstColumn = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 0.25rem;
    align-items: center;
    
`;

const StoreItem = ({name,phoneNumber, address, store, onStoreClick}) => {

    return (
        <Item onClick={()=>{
            onStoreClick(store);

            }}>
            <MarkerImg src="/Images/Brand/marker.png" alt="deliverycook"/>
            <Content>
                <FirstColumn>
                    <Name>{name}</Name>
                    <PhoneNumber>{phoneNumber}</PhoneNumber>
                </FirstColumn>
                <Address>{address}</Address>
            </Content>
        </Item>
    )
};

export default StoreItem;



