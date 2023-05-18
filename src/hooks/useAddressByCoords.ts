import { useEffect, useState } from 'react';

interface useAddressByCoordProps {
  latitude: number;
  longitude: number;
}

export default function useAddressByCoords(coords: useAddressByCoordProps) {
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const { latitude, longitude } = coords;

  const getAddressByCoord = async () => {
    setIsLoading(true);

    try {
      const result = await fetch(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}&input_coord=WGS84`,
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

  const getUserAddress = async () => {
    const result = await getAddressByCoord();

    const address =
      (result.documents[0].road_address
        ? result.documents[0].road_address.address_name +
          ' ' +
          result.documents[0].road_address.building_name
        : result.documents[0].address.address_name) || '';

    setUserAddress(address);
  };

  useEffect(() => {
    getUserAddress();
  }, [coords.latitude, coords.longitude]);

  return { isLoading, isSuccess, error, userAddress, getAddressByCoord };
}
