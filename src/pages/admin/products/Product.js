import { jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
const Product = () => {
    const { id } = useParams();
    return (_jsxs("div", { children: ["Admin Product: ", id] }));
};
export default Product;
