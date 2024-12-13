import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useMutation } from '@tanstack/react-query';
import { toggleLikedProducts } from "../../api/productApi";

const Product = ({ data, reviewCount }) => {
    const [like, setLike] = useState(false);
    const navigate = useNavigate();
console.log(like)
    const mutation = useMutation({
        mutationFn: (id) => toggleLikedProducts(id),  // data.id를 전달받아 처리
        onSuccess: () => {
            setLike(prev => !prev);
            console.log('데이터가 저장되었습니다.');
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
            <div className="pt-2">
                <p className="text-lg">{data.name}</p>
                <p className="text-base">{data.price.toLocaleString("ko-KR")}원</p>
                <p>리뷰 {reviewCount}개</p>
            </div>
        </div>
    );
};

export default Product;
