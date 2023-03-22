import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MapContainer from '@/components/write/mapContainer';
import FeedImgAddForm from '@/components/write/feedImgAddForm';
import Rating from '@/components/write/rating';
import FormButton from '@/components/@common/formButton';
import { useGeolocation } from '@/hooks/useGeolocation';
import { callAddress } from '@/api/location/callAddress';
import { Center, Textarea } from '@chakra-ui/react';

export default function WriteForm() {
  const location = useGeolocation();
  const latitude = location.lat;
  const longitude = location.lng;
  const [address, setAddress] = useState<string>('');
  const [formState, setFormState] = useState<boolean>(false);

  useEffect(() => {
    callAddress(longitude, latitude, setAddress);
  }, []);

  const Form = styled.div`
    width: 300px;
    padding: 3vh 0;
  `;

  return (
    <Center>
      <Form>
        {!formState ? (
          <MapContainer address={address} setAddress={setAddress} formState={formState} setFormState={setFormState} />
        ) : (
          <>
            <FeedImgAddForm />
            <Rating />
            <Textarea
              placeholder="어떤 체험을 하셨나요?"
              borderColor="gray.300"
              focusBorderColor="green.400"
              w="300px"
              mb="20px"
            />
            <FormButton props={'등록하기'} />
          </>
        )}
      </Form>
    </Center>
  );
}
