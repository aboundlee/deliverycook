import React from 'react';
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

const StoreMarker= ({lat, lng}) => {
  return (
    <Marker
      position={{ lat: lat, lng: lng }}
      icon={CustomMarker()}
    />
  )
}


StoreMarker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
}

export default StoreMarker;