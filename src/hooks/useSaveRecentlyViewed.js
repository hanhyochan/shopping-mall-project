import {useMutation, useQueryClient} from "@tanstack/react-query";
import {saveRecentlyViewed} from "../api/productApi";

const useSaveRecentlyViewed = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: product => saveRecentlyViewed(product),
        onSuccess: () => {
            console.log("상품 저장 성공!");
            queryClient.invalidateQueries(["recentlyViewed"]); // 캐시 무효화
        },
        onError: error => {
            console.log("상품 저장 실패:", error);
            alert(`상품 저장 중 오류 발생: ${error.message}`);
        },
    });

    return mutation;
};

export default useSaveRecentlyViewed;
