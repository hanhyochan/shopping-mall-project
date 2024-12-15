import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsTab from "../organisms/ProductDetailsTab"
import ProductColors from "../organisms/ProductColors";
import ProductSizes from "../organisms/ProductSizes";
import ProductActions from "../organisms/ProductActions";
import { useQueries } from "@tanstack/react-query";
import { getSelectedProduct } from "../../api/productApi";

const ProductDetail = () => {
    const { productId } = useParams();
    const [selectedProduct, setSelectedProduct] = useState([])

    const [productQuery] = useQueries({
        queries: [
            {
                queryKey: ["selectedProduct"],
                queryFn: () => getSelectedProduct(productId),
            }
        ]
    })

    const { data: selectedProductData, isLoading: isProductLoading, error: productError } = productQuery;

    useEffect(() => {
        if (selectedProductData) {
            setSelectedProduct(selectedProductData)
        }
    }, [selectedProductData])

    if (isProductLoading) return <div>로딩중입니다</div>;

    if (productError) return <div>Error fetching data</div>;

    return (
        <>
            <div className="my-20 grid h-180 grid-cols-2 grid-rows-1 gap-[5%]">
                <div className="border border-gray-300 ">
                    <img
                        src={selectedProduct.img}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="grid grid-cols-1 grid-rows-2">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-2xl">{selectedProduct.name}</h1>
                        <span className="text-2xl font-semibold">{selectedProduct.price}원</span>
                        <div className="flex items-center gap-5">
                            <p className="text-lg font-medium">배송비</p>
                            <p className="text-base">3,000원(5만원 이상 구매시 무료)</p>
                        </div>
                        <hr></hr>
                        <div className="flex items-center gap-5">
                            <p className="text-lg ">Colors: </p>
                            <ProductColors key={selectedProduct.id + 1} data={selectedProduct.option_colors} />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className="text-lg ">Sizes: </p>
                            <ProductSizes key={selectedProduct.id + 2} data={selectedProduct.option_sizes} />
                        </div>
                    </div>

                    <div className="flex flex-col-reverse gap-6">
                        <div className="flex flex-col gap-6">
                            <p className="flex flex-row-reverse text-lg font-medium">총 상품 금액 {selectedProduct.price}원</p>
                            <ProductActions selectedProductId={productId} />
                        </div>
                    </div>
                </div>
            </div>
            <ProductDetailsTab />
        </>
    );
};

export default ProductDetail;