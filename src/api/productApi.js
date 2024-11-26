import axios from "axios";

export const getAllProduct = async () => {
    try {
        const response = await axios.get("https://dummyjson.com/products");
        return response.data.products;
    } catch (error) {
        console.error("상품데이터 패치에 실패했습니다.", error);
    }
};
export const getSelectedProduct = async productId => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}?`);
        return response.data;
    } catch (error) {
        console.error("상품 상세 정보 패치에 실패했습니다.", error);
    }
};
