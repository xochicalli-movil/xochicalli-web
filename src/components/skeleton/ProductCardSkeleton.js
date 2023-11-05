import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardBody, Divider, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';
const ProductCardSkeleton = () => (_jsx(Card, { w: 'sm', borderRadius: 'xl', children: _jsxs(CardBody, { children: [_jsx(Skeleton, { borderRadius: 'lg', height: '256' }), _jsxs(Stack, { spacing: '3', my: '3', children: [_jsx(Skeleton, { noOfLines: 1, size: ['lg', 'md', 'lg'] }), _jsx(SkeletonText, {}), _jsx(Divider, {}), _jsx(Skeleton, { width: 'max-content' }), _jsx(SkeletonText, { noOfLines: 2 })] })] }) }));
export default ProductCardSkeleton;
