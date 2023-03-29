import { db } from '../@common/firebase';
import { setDoc, doc, deleteDoc, updateDoc, query, collection, getDocs } from 'firebase/firestore';

export const likeFeed = async (uid: string, docId: string, like: number) => {
  await setDoc(doc(db, `user/${uid}/like`, docId), {
    docId: docId,
  });
  const docIdRef = doc(db, 'feed', docId);
  await updateDoc(docIdRef, {
    like: like,
  });
};

export const unLikeFeed = async (uid: string, docId: string, like: number) => {
  await deleteDoc(doc(db, `user/${uid}/like`, docId));
  const docIdRef = doc(db, 'feed', docId);
  await updateDoc(docIdRef, {
    like: like,
  });
};

export const getLikeFeed = async (uid: string) => {
  const q = query(collection(db, `user/${uid}/like`));
  const querySnapshot = await getDocs(q);
  return await querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
};
