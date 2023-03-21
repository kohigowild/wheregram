import { useState, useEffect } from 'react';
import { LocationType } from '@/interfaces/location';

export const useGeolocation = () => {
  const [location, setLocation] = useState<LocationType>({
    lat: 0,
    lng: 0,
  });

  const onSuccess = (location: { coords: { latitude: number; longitude: number } }) => {
    setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  return location;
};
