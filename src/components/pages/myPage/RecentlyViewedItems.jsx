import ProductList from "../../organisms/ProductList";
import useGetRecentlyViewed from "../../../hooks/useGetRecentlyViewed";
import useAllReview from "../../../hooks/useAllReview";
import {useState} from "react";
import {Pagination} from "antd";
const RecentlyViewedItems = () => {
    const {recentlyViewedProducts, isRecentlyViewedLoading, recentlyViewedError} = useGetRecentlyViewed();
    const {allReviewData, isReviewsLoading, reviewsError} = useAllReview();
    // 페이지네이션 상태 관리
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);

    if (isRecentlyViewedLoading || isReviewsLoading) return <div>로딩중입니다</div>;
    if (recentlyViewedError || reviewsError) return <div>Error fetching data</div>;

    // 페이지에 맞게 데이터 슬라이싱
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = recentlyViewedProducts.slice(startIndex, startIndex + pageSize);

    return paginatedData ? (
        <>
            <ProductList
                title="최근본 상품"
                className="pb-5 text-lg font-bold"
                data={paginatedData}
                reviewdata={allReviewData}
                hideLikeButton={true}
            />
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={recentlyViewedProducts.length}
                className="flex justify-center pt-3"
                onChange={(page, size) => {
                    setCurrentPage(page);
                    setPageSize(size);
                }}
            />
        </>
    ) : (
        <p>최근 본 상품이 없습니다</p>
    );
};

export default RecentlyViewedItems;
