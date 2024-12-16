import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../atoms/Button";
import ProductColors from "./ProductColors";
import {HeartOutlined, HeartFilled} from "@ant-design/icons";
import useToggleLike from "../../hooks/useToggleLike";
import useLikedProducts from "../../hooks/useLikedProducts";
import useSaveRecentlyViwed from "../../hooks/useSaveRecentlyViewed";
const Product = ({data, reviewCount, hideLikeButton = false}) => {
    const [like, setLike] = useState(false);
    const navigate = useNavigate();
    const {mutate} = useToggleLike();
    const {mutate: saveProduct} = useSaveRecentlyViwed();
    const {likedProductIdData, isLikedProductsLoading, likedProductsError} = useLikedProducts();

    useEffect(() => {
        if (likedProductIdData) {
            const isLiked = likedProductIdData.some(item => item.id === data.id);
            setLike(isLiked);
        }
    }, [likedProductIdData]);

    if (isLikedProductsLoading) return <div>로딩중입니다</div>;

    if (likedProductsError) return <div>Error fetching data</div>;

    const handleClickProduct = () => {
        navigate(`/details/${data.id}`);
        // 최근봤던 상품 저장
        const productData = {
            id: data.id,
            name: data.name,
            price: data.price,
            review: reviewCount,
            thumbnail: data.thumbnail,
            viewedAt: new Date().toISOString(),
        };
        saveProduct(productData);
    };

    const handleClick = e => {
        e.stopPropagation();
        mutate(data.id, {
            onSuccess: () => {
                //like true이면
                if (!like) {
                    alert("관심상품에 추가되었습니다");
                } else {
                    alert("관심상품에서 삭제되었습니다");
                }
                setLike(prev => !prev);
            },
        });
    };

    return (
        <div
            onClick={() => handleClickProduct()}
            className="relative"
        >
            {!hideLikeButton && (
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
            )}

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
                <p className="text-base">리뷰 {reviewCount}개</p>
            </div>
        </div>
    );
};

export default Product;
