import React, { useState, useEffect } from 'react';
import { NaverMap } from 'react-naver-maps'; // 패키지 불러오기
import StoreMarker from './Marker';
import styled from 'styled-components';

import {Stores} from '../Data/Stores'; //get Stores

// import axios from 'axios';




const MapContainer = styled.div`

    width: 100%;
    height: 100%;
`;


// const useAxios = (url,header) => {
//     const [state, setState] = useState({
//       data: null,
//       loading: true,
//       error: null
//     });
  
//     const [trigger, setTrigger] = useState(0);
  
//     const refetch = () => {
//       setState({
//         loading: true
//       });
//       setTrigger(Date.now());
//     };
  
//     const getData = async () => {
//       const result = await axios.get(url,header);
//       setState({
//         data: result.data,
//         loading: false,
//         error: null
//       });
//       if (result.error) {
//         setState({data:result.data, loading:false, error:result.error});
//       }
//     };
  
//     useEffect(() => { getData(); }, [trigger]);
//     if (!url) {
//       return;
//     }
//     return {state, refetch};
//   };




const Map = () => {  
    //getCurrentLocation();
    let mapRef;
  
  
    let [mapBounds, setBounds] = useState(0); // 맵 전체 크기
    let [center, setCenter] = useState({lat:37.5668144, lng:126.9783882}); // 지도의 center 값
    let [zoom, setZoom] = useState(0); // 지도의 zoom 값
    let [posChanged, setPosChanged] = useState(0); // 지도 position 변화 감지.


//     const addr ="경남 진주시 하대로117번길 7"
//     const clientID = "9pj6u5x2ps";
//     const clientSecret = "ZoMXAoWgD4knNIMkUupoaiYuqjeWJg1iVO9y2GWG";
//     const url = `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${addr}`;
//     const getConfig = {
//        headers: {
//        "X-NCP-APIGW-API-KEY-ID": `${clientID}`,
//        "X-NCP-APIGW-API-KE" : `${clientSecret}`
//        }
//    };


//     const { state, refetch } = useAxios(url,getConfig);
  

    // Get Map Center data
    useEffect(() => {
      setBounds(mapRef.getBounds());
     }, [center]);
  



    // console.log(state);

    let renderStores = [];
  
    if (Stores) {

      for (let i = 0; i < Stores.length; i ++) {        
        const navermaps = window.naver.maps; // 혹은 withNavermaps hoc을 사용



        // mapBounds 안에 있는 marker만 render 하도록
        if (mapBounds && mapBounds.hasLatLng(navermaps.LatLng(Stores[i].lat,Stores[i].lng))){
          renderStores.push(Stores[i]);
        }
      }
    }
    
    

    return (
        <MapContainer>
          <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            naverRef={ref => { mapRef = ref}}
            style={{
              width: '100%', // 네이버지도 가로 길이
              height: '100%' // 네이버지도 세로 길이
            }}
            defaultCenter={{lat: 36.4173324, lng: 126.2917427}} // 지도 초기 위치
            center={center}
            defaultZoom={8} // 지도 초기 확대 배율
            onCenterChanged={center_pos => { setCenter(center_pos) }}
            onZoomChanged={zoomListener => { setZoom(zoomListener) }}
            submodules={['geocoder']} 

          >

            { renderStores  && renderStores.map((store, index) => (
                <StoreMarker lat={store.lat} lng={store.lng} key={index}/>             
            ))}
    
    
          </NaverMap>
        </MapContainer>
      );
    }
    
    export default Map;
    