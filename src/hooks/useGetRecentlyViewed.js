import {useQuery} from "@tanstack/react-query";
import {getRecentlyViewed} from "../api/productApi";

const useGetRecentlyViewed = () => {
    const {
        data: recentlyViewedProducts,
        isLoading: isRecentlyViewedLoading,
        error: recentlyViewedError,
    } = useQuery({
        queryKey: ["recentlyViewed"],
        queryFn: getRecentlyViewed,
    });

    return {recentlyViewedProducts, isRecentlyViewedLoading, recentlyViewedError};
};

export default useGetRecentlyViewed;
