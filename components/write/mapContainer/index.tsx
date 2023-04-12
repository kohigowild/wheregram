import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useGeolocation } from '@/hooks/useGeolocation';
import { AddressType } from '@/interfaces/location';

export default function MapContainer({ position, setPosition }: AddressType) {
  const location = useGeolocation();
  const latitude = location.lat;
  const longitude = location.lng;

  return (
    <>
      <Map
        center={position ? { lat: position.lat, lng: position.lng } : { lat: latitude, lng: longitude }}
        style={{ width: '100%', height: '300px', borderRadius: '12px', marginBottom: '12px' }}
        level={8}
        onClick={(_, e) =>
          setPosition({
            lat: e.latLng.getLat(),
            lng: e.latLng.getLng(),
          })
        }>
        {position ? <MapMarker position={position} /> : <MapMarker position={{ lat: latitude, lng: longitude }} />}
      </Map>
    </>
  );
}
