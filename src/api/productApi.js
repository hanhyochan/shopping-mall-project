import axios from "axios";

export const getAllProduct = async () => {
    try {
        const response = await axios.get("http://localhost:3000/products");
        console.log(response.data.clothes);
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
