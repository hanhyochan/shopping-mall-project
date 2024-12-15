import {useNavigate} from "react-router-dom";

const ProductLikeItem = ({data}) => {
    // 페이지 이동
    const navigate = useNavigate();
    const handleClickProduct = () => {
        navigate(`/details/${data.id}`);
    };

    return (
        <div
            onClick={() => handleClickProduct()}
            className="relative flex justify-between"
        >
            <div className="flex items-center max-w-[340px] min-w-[340px]">
                <div className="flex w-[120px] flex-shrink-0 overflow-hidden">
                    <img
                        src={data.thumbnail}
                        alt={data.name}
                        className="object-contain w-full h-full"
                    />
                </div>
                <p className="text-base font-bold pl-10 whitespace-nowrap">{data.name}</p>
            </div>
        </div>
    );
};

export default ProductLikeItem;
