import React, { useState, useEffect } from 'react';
import { Center } from '@chakra-ui/react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import FormInput from '@/components/@common/formInput';
import FormButton from '@/components/@common/formButton';
import { useGeolocation } from '@/hooks/useGeolocation';
import { LocationType } from '@/interfaces/location';
import { callAddress } from '@/api/location/callAddress';
import { AddressType } from '@/interfaces/location';

export default function MapContainer({ address, setAddress, setFormState }: AddressType) {
  const location = useGeolocation();
  const latitude = location.lat;
  const longitude = location.lng;
  const [position, setPosition] = useState<LocationType | null>(null);

  const writeProps = [
    {
      id: 0,
      placeholder: '어디를 방문하셨나요?',
      value: address,
      readOnly: true,
    },
    {
      id: 1,
      placeholder: '상세 주소를 입력해 주세요.',
      value: '',
      readOnly: false,
    },
  ];

  useEffect(() => {
    {
      position && callAddress(position.lng, position.lat, setAddress);
    }
  }, [position]);

  return (
    <>
      {writeProps.map((props) => (
        <FormInput props={props} key={props.id} />
      ))}
      <Map
        center={position ? { lat: position.lat, lng: position.lng } : { lat: latitude, lng: longitude }}
        style={{ width: '300px', height: '300px', borderRadius: '12px', marginBottom: '12px' }}
        level={8}
        onClick={(_, e) =>
          setPosition({
            lat: e.latLng.getLat(),
            lng: e.latLng.getLng(),
          })
        }>
        {position ? <MapMarker position={position} /> : <MapMarker position={{ lat: latitude, lng: longitude }} />}
      </Map>
      <Center>
        <div onClick={() => setFormState(true)}>
          <FormButton props={'다음으로'} />
        </div>
      </Center>
    </>
  );
}
