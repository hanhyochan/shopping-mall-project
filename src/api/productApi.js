import axios from "axios";

export const getSelectedProduct = async (productId) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}?`)
        return response.data
    } catch (error) {
        console.error('상품 상세 정보 패치에 실패했습니다.', error)
    }
}