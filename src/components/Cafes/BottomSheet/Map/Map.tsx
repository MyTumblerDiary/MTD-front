import { useEffect } from 'react';

import cafeDetailState from '@/store/cafeDetail';
import { useReactiveVar } from '@apollo/client';

import styled from 'styled-components';

export default function Map() {
  const { name, latitude, longitude } = useReactiveVar(cafeDetailState);

  useEffect(() => {
    const drawMap = () => {
      const { kakao } = window;

      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: 4
        };

        const map = new kakao.maps.Map(mapContainer, mapOption);

        const markerPosition = new kakao.maps.LatLng(latitude, longitude);

        const marker = new kakao.maps.Marker({
          position: markerPosition
        });

        marker.setMap(map);

        const iwContent = `<div style="display: flex; flex-direction: column; gap:5px; padding:10px;">${name} <div><a href="https://map.kakao.com/link/map/Hello World!,${latitude},${longitude}" style="color:blue" target="_blank">지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,${latitude},${longitude}" style="color:blue" target="_blank">길찾기</a></div></div>`;
        const iwPosition = new kakao.maps.LatLng(latitude, longitude);

        const infowindow = new kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent
        });

        infowindow.open(map, marker);
      });
    };

    drawMap();
  }, [name, longitude, latitude]);

  return <KaKaoMap id='map' style={{ width: '300px', height: '300px' }} />;
}

const KaKaoMap = styled.div`
  width: 330px;
  height: 330px;
  border-radius: 12px;
`;
