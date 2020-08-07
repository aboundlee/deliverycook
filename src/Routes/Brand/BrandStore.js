import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Map from '../../Components/NaverMap';
import dotenv from 'dotenv';
import { RenderAfterNavermapsLoaded} from 'react-naver-maps'; // 패키지 불러오기
import { useForm } from 'react-hook-form';

import StoreItem from '../../Components/StoreItem';
import {Stores} from '../../Data/Stores'; //get Stores
import Loader from '../../Components/Loader';

dotenv.config();

//import Fade from 'react-reveal/Fade';


const Page = styled.section`
    width: 100%;
    height: 100%;
    padding-top: 7rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #242424;
    background-color: #FFFFFF;
`;



const InfoContainer = styled.div`
     position: absolute;
     z-index: 10;
    width: 25rem;
    height: 40rem;
    left: 1rem;
    top: 57%;
    transform: translate(0, -50%);    
    background: #fff;
    display: flex;
    

    flex-direction: column;

    @media (min-width: 1600px){
        left: 3rem;


    }

`;
const Title = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
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
const SearchContainer = styled.div`

   padding: 0 1rem;
`;

const Selects = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3rem;

`;
const Select = styled.select`
  width: 10rem;
  height: 3.125rem;
  ${'' /* background: transparent; */}
     ${'' /* box-shadow: none; */}
  ${'' /* outline: none; */}
  ${'' /* outline-width: 0; */}
${'' /* -webkit-tap-highlight-color: rgba(0,0,0,0) !important; */}

  color: black;
  padding-left: 5px;
  font-size: 1.25rem;
  border: none;
  border-bottom: 2px solid #242424;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  @media (max-width: 480px){
    font-size: 16px;
    border-radius: 0px;
    -webkit-appearance: none;
    appearance: none;
    background: url(/Images/Brand/store_checkdown.svg) right 0 center no-repeat;


  }
`;


const Form = styled.form`
    display: flex;
    ${'' /* align-items: center; */}

    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Submit = styled.input`
    padding: 8px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    width: 90%;
    border-radius: 12px !important;
    background-color: #E50012;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    ${'' /* &:hover {
        background-color: #fff;
        border: 2px solid #E50012;

        color: #E50012;
    } */}
    margin: 2.25rem 0;


`;

const AddressSearch = styled.div`
 
`;
const SearchButton = styled.button`
  
`;

const StoresResult = styled.div`
  width: 100%;
  height: 15rem;
  overflow: scroll;
`;

const StoreLists = styled.ul`

`;

const Division = styled.div`
  width: 100%;
  height: 3.125rem;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;

  
`;

const SmallText = styled.p`
  font-size: 0.875rem;
  font-weight: normal;
  color: #727171;
  margin-left: 2.5rem;
`;

const Red = styled.span`
   color:  #E50012;
   font-weight: bold;
`;

export default () => {
    
    const cities = ["서울","인천","대전","광주","대구","울산","부산","세종시","경기도","강원도","충청남도","충청북도","전라남도","전라북도","경상남도","경상북도","제주도"];

    const { register, errors, reset, handleSubmit } = useForm();
    const onSubmit = (data) => {

        console.log(data);

        console.log(data.city);
        console.log("!!");
    };

    return (

        <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVERMAP_CLIENT_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<Loader/>}
      >
        <Page>
        <Map/>
        <InfoContainer>
            <Title>
                <Text>매장안내</Text>
                <HighLight src="/Images/Brand/store_highlight.svg" alt="highlight"/>
            </Title>

            <SearchContainer>
                <Form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <Selects>
                        <Select name="city" defaultValue={'DEFAULT'} ref={register} >
                            <option value="DEFAULT" disabled>시/도</option>
                            { cities  && cities.map((city, index) => (
                                <option value={index} key={index}>{city}</option>             
                            ))}
                        </Select>
                        <Select name="region" defaultValue={'DEFAULT'} ref={register} >
                            <option value="DEFAULT" disabled>군/구</option>
                        </Select>
                    </Selects>
                    <Submit type="submit" value="매장검색"/>

                </Form>
                

            </SearchContainer>
            <Division>
                <SmallText>
                   <Red>딜리버리쿡</Red> 검색결과
                </SmallText>
            </Division>
            <StoresResult>

                <StoreLists>
                { Stores  && Stores.map((store, index) => (
                    <StoreItem name={store.name} phoneNumber={store.phone_number} address={store.address}/>
                            ))}
                </StoreLists>

            </StoresResult>
        </InfoContainer>



        </Page>
      </RenderAfterNavermapsLoaded>
    );
  
};





