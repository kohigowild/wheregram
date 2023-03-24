import { db } from '../@common/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const getExploreDoc = async (setState: any) => {
  const querySnapshot = await getDocs(collection(db, 'feed'));
  setState(
    querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })),
  );
};
