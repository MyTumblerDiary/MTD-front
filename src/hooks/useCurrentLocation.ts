// src/hooks/useCurrentPosition.js

import { useState, useEffect } from 'react';

export default function useCurrentLocation(options = {}) {
  const [location, setLocation] = useState({});
  const [error, setError] = useState('');

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude
    });
  };

  const handleError = (error: GeolocationPositionError) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, []);

  return { location, error };
}
