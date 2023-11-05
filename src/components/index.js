import { lazy } from "react";
export * from './ProviderButtons';
export * from './Navbar';
export const ProductCard = lazy(() => import('./products/ProductCard'));
