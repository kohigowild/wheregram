import { db } from '../@common/firebase';
import { query, collection, addDoc, doc, updateDoc, getDocs, orderBy, deleteDoc } from 'firebase/firestore';

export const createComment = async (docId: string, uid: string, nickname: string | null, comment: string) => {
  try {
    const commentRef = await addDoc(collection(db, `feed/${docId}/comment`), {
      uid: uid,
      nickname: nickname,
      comment: comment,
      createAt: new Date().toLocaleString(),
    });
    const commentIdRef = doc(db, `feed/${docId}/comment`, commentRef.id);
    await updateDoc(commentIdRef, {
      commentId: commentRef.id,
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getComment = async (docId: string, setState: any) => {
  const q = query(collection(db, `feed/${docId}/comment`), orderBy('createAt', 'asc'));
  const querySnapshot = await getDocs(q);
  setState(
    querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })),
  );
};

export const deleteComment = async (docId: string, commentId: string) => {
  const feedComment = doc(db, `feed/${docId}/comment`, commentId);
  await deleteDoc(feedComment);
};
