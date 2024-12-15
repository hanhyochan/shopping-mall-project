import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getAllProduct = async () => {
    try {
        const response = await apiClient.get("/products");
        return response.data;
    } catch (error) {
        console.error("상품데이터 패치에 실패했습니다.", error);
        throw error;
    }
};

export const getSelectedProduct = async productId => {
    try {
        const response = await apiClient.get(`/products/${productId}?`);
        return response.data;
    } catch (error) {
        console.error("상품 상세 정보 패치에 실패했습니다.", error);
    }
};

export const toggleLikedProducts = async id => {
    try {
        const likedProductsResponse = await apiClient.get("/likedProducts");
        const likedProducts = likedProductsResponse.data;
        const isProductLiked = likedProducts.some(product => product.id === id);

        if (isProductLiked) {
            const response = await apiClient.delete(`/likedProducts/${id}`);
            return response.data;
        } else {
            const response = await apiClient.post("/likedProducts", {id});
            return response.data;
        }
    } catch (error) {
        console.error("Error in toggling liked product:", error);
        throw new Error("상품을 좋아요 처리하는데 오류가 발생했습니다.");
    }
};

export const getLikedProductsId = async () => {
    try {
        const response = await apiClient.get("/likedProducts");
        return response.data;
    } catch (error) {
        console.log(4);
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

export const deleteReview = async reviewId => {
    try {
        // 먼저 리뷰 목록을 가져와서 해당 리뷰가 속한 제품의 리뷰 데이터를 찾습니다.
        const reviewsResponse = await apiClient.get("/reviews");
        const reviewData = reviewsResponse.data;

        // 해당 리뷰가 속한 제품의 리뷰 객체 찾기
        const productReview = reviewData.find(item => item.reviews.some(review => review.id === reviewId));

        if (productReview) {
            // 해당 제품의 리뷰 배열에서 특정 리뷰 제거
            productReview.reviews = productReview.reviews.filter(review => review.id !== reviewId);

            // 업데이트된 리뷰 객체로 PUT 요청
            await apiClient.put(`/reviews/${productReview.id}`, productReview);

            return {success: true, message: "리뷰가 성공적으로 삭제되었습니다."};
        } else {
            throw new Error("해당 리뷰를 찾을 수 없습니다.");
        }
    } catch (error) {
        console.error("리뷰 삭제 중 오류:", error);
        throw error;
    }
};
