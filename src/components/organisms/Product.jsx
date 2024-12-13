import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../atoms/Button";
import {HeartOutlined, HeartFilled} from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
// import toggle

const Product = ({data, reviewCount}) => {
    const [like, setLike] = useState(false);
    const navigate = useNavigate();

    const handleClickProduct = () => {
        navigate(`/details/${data.id}`);
    };

    const handleClick = e => {
        e.stopPropagation();
        setLike(!like);
        console.log(data)
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
