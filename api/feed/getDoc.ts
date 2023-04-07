import { db } from '../@common/firebase';
import { collection, query, where, getDocs, orderBy, startAfter, limit } from 'firebase/firestore';

export const getMainDoc = async () => {
  const fristQ = query(collection(db, 'feed'), orderBy('like', 'desc'), limit(4));
  const querySnapshot = await getDocs(fristQ);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return data;
};

export const getExploreDoc = async (setKey: any) => {
  const fristQ = query(collection(db, 'feed'), orderBy('createAt', 'desc'), limit(4));
  const querySnapshot = await getDocs(fristQ);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  setKey(querySnapshot.docs[querySnapshot.docs.length - 1]);
  return data;
};

export const getMoreExploreDoc = async (key: any, setKey: any) => {
  const moreQ = query(collection(db, 'feed'), orderBy('createAt', 'desc'), startAfter(key), limit(4));
  const querySnapshot = await getDocs(moreQ);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  setKey(querySnapshot.docs[querySnapshot.docs.length - 1]);
  return data;
};

export const userFeedList = async (uid: string, setState: any) => {
  const q = query(collection(db, 'feed'), orderBy('createAt', 'desc'), where('uid', '==', uid));
  const querySnapshot = await getDocs(q);
  setState(
    querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })),
  );
};

export const searchFeedList = async (keyword: string, setState: any) => {
  const q = query(collection(db, 'feed'), where('keyword', 'array-contains', keyword));
  const querySnapshot = await getDocs(q);
  setState(
    querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })),
  );
};

export const getFeedDetail = async (docId: string, setState: any) => {
  const q = query(collection(db, 'feed'), where('docId', '==', docId));
  const querySnapshot = await getDocs(q);
  setState(
    querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })),
  );
};
