import { useState, useEffect } from 'react';
import { getProduct } from '@/utils';
export const useProduct = (id) => {
    const [loading, setLoading] = useState(true);
    const [product, setProductData] = useState();
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const data = await getProduct('products', id);
            setProductData(data);
            setLoading(false);
        };
        fetchProduct();
    }, [id]);
    return {
        loading,
        product,
    };
};
