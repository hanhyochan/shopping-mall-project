import {useState, useCallback, useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {getAllReiview} from "../../api/productApi";
import {useParams} from "react-router-dom";
import ReviewList from "./ReviewList";
import {Rate} from "antd";
import ReviewModal from "./ReviewModal";

const ProductReview = () => {
    const {productId} = useParams();

    // 모든 Hook을 최상단에 배치
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {data, error, isLoading} = useQuery({
        queryKey: ["reviews", productId],
        queryFn: () => getAllReiview(),
    });

    // 불필요한 리렌더링 방지
    const handleOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleConfirmModal = useCallback(() => {
        console.log("Confirmed!");
        setIsModalOpen(false);
    }, []);

    // useMemo로 (데이터가 바뀔때만 재계산)
    const processedReviewData = useMemo(() => {
        // 로딩 중 또는 에러 상황 처리
        if (isLoading) return null;
        if (error) return null;
        if (!data || data.length === 0) return null;
        const reviewProductId = data.find(el => el.pro_id == productId);
        if (!reviewProductId || !reviewProductId.reviews || reviewProductId.reviews.length === 0) {
            return null;
        }

        // 리뷰 데이터 처리
        const averageRating = parseFloat((reviewProductId.reviews.reduce((total, review) => total + review.rating, 0) / reviewProductId.reviews.length).toFixed(1));
        const shortReview = reviewProductId.reviews[0].title;

        return {
            reviews: reviewProductId.reviews,
            averageRating,
            shortReview,
        };
    }, [data, productId, isLoading, error]);

    // 로딩 또는 에러 상황 렌더링
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;
    if (!processedReviewData) return <div>해당 상품에 대한 리뷰가 없습니다.</div>;

    return (
        <>
            <div className="grid w-full h-48 grid-cols-3 grid-rows-1 border border-gray-300 mb-14">
                <div className="flex flex-col items-center justify-center border-r border-gray-300">
                    <span className="text-base">구매고객 총 평점</span>
                    <span className="text-xl mt-2">{processedReviewData.averageRating}점</span>
                </div>
                <div className="flex flex-col items-center justify-center border-r border-gray-300">
                    <span className="text-base">별점 비율</span>
                    <Rate
                        value={processedReviewData.averageRating}
                        className="mt-2"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-base">한줄평</span>
                    <span className="text-xl mt-2">{processedReviewData.shortReview}</span>
                </div>
            </div>

            <div className="flex flex-col w-full">
                <button
                    className="mb-4 text-right cursor-pointer"
                    onClick={handleOpenModal}
                >
                    리뷰쓰기
                </button>
                {isModalOpen && (
                    <ReviewModal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onConfirm={handleConfirmModal}
                    />
                )}
                <hr className="mb-10 border border-black" />
                <ReviewList data={processedReviewData.reviews} />
            </div>
        </>
    );
};

export default ProductReview;
