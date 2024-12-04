import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../atoms/Button";
import {HeartOutlined, HeartFilled} from "@ant-design/icons";

const Product = ({data}) => {
    const [like, setLike] = useState(false);
    const navigate = useNavigate();

    const handleClickProduct = () => {
        navigate(`/details/${data.id}`);
    };

    const handleClick = e => {
        setLike(!like);
    };

    return (
        <div
            onClick={() => handleClickProduct()}
            className="relative w-1/4 p-4"
        >
            <Button
                className="absolute right-0 top-0 text-[25px] text-red-500"
                onClick={e => {
                    handleClick(e);
                }}
            >
                {like ? <HeartFilled /> : <HeartOutlined />}
            </Button>

            <div className="w-full overflow-hidden h-60 aspect-w-1 aspect-h-1">
                <img
                    src={data.thumbnail}
                    alt={data.name}
                    className="object-contain w-full h-full"
                />
            </div>
            <p>{data.name}</p>
            <p>{data.price}</p>
            {/* <p>리뷰: {data.reviews.length}개</p> */}
        </div>
    );
};

export default Product;
