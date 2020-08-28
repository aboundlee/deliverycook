import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Map from '../../Components/NaverMap';
import dotenv from 'dotenv';
import { RenderAfterNavermapsLoaded} from 'react-naver-maps'; // 패키지 불러오기
import { useForm } from 'react-hook-form';

import StoreItem from '../../Components/StoreItem';
import {Stores} from '../../Data/Stores'; //get Stores
import Loader from '../../Components/Loader';
import StoreModal from '../../Components/StoreModal';

dotenv.config();

//import Fade from 'react-reveal/Fade';


const Page = styled.section`
    width: 100%;
    height: 100%;

    text-align: center;
    position: relative;
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
    top: 8rem;
    background: #fff;
    display: flex;
    

    flex-direction: column;

    @media (max-width:480px) {
        top: 50%;
        transform: translate(0, -50%);    

    }
    @media (min-width: 1600px){
        left: 3rem;
        height: 45rem;
        width: 28.125rem;
        top: 10rem;
    }

`;
const Title = styled.h1`
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


const StoresResult = styled.div`
  width: 100%;
  height: 15rem;
  overflow-y: scroll;
  @media (min-width: 1600px){
    height: 30rem;

    }
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
    
    const cities = ["전체보기","서울","인천","대전","광주","대구","울산","부산","세종시","경기도","강원도","충청남도","충청북도","전라남도","전라북도","경상남도","경상북도","제주도"];

    const { register, reset, handleSubmit } = useForm();
    const [center, setCenter] = useState({lat:37.5668144, lng:126.9783882}); // 지도의 center 값

    const [searchingCity, setSearchingCity] = useState("");
    const [searchingStore, setSearchingStore] = useState(Stores);

    const [selectedStore, setSelectedStore] = useState({});
    // marker click 시, modal control
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleshow = () => setShow(true);

    const onSubmit = ({city},e) => {

        setSearchingCity(city);
        let tempSearchingStore = [];
        if (city==="전체보기") {
            setSearchingStore(Stores);
        } else {
            for (let i = 1; i < Stores.length; i++) {
                if (Stores[i].city === city) {
                    tempSearchingStore.push(Stores[i]);
                }
            }
            setSearchingStore(tempSearchingStore);
        }      


        // 만약 존재하면, 해당지역으로 좌표 이동.

        if (tempSearchingStore) {
            // setCenter({lat: lat, lng:lng});
        }

   

    };

    const onStoreClick = (store) => {
	handleshow();
        setCenter({lat: store.lat, lng:store.lng});
	setSelectedStore(store);

    };

    const searchedStore = Stores

    return (

        <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVERMAP_CLIENT_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<Loader/>}
      >
        <Page>
        <Map center={center} setCenter={setCenter} onStoreClick={onStoreClick}/>
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
                                <option value={city} key={index}>{city}</option>             
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
                   <Red>{searchingCity} 딜리버리쿡</Red> 검색결과
                </SmallText>
            </Division>
            <StoresResult>

                <StoreLists>
                { searchingStore  && searchingStore.map((store, index) => (
                    <StoreItem name={store.name} phoneNumber={store.phone_number} address={store.address} store={store} onStoreClick={onStoreClick} key={index}/>
                            ))}
                </StoreLists>

            </StoresResult>
        </InfoContainer>
j
	{ selectedStore && (
	<StoreModal store={selectedStore} show={show} handleClose={handleClose}/>)}


        </Page>
      </RenderAfterNavermapsLoaded>
    );
  
};





