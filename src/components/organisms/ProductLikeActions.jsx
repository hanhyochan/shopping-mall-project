import Button from "../atoms/Button";
import useDeleteLike from "../../hooks/useDeleteLike";

const ProductLikeActions = ({data}) => {
    console.log(data);
    // 좋아요 삭제
    const {mutate} = useDeleteLike();
    const handleDelete = e => {
        e.stopPropagation();
        mutate(data.id, {
            onSuccess: () => {
                alert("관심상품에서 삭제되었습니다");
            },
            onError: () => {
                alert("삭제처리에 실패했습니다. 다시 시도해주세요.");
            },
        });
    };
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <Button text="주문하기" />
            <Button text="장바구니" />
            <Button
                text="삭제하기"
                onClick={handleDelete}
            />
        </div>
    );
};

export default ProductLikeActions;
