import { useQuery } from '@tanstack/react-query';
import { getLikedProductsId } from '../api/productApi';

const useLikedProducts = () => {

    const { data: likedProductIdData } = useQuery({
        queryKey: ["likedProductId"],
        queryFn: getLikedProductsId
    });

    return likedProductIdData;
};

export default useLikedProducts;