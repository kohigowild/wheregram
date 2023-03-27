import { db } from '../@common/firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';

export const getExploreDoc = async (setState: any) => {
  const q = query(collection(db, 'feed'), orderBy('createAt', 'desc'));
  const querySnapshot = await getDocs(q);
  setState(
    querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })),
  );
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
  const q = query(collection(db, 'feed'), where('address', '>=', keyword));
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
