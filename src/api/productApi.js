import axios from "axios";
const BASE_URL = 'http://localhost:3000'

const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getAllProduct = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("상품데이터 패치에 실패했습니다.", error);
    }
};

export const getSelectedProduct = async (productId) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${productId}?`);
        return response.data;
    } catch (error) {
        console.error("상품 상세 정보 패치에 실패했습니다.", error);
    }
};

export const getAllReiview = async () => {
    try {
        const response = await apiClient.get("/reviews");
        return response.data;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error;
    }
};

export const postReview = async (productId, newReview) => {
    try {
        // 해당 상품의 리뷰 데이터 찾기
        const reviewsResponse = await apiClient.get("/reviews");
        const reviewData = reviewsResponse.data;

        const productReviewIndex = reviewData.findIndex(item => item.pro_id === Number(productId));

        // 기존 리뷰가 있을때
        if (productReviewIndex !== -1) {
            // 새 리뷰 객체 생성
            const reviewToAdd = {
                id: `user${Date.now()}`,
                rating: newReview.rating,
                title: newReview.title,
                content: newReview.content,
                like: 0,
            };

            // 해당 상품의 리뷰 배열에 새 리뷰 추가
            reviewData[productReviewIndex].reviews.push(reviewToAdd);

            // 해당 리뷰 객체 업데이트
            await apiClient.put(`/reviews/${reviewData[productReviewIndex].id}`, reviewData[productReviewIndex]);

            return reviewToAdd;
        } else {
            // 기존 리뷰가 없을때
            const newProductReview = {
                pro_id: Number(productId),
                reviews: [
                    {
                        id: `user${Date.now()}`,
                        rating: newReview.rating,
                        title: newReview.title,
                        content: newReview.content,
                        like: 0,
                    },
                ],
            };
            // 새 리뷰 데이터 추가
            const response = await apiClient.post("/reviews", newProductReview);
            return response.data.reviews[0];
        }
    } catch (error) {
        console.error("Error adding review:", error);
        throw error;
    }
};
