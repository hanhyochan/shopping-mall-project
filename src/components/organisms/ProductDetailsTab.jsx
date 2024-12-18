import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
import ProductReview from "./ProductReview";
import ProductQnA from "./ProductQnA";

const ProductDetailsTab = () => {
    const [productDetailView, setProductDetailView] = useState('productInfo')
    console.log(productDetailView)
    const pageComponents = {
        productInfo: <ProductInfo />,
        productReview: <ProductReview />,
        productQnA: <ProductQnA />
    };

    return (
        <>
            <div className="grid w-full grid-cols-3 grid-rows-1 mt-24 text-lg text-center h-14">
                <button
                    onClick={() => setProductDetailView("productInfo")}
                    className={`flex items-center justify-center border ${productDetailView === "productInfo" ? "border-black border-2 border-b-0" : "border-b-2 border-gray-300 border-b-black"}`}
                >
                    상세설명
                </button>

                <button
                    onClick={() => setProductDetailView("productReview")}
                    className={`flex items-center justify-center border ${productDetailView === "productReview" ? "border-black border-2 border-b-0" : "border-b-2 border-gray-300 border-b-black"}`}
                >
                    상품리뷰
                </button>
                <button
                    onClick={() => setProductDetailView("productQnA")}
                    className={`flex items-center justify-center border ${productDetailView === "productQnA" ? "border-black border-2 border-b-0" : "border-b-2 border-gray-300 border-b-black"}`}
                >
                    상품문의
                </button>
            </div>
            <div className="flex flex-col items-center justify-center py-24">{pageComponents[productDetailView]}</div>
        </>
    );
};

export default ProductDetailsTab;
