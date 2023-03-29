import { db } from '../@common/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getUserInfo = async (uid: string, setState: any) => {
  const q = query(collection(db, 'user'), where('uid', '==', uid));
  const querySnapshot = await getDocs(q);
  setState(
    querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })),
  );
};
