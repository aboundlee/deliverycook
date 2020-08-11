import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-naver-maps'; // 패키지 불러오기


const CustomMarker = () => {
  const navermaps = window.naver.maps;

  return (
    {
        content:[
            '<div class="gps_div" style="position: absolute;width: 80px;height: 80px;z-index: 10;">',
              '<img src="/Images/Brand/marker.png" alt="pos">',
            '</div>'].join(''),

        size: new navermaps.Size(30, 30),
        anchor: new navermaps.Point(15, 30)
    }
  )
}


const StoreMarker= ({store, onStoreClick}) => {


    // var iwContent = `<div style="padding:5px;"><strong>1</strong>  22<br>33</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    // iwRemoveable = true, 
    
    // iwPosition = new window.daum.maps.LatLng(transform[1], transform[0]); //인포윈도우 표시 위치입니다

    // // 인포윈도우를 생성합니다
    // infowindow = new window.daum.maps.InfoWindow({
    //     position : iwPosition, 
    //     content : iwContent,
    //     removable : iwRemoveable
    // });
    
    // // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    // infowindow.open(map, Marker);    


  return (
    <Marker
      position={{ lat: store.lat, lng: store.lng }}
      icon={CustomMarker()}
      onClick={()=>onStoreClick(store)}
      naverInstanceRef={(ref) => { 

        console.log(ref);
        console.log(ref.marker);

    // this.marker = ref && ref.instance
  }}
    />
  )
}


/*
StoreMarker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
}
*/

export default StoreMarker;
