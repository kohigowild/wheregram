import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RootState } from '@/store';
import { useAppSelector, useAppDispatch } from '@/store';
import { FormContainer, Badge, AddInput } from '@/styles/auth/signUp';
import { Box, Center, Icon } from '@chakra-ui/react';
import { HiOutlinePlus } from 'react-icons/hi';
import defaultImage from '/public/profile-user.png';
import { uploadImage } from '@/api/feed/uploadImage';
import { photoUpload } from '@/interfaces/auth';

export default function ImgAddForm({ imageURL, setImageURL }: photoUpload) {
  const defaultPhoto = useAppSelector((state: RootState) => state.user.photoURL);
  const [imagePreview, setImagePreview] = useState<any>(defaultImage);

  useEffect(() => {
    defaultPhoto !== '' && setImagePreview(defaultPhoto);
  }, []);

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

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    addPreviewImage(e);
    uploadImage(e, setImageURL);
    console.log(imageURL);
  };

  return (
    <>
      <FormContainer method="post">
        <label htmlFor="add-profile">
          <Badge>
            <Icon as={HiOutlinePlus} color="white" />
          </Badge>
          <Center>
            <Box w={'100px'} h={'100px'} position="relative">
              <Image
                priority
                src={imagePreview}
                alt="profileImage"
                fill
                style={{ borderRadius: '50%', objectFit: 'cover', cursor: 'pointer' }}
              />
            </Box>
          </Center>
        </label>
        <AddInput type="file" id="add-profile" name="add-profile" accept="image/*" onChange={handleChangeImage} />
      </FormContainer>
    </>
  );
}
