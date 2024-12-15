import { useQuery } from '@tanstack/react-query';
import { getAllProduct } from '../api/productApi';

const useAllProducts = () => {

    const { data: allProductsData, isLoading: isProductsLoading, error: productsError } = useQuery({
        queryKey: ["allProducts"],
        queryFn: getAllProduct
    });

    return {allProductsData, isProductsLoading, productsError};
};

export default useAllProducts;