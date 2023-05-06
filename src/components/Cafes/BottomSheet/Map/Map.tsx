/*global kakao*/

import { useEffect } from 'react';
import styled from 'styled-components';

interface MapProps {
  markerImg: string;
  latitude: number;
  longitude: number;
}

export default function Map({ markerImg, latitude, longitude }: MapProps) {
  const drawMap = () => {
    const { kakao } = window;

    kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
      };

      const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      const markerPosition = new kakao.maps.LatLng(latitude, longitude); // 마커가 표시될 위치입니다

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      const iwContent =
        '<div style="padding:5px;">투썸 플레이스 리첸시아점 <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      const iwPosition = new kakao.maps.LatLng(latitude, longitude); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);
    });
  };

  useEffect(() => {
    drawMap();
  }, []);

  return <KaKaoMap id='map' style={{ width: '300px', height: '300px' }} />;
}

const KaKaoMap = styled.div`
  width: 330px;
  height: 330px;
  border-radius: 12px;
`;
