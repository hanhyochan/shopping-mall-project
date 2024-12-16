import ProductList from "../../organisms/ProductList";
import useGetRecentlyViewed from "../../../hooks/useGetRecentlyViewed";
import useAllReview from "../../../hooks/useAllReview";
const RecentlyViewedItems = () => {
    const {recentlyViewedProducts, isRecentlyViewedLoading, recentlyViewedError} = useGetRecentlyViewed();
    const {allReviewData, isReviewsLoading, reviewsError} = useAllReview();

    if (isRecentlyViewedLoading || isReviewsLoading) return <div>로딩중입니다</div>;
    if (recentlyViewedError || reviewsError) return <div>Error fetching data</div>;

    return (
        <ProductList
            title="최근본 상품"
            className="pb-5 text-lg font-bold"
            data={recentlyViewedProducts}
            reviewdata={allReviewData}
            hideLikeButton={true}
        />
    );
};

export default RecentlyViewedItems;
