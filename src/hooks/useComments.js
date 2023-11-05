import { useEffect, useState } from 'react';
import { collection, limit, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '@/firebase';
export const useComments = (product) => {
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const getFirebaseComments = async () => {
            setLoading(true);
            try {
                const commentsRef = collection(db, 'comments');
                if (product) {
                    const _query = query(commentsRef, where('product', '==', product), limit(3));
                    onSnapshot(_query, (snapshot) => {
                        return setComments(snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id
                        })));
                    });
                }
                else {
                    return [];
                }
            }
            catch (error) {
                return error;
            }
            setLoading(false);
        };
        getFirebaseComments();
    }, [loading, product, comments]);
    return {
        loading,
        comments,
    };
};
