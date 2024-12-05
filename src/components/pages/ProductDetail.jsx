import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getSelectedProduct} from "../../api/productApi";
import Heading from "../atoms/Heading";
import ProductColors from "../organisms/ProductColors";
import ProductSizes from "../organisms/ProductSizes";
import ProductQuantity from "../organisms/ProductQuantity";

const ProductDetail = () => {
    const {productId} = useParams();
    const [selectedProduct, setSelectedProduct] = useState({images: []});
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const fetchSelectedProduct = async () => {
            const selectedProductData = await getSelectedProduct(productId);
            setSelectedProduct(selectedProductData);
        };
        fetchSelectedProduct();
    }, []);

    const addfavoriteProducts = () => {
        setFavoriteProducts([...favoriteProducts, selectedProduct]);
    };

    // 상품수량
    const [quantity, setQuantity] = useState(0);
    const handleQuantityChange = newQuantity => {
        setQuantity(newQuantity);
    };
    return (
        <>
            <div className="my-20 grid h-180 grid-cols-1 md:grid-cols-2 grid-rows-1 gap-10">
                <div className="border border-gray-300 ">
                    <img
                        src={selectedProduct.img}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="grid grid-cols-1 grid-rows-2">
                    <div className="flex flex-col gap-6">
                        <Heading
                            className="!text-2xl"
                            text={selectedProduct.name}
                        />
                        <span className="text-2xl font-semibold">{selectedProduct.price}원</span>
                        <div className="flex items-center gap-5">
                            <p className="text-lg font-medium">배송비</p>
                            <p className="text-base">3,000원(5만원 이상 구매시 무료)</p>
                        </div>
                        <hr />
                        <div className="flex items-center gap-5">
                            <p className="text-lg ">Colors: </p>
                            <ProductColors data={selectedProduct.option_colors} />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-lg ">Sizes: </p>
                            <ProductSizes data={selectedProduct.option_sizes} />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-lg">Quantity: </p>
                            <ProductQuantity
                                initialQuantity={quantity}
                                onChange={handleQuantityChange}
                            />
                            <p>{quantity > 0 ? `선택된 수량: ${quantity}` : null}</p>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse gap-6">
                        <div className="flex flex-col gap-6">
                            <p className="flex flex-row-reverse text-lg font-medium">총 상품 금액 {selectedProduct.price}원</p>
                            <div className="grid grid-cols-3 grid-rows-1 gap-4">
                                <button
                                    className="flex items-center justify-center w-full h-12 text-base border border-gray-600 rounded-md"
                                    onClick={addfavoriteProducts}
                                >
                                    관심상품
                                </button>
                                <button className="flex items-center justify-center w-full h-12 text-base border border-gray-600 rounded-md">장바구니</button>
                                <button className="flex items-center justify-center w-full h-12 text-base text-white bg-gray-600 rounded-md">관심상품</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ProductDetailsTab /> */}
        </>
    );
};

export default ProductDetail;
