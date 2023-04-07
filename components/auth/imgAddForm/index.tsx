import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import imageCompression from 'browser-image-compression';
import { RootState } from '@/store';
import { useAppSelector } from '@/store';
import { FormContainer, Badge, AddInput } from '@/styles/auth/signUp';
import { Box, Center, Icon } from '@chakra-ui/react';
import { HiOutlinePlus } from 'react-icons/hi';
import defaultImage from '/public/profile-user.png';
import { uploadImage } from '@/api/feed/uploadImage';
import { photoUpload } from '@/interfaces/auth';

export default function ImgAddForm({ setImageURL }: photoUpload) {
  const defaultPhoto = useAppSelector((state: RootState) => state.user.photoURL);
  const [imagePreview, setImagePreview] = useState<any>(defaultImage);

  useEffect(() => {
    defaultPhoto !== '' && setImagePreview(defaultPhoto);
  }, []);

  const addPreviewImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!;
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 600,
    };

    if (files.length === 0) {
      return;
    } else {
      const compressedFile = await imageCompression(files[0], options);
      const resizingFile = new File([compressedFile], files[0].name, { type: files[0].type });
      const reader = new FileReader();
      reader.readAsDataURL(resizingFile);
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
                sizes="100px"
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
