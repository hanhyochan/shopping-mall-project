import { useQuery } from '@tanstack/react-query';
import { getAllReiview } from '../api/productApi';

const useAllReview = () => {

    const { data: allReviewData, isLoading: isReviewsLoading, error: reviewsError } = useQuery({
        queryKey: ["reviews"],
        queryFn: getAllReiview
    });

    return { allReviewData, isReviewsLoading, reviewsError };
};

export default useAllReview;