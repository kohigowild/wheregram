import React, { useState } from 'react';
import styled from 'styled-components';
import AddressForm from '@/components/write/AddressForm';
import MapContainer from '@/components/write/MapContainer';
import FeedImgAddForm from '@/components/write/FeedImgAddForm';
import Rating from '@/components/write/Rating';
import FormButton from '@/components/@common/FormButton';
import { Center, Textarea } from '@chakra-ui/react';
import { LocationType } from '@/interfaces/location';

export default function WriteForm() {
  const [address, setAddress] = useState<string>('');
  const [position, setPosition] = useState<LocationType | null>(null);
  const [formState, setFormState] = useState<boolean>(false);

  const Form = styled.div`
    width: 300px;
    padding: 3vh 0;
  `;

  return (
    <Center>
      <Form>
        {!formState ? (
          <>
            <MapContainer
              address={address}
              setAddress={setAddress}
              formState={formState}
              setFormState={setFormState}
              position={position}
              setPosition={setPosition}
            />
            <AddressForm
              address={address}
              setAddress={setAddress}
              formState={formState}
              setFormState={setFormState}
              position={position}
              setPosition={setPosition}
            />
            <Center>
              <div onClick={() => setFormState(true)}>
                <FormButton props={'다음으로'} />
              </div>
            </Center>
          </>
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
