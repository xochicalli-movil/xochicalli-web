import { useRef, useState } from "react";
import { useProducts } from "./useProducts";
export const useFilter = () => {
    const [query, setQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const searchInput = useRef(null);
    const { products } = useProducts();
    const filteredProducts = products.filter(({ title, category }) => {
        const matchesQuery = title?.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = selectedCategories.length === 0 ||
            selectedCategories.includes(category);
        return matchesQuery && matchesCategory;
    });
    const handleSortChange = ({ target }) => setSortOption(target.value);
    let sortedProducts = filteredProducts;
    switch (sortOption) {
        case 'asc':
            sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'desc':
            sortedProducts = filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'title':
            sortedProducts = filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'category':
            sortedProducts = filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
            break;
        default:
            break;
    }
    const handleCategoryChange = (categories) => setSelectedCategories(categories);
    const onSearchInputChange = ({ target }) => {
        const { value } = target;
        setQuery(value);
    };
    const onClearInput = () => {
        if (searchInput.current) {
            searchInput.current.value = '';
            setQuery('');
        }
    };
    return {
        searchInput,
        sortedProducts,
        handleSortChange,
        handleCategoryChange,
        onClearInput,
        onSearchInputChange,
    };
};
