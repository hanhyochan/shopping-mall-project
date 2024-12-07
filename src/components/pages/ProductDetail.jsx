import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getSelectedProduct} from "../../api/productApi";
import Heading from "../atoms/Heading";
import ProductColors from "../organisms/ProductColors";
import ProductSizes from "../organisms/ProductSizes";
import ProductQuantity from "../organisms/ProductQuantity";
import ProductActions from "../organisms/ProductActions";
import ProductDetailsTab from "../organisms/ProductDetailsTab";
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

    // 상품상태
    const [selectedOptions, setSelectedOptions] = useState({
        color: null,
        size: null,
        quantity: 0,
    });
    // 상품상태 추가
    const handleOptionChange = (optionType, value) => {
        setSelectedOptions(prev => ({
            ...prev,
            [optionType]: value,
        }));
    };

    return (
        <>
            <div className="my-20 grid h-180 grid-cols-1 md:grid-cols-2 grid-rows-1 gap-10">
                <div className="border border-gray-300">
                    <img
                        src={selectedProduct.img}
                        alt={selectedProduct.name}
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="grid grid-cols-1 grid-rows-2">
                    <div className="flex flex-col gap-6">
                        <Heading
                            className="!text-2xl"
                            text={selectedProduct.name}
                        />
                        <span className="text-2xl font-semibold">{selectedProduct.price ? `${selectedProduct.price.toLocaleString("ko-KR")}원` : "0원"}</span>
                        <div className="flex items-center gap-5">
                            <p className="text-lg font-medium">배송비</p>
                            <p className="text-base">3,000원(5만원 이상 구매시 무료)</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-lg ">Colors: </p>
                            <ProductColors
                                data={selectedProduct.option_colors}
                                onColorChange={color => handleOptionChange("color", color)}
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-lg ">Sizes: </p>
                            <ProductSizes
                                data={selectedProduct.option_sizes}
                                onSizeChange={size => handleOptionChange("size", size)}
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-lg">Quantity: </p>
                            <ProductQuantity
                                initialQuantity={quantity}
                                onChange={quantity => handleOptionChange("quantity", quantity)}
                            />
                        </div>
                        <div className="flex gap-3">
                            <p>{selectedOptions.color && `색상 ${selectedOptions.color}`}</p>
                            <p>{selectedOptions.size && `사이즈 ${selectedOptions.size}`}</p>
                            <p>{selectedOptions.quantity > 0 && `수량 ${selectedOptions.quantity}`}</p>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse gap-6">
                        <div className="flex flex-col gap-6">
                            <p className="flex flex-row-reverse text-lg font-medium">총 상품 금액 {selectedProduct.price ? `${selectedProduct.price.toLocaleString("ko-KR")}원` : "0원"}</p>
                            <ProductActions addfavoriteProducts={addfavoriteProducts} />
                        </div>
                    </div>
                </div>
            </div>
            <ProductDetailsTab />
        </>
    );
};

export default ProductDetail;
