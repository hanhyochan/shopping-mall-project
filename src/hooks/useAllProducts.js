import { useQuery } from '@tanstack/react-query';
import { getAllProduct } from '../api/productApi';

const useAllProducts = () => {

    const { data: allProductsData } = useQuery({
        queryKey: ["allProducts"],
        queryFn: getAllProduct
    });

    return allProductsData;
};

export default useAllProducts;