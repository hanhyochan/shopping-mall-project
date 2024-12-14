import { useState, useEffect } from "react";
import Button from "../atoms/Button";
import useToggleLike from "../../hooks/useToggleLike"
import useLikedProducts from "../../hooks/useLikedProducts";

const ProductActions = (productId) => {
    const selectedProductId = Number(productId.selectedProductId)
    const { mutate } = useToggleLike()
    const likedProductIdData = useLikedProducts();
    const [like, setLike] = useState(false);

    const handleClick = () => {
        mutate(selectedProductId, {
            onSuccess: () => {
                setLike(prev => !prev)
            }
        });
    };

    useEffect(() => {
        if (likedProductIdData) {
            const isLiked = likedProductIdData.some(item => item.id === selectedProductId)
            setLike(isLiked)
        }
    }, [likedProductIdData])

    return (
        <div className="grid grid-cols-3 grid-rows-1 gap-4">
            <Button
                className={`flex items-center justify-center w-full h-12 text-base rounded-md ${like ? "bg-red-600 text-white" : "border border-gray-600"}`}
                antDesign={false}
                text="관심상품"
                onClick={handleClick}
            />
            <Button
                className="flex items-center justify-center w-full h-12 text-base border border-gray-600 rounded-md"
                antDesign={false}
                text="장바구니"
            />
            <Button
                className="flex items-center justify-center w-full h-12 text-base text-white bg-gray-600 rounded-md"
                antDesign={false}
                text="구매하기"
            />
        </div>
    );
};

export default ProductActions;
