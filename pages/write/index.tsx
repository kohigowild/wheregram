import React, { useState, useEffect } from 'react';
import { RootState } from '@/store';
import { useAppSelector } from '@/store';
import { Center, Textarea, Box } from '@chakra-ui/react';
import MapContainer from '@/components/write/mapContainer';
import WriteInput from '@/components/write/writeInput';
import FeedImgAddForm from '@/components/write/feedImgAddForm';
import Rating from '@/components/write/rating';
import FormButton from '@/components/@common/formButton';
import { callAddress } from '@/api/location/callAddress';
import { createDoc } from '@/api/feed/createDoc';
import { LocationType } from '@/interfaces/location';

export default function Write() {
  const uid = useAppSelector((state: RootState) => state.user.uid);
  const nickname = useAppSelector((state: RootState) => state.user.nickname);
  const photoURL = useAppSelector((state: RootState) => state.user.photoURL);
  const [formState, setFormState] = useState<boolean>(false);
  const [position, setPosition] = useState<LocationType | null>(null);
  const [address, setAddress] = useState<string>('');
  const [addressDetail, setAddressDetail] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [desc, setDesc] = useState<string>('');

  useEffect(() => {
    {
      position && callAddress(position.lng, position.lat, setAddress);
    }
  }, [position]);

  const handleFormState = () => {
    setFormState(true);
  };

  const handleChangeAddress = (str: string) => {
    setAddress(str);
  };

  const handleChangeAddressDetail = (str: string) => {
    setAddressDetail(str);
  };

  const writeProps = [
    {
      id: 0,
      placeholder: '지도에서 위치를 클릭해 주세요.',
      type: 'text',
      value: address,
      setValue: handleChangeAddress,
    },
    {
      id: 1,
      placeholder: '상세 주소를 입력하세요.',
      type: 'text',
      value: addressDetail,
      setValue: handleChangeAddressDetail,
    },
  ];

  const createFeed = () => {
    createDoc(uid, photoURL, nickname, address, addressDetail, imageURL, rating, desc);
  };

  return (
    <Center>
      <Box w="300px" padding="3vh 0">
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
            {writeProps.map((item) => (
              <WriteInput item={item} key={item.id} />
            ))}
            <Center>
              <FormButton props={'다음으로'} event={handleFormState} disabled={false} />
            </Center>
          </>
        ) : (
          <>
            <FeedImgAddForm imageURL={imageURL} setImageURL={setImageURL} />
            <Rating rating={rating} setRating={setRating} />
            <Textarea
              placeholder="어떤 체험을 하셨나요?"
              borderColor="gray.300"
              focusBorderColor="green.400"
              w="300px"
              onChange={(e) => setDesc(e.target.value)}
            />
            <FormButton props={'등록하기'} event={createFeed} disabled={false} />
          </>
        )}
      </Box>
    </Center>
  );
}
