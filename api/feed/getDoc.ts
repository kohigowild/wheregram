import { db } from '../@common/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getExploreDoc = async (setState: any) => {
  const querySnapshot = await getDocs(collection(db, 'feed'));
  setState(
    querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      docId: doc.id,
    })),
  );
};

export const userFeedList = async (uid: string, setState: any) => {
  const q = query(collection(db, 'feed'), where('uid', '==', uid));
  const querySnapshot = await getDocs(q);
  setState(
    querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      docId: doc.id,
    })),
  );
};

export const searchFeedList = async (keyword: string, setState: any) => {
  const q = query(collection(db, 'feed'), where('address', '>=', keyword));
  const querySnapshot = await getDocs(q);
  setState(
    querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      docId: doc.id,
    })),
  );
};

export const getFeedDetail = async (docId: string, setState: any) => {
  const q = query(collection(db, 'feed'), where('docId', '==', docId));
  const querySnapshot = await getDocs(q);
  setState(
    querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      docId: doc.id,
    })),
  );
};
