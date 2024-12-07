import Button from "../atoms/Button";
const ProductActions = ({addfavoriteProducts}) => {
    return (
        <div className="grid grid-cols-3 grid-rows-1 gap-4">
            <Button
                className="flex items-center justify-center w-full h-12 text-base border border-gray-600 rounded-md"
                antDesign={false}
                text="관심상품"
                onClick={addfavoriteProducts}
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
