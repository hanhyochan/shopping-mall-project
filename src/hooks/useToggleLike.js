import { useMutation } from '@tanstack/react-query';
import { toggleLikedProducts } from '../api/productApi';

const useToggleLike = () => {
    const mutation = useMutation({
        mutationFn: (id) => toggleLikedProducts(id),
        onError: (error) => {
            console.log('상품 저장 실패:', error);
            alert(`상품 저장 중 오류 발생 ${error.message}`);
        }
    });

    return mutation;
};

export default useToggleLike;