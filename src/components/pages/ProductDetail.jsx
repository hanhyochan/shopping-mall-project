import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsTab from "../organisms/ProductDetailsTab"
import ProductColors from "../organisms/ProductColors";
import ProductSizes from "../organisms/ProductSizes";
import ProductActions from "../organisms/ProductActions";
import { fetchSelectedProduct } from "../../RTK/slice";
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedProduct, selectProductStatus } from "../../RTK/selector";

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const selectedProduct = useSelector(selectSelectedProduct);
    const status = useSelector(selectProductStatus);

    useEffect(() => {
        dispatch(fetchSelectedProduct(productId));
    }, []);

    if (status === 'loading') {
        return <p>상품 불러오는 중...</p>;
    }

    if (status === 'failed') {
        return <p>상품 불러오기를 실패했습니다.</p>;
    }

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
                            <ProductActions />
                        </div>
                    </div>
                </div>
            </div>
            <ProductDetailsTab />
        </>
    );
};

export default ProductDetail;