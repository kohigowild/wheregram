import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Center } from '@chakra-ui/react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import FormInput from '@/components/@common/formInput';
import { useGeolocation } from '@/hooks/useGeolocation';
import { LocationType } from '@/interfaces/location';
import { callAddress } from '@/api/location/callAddress';

export default function MapContainer() {
  const location = useGeolocation();
  const latitude = location.lat;
  const longitude = location.lng;
  const [position, setPosition] = useState<LocationType | null>(null);
  const [address, setAddress] = useState<string>('');

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

  const Form = styled.div`
    width: 300px;
    padding: 6vh 0;
  `;

  useEffect(() => {
    {
      position && callAddress(position.lng, position.lat, setAddress);
    }
  }, [position]);

  return (
    <>
      <Center>
        <Form>
          {writeProps.map((props) => (
            <FormInput props={props} key={props.id} />
          ))}
          <Map
            center={{ lat: latitude, lng: longitude }}
            style={{ width: '300px', height: '300px', borderRadius: '12px' }}
            level={8}
            onClick={(_, e) =>
              setPosition({
                lat: e.latLng.getLat(),
                lng: e.latLng.getLng(),
              })
            }>
            {position ? <MapMarker position={position} /> : <MapMarker position={{ lat: latitude, lng: longitude }} />}
          </Map>
        </Form>
      </Center>
    </>
  );
}
