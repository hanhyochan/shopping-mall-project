import axios from "axios";

export const getAllProduct = async () => {
    try {
        const response = await axios.get("http://localhost:3000/products");
        return response.data;
    } catch (error) {
        console.error("상품데이터 패치에 실패했습니다.", error);
    }
};

export const getSelectedProduct = async productId => {
    try {
        const response = await axios.get(`http://localhost:3000/products/${productId}?`);
        return response.data;
    } catch (error) {
        console.error("상품 상세 정보 패치에 실패했습니다.", error);
    }
};

//리뷰 갖고오기
export const getAllReiview = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/reviews`);
        return response.data;
    } catch (error) {
        console.error("상품 리뷰 패치에 실패했습니다.", error);
    }
};
