import {useQuery} from "@tanstack/react-query";
import {getAllReiview} from "../../api/productApi";
import {useParams} from "react-router-dom";
import ReviewList from "./ReviewList";

const ProductReview = () => {
    const {productId} = useParams();
    const {data, error, isLoading} = useQuery({
        queryKey: ["reviews", productId],
        queryFn: () => getAllReiview(), // 비동기 실행
    });

    // 로딩 중
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // 에러
    if (error) {
        return <div>Error fetching data</div>;
    }

    const reviewProductId = data.map(el => el.pro_id).find(el => productId == el);
    const productReviewData = data.find(el => el.pro_id == reviewProductId);

    // 상품 리뷰 없을때 에러처리
    if (!productReviewData) {
        return <div>해당 상품에 대한 리뷰가 없습니다.</div>;
    }

    return (
        <>
            <div className="grid w-full h-48 grid-cols-3 grid-rows-1 border border-gray-300 mb-14">
                <div className="flex flex-col items-center justify-center border-r border-gray-300">
                    <span className="text-base">구매고객 총 평점</span>
                    <h1 className="text-2xl">5점</h1>
                </div>
                <div className="flex flex-col items-center justify-center border-r border-gray-300">
                    <span className="text-base">별점 비율</span>
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <span className="text-base">한줄평</span>
                </div>
            </div>

            <div className="flex flex-col w-full">
                <button className="mb-4 text-right cursor-pointer">리뷰쓰기</button>
                <hr className="mb-10 border border-black" />
                {productReviewData.reviews && productReviewData.reviews.length > 0 ? <ReviewList data={productReviewData.reviews} /> : <p>리뷰가 없습니다.</p>}
            </div>
        </>
    );
};

export default ProductReview;
