import {useState} from "react";
const Product = ({data}) => {
    const [like, setLike] = useState(false);
    const handleClick = () => {
        setLike(!like);
    };
    return (
        <div className="w-1/4 p-4 relative">
            <button
                className="absolute right-0 top-0 text-[25px] text-red-500"
                onClick={() => {
                    handleClick();
                }}
            >
                {like ? "❤️" : "♡"}
            </button>
            <div className="w-full h-60 aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                    src={data.images[0]}
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>
            <p>{data.title}</p>
            <p>{data.price}</p>
            <p>리뷰: {data.reviews.length}개</p>
        </div>
    );
};

export default Product;
