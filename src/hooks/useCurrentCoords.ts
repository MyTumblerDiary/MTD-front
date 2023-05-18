import { useState } from 'react';

interface CoordsProps {
  longitude: number;
  latitude: number;
}

export default function useCurrentCoords(options = {}) {
  const [coords, setCoords] = useState<CoordsProps>({
    longitude: 127.05515387709,
    latitude: 37.544820710541
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;

    setCoords({
      latitude,
      longitude
    });
  };

  const handleError = (error: GeolocationPositionError) => {
    setError(error.message);
  };

  const getUserCoords = () => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  };

  return { coords, error, isLoading, getUserCoords };
}
