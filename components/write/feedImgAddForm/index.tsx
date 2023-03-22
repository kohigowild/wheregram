import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Box, Center, Icon } from '@chakra-ui/react';
import { HiOutlinePlus } from 'react-icons/hi';
import defaultImage from '/public/default-img.png';

export default function FeedImgAddForm() {
  const [imagePreview, setImagePreview] = useState<any>(defaultImage);

  const addPreviewImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!;
    if (files.length === 0) {
      return;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      return new Promise(() => {
        reader.onload = () => {
          setImagePreview(reader.result);
        };
      });
    }
  };

  const FormContainer = styled.form`
    position: relative;
  `;

  const Badge = styled.div`
    width: 28px;
    height: 28px;
    position: absolute;
    top: -12px;
    right: -12px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 9999;
  `;

  const AddInput = styled.input`
    visibility: hidden;
  `;

  return (
    <>
      <FormContainer method="post">
        <label htmlFor="add-profile">
          <Badge>
            <Icon as={HiOutlinePlus} color="white" />
          </Badge>
          <Center>
            <Box w={'300px'} h={'300px'} position="relative">
              <Image
                priority
                src={imagePreview}
                alt="profileImage"
                fill
                style={{ borderRadius: '8px', objectFit: 'cover', cursor: 'pointer' }}
              />
            </Box>
          </Center>
        </label>
        <AddInput
          type="file"
          id="add-profile"
          name="add-profile"
          accept="image/*"
          onChange={(e) => addPreviewImage(e)}
        />
      </FormContainer>
    </>
  );
}
