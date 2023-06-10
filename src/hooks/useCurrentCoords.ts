import { useState } from 'react';

import { useReactiveVar } from '@apollo/client';
import userLocationState from '@/store/userLocation';

export default function useCurrentCoords(options = {}) {
  const userLocation = useReactiveVar(userLocationState);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;

    userLocationState({
      ...userLocation,
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

  return { error, isLoading, getUserCoords };
}
