import { useQuery } from '@tanstack/react-query';
import { getAllReiview } from '../api/productApi';

const useAllReview = () => {

    const { data: allReviewData } = useQuery({
        queryKey: ["reviews"],
        queryFn: getAllReiview
    });

    return allReviewData;
};

export default useAllReview;