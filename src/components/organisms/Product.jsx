import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import ProductColors from "./ProductColors";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useQuery, useMutation } from '@tanstack/react-query';
import { toggleLikedProducts, getLikedProductsId } from "../../api/productApi";

const Product = ({ data, reviewCount }) => {
    const [like, setLike] = useState(false);
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: (id) => toggleLikedProducts(id),
        onSuccess: () => {
            setLike(prev => !prev);
        },
        onError: (error) => {
            console.log('상품 저장 실패:', error);
            alert(`상품 저장 중 오류 발생 ${error.message}`);
        }
    });

    const handleClickProduct = () => {
        navigate(`/details/${data.id}`);
    };

    const handleClick = e => {
        e.stopPropagation();
        mutation.mutate(data.id);
    };

    const { data: likedProductIdData } = useQuery({
        queryKey: ["likedProductId"],
        queryFn: getLikedProductsId
    });

    useEffect(() => {
        if (likedProductIdData) {
            const isLiked = likedProductIdData.some(item => item.id === data.id)
            setLike(isLiked)
        }
    }, [likedProductIdData])

    return (
        <div
            onClick={() => handleClickProduct()}
            className="relative"
        >
            <Button
                className="absolute right-1 top-1 text-[25px] text-red-500 border-0 bg-transparent p-0"
                style={{
                    background: "transparent",
                    border: "none",
                    color: "#ef4444",
                }}
                onClick={e => {
                    handleClick(e);
                }}
                icon={like ? <HeartFilled /> : <HeartOutlined />}
            />

            <div className="w-full overflow-hidden">
                <img
                    src={data.thumbnail}
                    alt={data.name}
                    className="object-contain w-full h-full"
                />
            </div>
            <div className="pt-3 pb-5">
                <div className="flex justify-between">
                    <p className="max-w-[calc(100%-80px)] text-sm sm:text-base md:text-lg">{data.name}</p>
                    <ProductColors
                        data={data.option_colors}
                        isButton={false}
                    />
                </div>
                <p className="text-base">{data.price.toLocaleString("ko-KR")}원</p>
                <p>리뷰 {reviewCount}개</p>
            </div>
        </div>
    );
};

export default Product;
