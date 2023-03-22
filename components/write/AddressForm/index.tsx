import React, { useEffect } from 'react';
import FormInput from '@/components/@common/FormInput';
import { callAddress } from '@/api/location/callAddress';
import { AddressType } from '@/interfaces/location';

export default function AddressForm({ address, setAddress, position }: AddressType) {
  const writeProps = [
    {
      id: 0,
      placeholder: '지도에서 위치를 클릭해 주세요.',
      value: address,
      readOnly: true,
    },
    {
      id: 1,
      placeholder: '상세 주소를 입력하세요.',
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
    </>
  );
}
