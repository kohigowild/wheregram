import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../@common/firebase';

export const uploadImage = (
  e: React.ChangeEvent<EventTarget & HTMLInputElement>,
  setImageURL: React.Dispatch<React.SetStateAction<string>>,
) => {
  e.preventDefault();
  const file = e.target.files;
  if (!file) return null;

  const storageRef = ref(storage, `files/${file[0].name}`);
  const uploadTask = uploadBytes(storageRef, file[0]);

  uploadTask.then((snapshot) => {
    e.target.value = '';
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      console.log('File availabe at', downloadURL);
      setImageURL(downloadURL);
    });
  });
};
