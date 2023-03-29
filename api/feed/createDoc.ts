import { db } from '../@common/firebase';
import { collection, addDoc, doc, updateDoc, setDoc } from 'firebase/firestore';
import Router from 'next/router';

export const createDoc = async (
  uid: string,
  profileURL: string | null,
  nickname: string | null,
  address: string,
  addressDetail: string,
  feedImageURL: string,
  rating: number,
  desc: string,
) => {
  try {
    const docRef = await addDoc(collection(db, 'feed'), {
      uid: uid,
      profileURL: profileURL,
      nickname: nickname,
      address: address,
      addressDetail: addressDetail,
      feedImageURL: feedImageURL,
      rating: rating,
      desc: desc,
      like: 0,
      createAt: new Date().toLocaleString(),
    });
    const docIdRef = doc(db, 'feed', docRef.id);
    await updateDoc(docIdRef, {
      docId: docRef.id,
    });
    await setDoc(doc(db, `user/${uid}/feed`, docRef.id), {
      docId: docRef.id,
    });
    Router.push('/profile');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
