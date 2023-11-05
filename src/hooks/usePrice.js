import { useMemo } from 'react';
export const usePrice = (price) => {
    const newPrice = useMemo(() => {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency', currency: 'MXN'
        }).format(price);
    }, [price]).replace('.00', '');
    return { newPrice };
};
