import imageCompression from 'browser-image-compression';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../@common/firebase';

export const uploadImage = async (
  e: React.ChangeEvent<EventTarget & HTMLInputElement>,
  setImageURL: React.Dispatch<React.SetStateAction<string>>,
) => {
  e.preventDefault();
  const file = e.target.files;
  if (!file) return null;

  const options = {
    maxSizeMB: 2,
    maxWidthOrHeight: 600,
  };

  const compressedFile = await imageCompression(file[0], options);
  const resizingFile = new File([compressedFile], file[0].name, { type: file[0].type });

  const storageRef = ref(storage, `files/${resizingFile.name}`);
  const uploadTask = uploadBytes(storageRef, resizingFile);

  uploadTask.then((snapshot) => {
    e.target.value = '';
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      console.log('File availabe at', downloadURL);
      setImageURL(downloadURL);
    });
  });
};
