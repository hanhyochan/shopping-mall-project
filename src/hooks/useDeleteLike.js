import {useMutation, useQueryClient} from "@tanstack/react-query";
import {DeleteLikedProducts} from "../api/productApi";

const useDeleteLike = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: id => DeleteLikedProducts(id),
        // 삭제요청전 ui 즉시 반영
        onMutate: async id => {
            // 기존 쿼리 취소
            await queryClient.cancelQueries(["likedProducts"]);
            // 이전 데이터 저장
            const previousData = queryClient.getQueryData(["likedProducts"]);
            // UI에 반영
            queryClient.setQueryData(["likedProducts"], oldData => oldData?.filter(product => product.id !== id));
            return {previousData};
        },
        onError: error => {
            console.log("상품 삭제 실패:", error);
            alert(`상품 삭제 중 오류 발생 ${error.message}`);
        },
        onSettled: () => {
            // 요청 후 데이터 동기화
            queryClient.invalidateQueries(["likedProducts"]);
        },
    });

    return mutation;
};

export default useDeleteLike;
