import { useEffect, useState } from 'react';

import userLocationState from '@/store/userLocation';
import { useReactiveVar } from '@apollo/client';

export default function useAddressByCoords() {
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userLocation = useReactiveVar(userLocationState);

  const getAddressByCoord = async (lat: number, lng: number) => {
    setIsLoading(true);

    try {
      const result = await fetch(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}&input_coord=WGS84`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_RESTAPI_KEY}`
          }
        }
      );

      const data = await result.json();

      setIsSuccess(true);

      return data;
    } catch (error) {
      setError('위치를 찾는 중 오류가 발생했습니다.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getUserAddress = async () => {
      const result = await getAddressByCoord(
        userLocation.latitude,
        userLocation.longitude
      );

      const address =
        (result.documents[0].road_address
          ? result.documents[0].road_address.address_name +
            ' ' +
            result.documents[0].road_address.building_name
          : result.documents[0].address.address_name) || '';

      userLocationState({
        ...userLocation,
        address
      });
    };

    getUserAddress();
  }, [userLocation]);

  return { isLoading, isSuccess, error };
}
