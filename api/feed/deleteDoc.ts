import { db } from '../@common/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export const deleteFeed = async (uid: string, docId: string) => {
  const userFeed = doc(db, 'feed', docId);
  await deleteDoc(userFeed);
  const userDoc = doc(db, `user/${uid}/feed`, docId);
  await deleteDoc(userDoc);
};
