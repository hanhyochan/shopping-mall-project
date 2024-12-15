import { useQuery } from '@tanstack/react-query';
import { getLikedProductsId } from '../api/productApi';

const useLikedProducts = () => {

    const { data: likedProductIdData, isLoading: isLikedProductsLoading, error: likedProductsError } = useQuery({
        queryKey: ["likedProductId"],
        queryFn: getLikedProductsId
    });

    return { likedProductIdData, isLikedProductsLoading, likedProductsError };
};

export default useLikedProducts;