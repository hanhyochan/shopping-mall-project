import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSelectedProduct } from '../api/productApi';

const ProductDetail = () => {
    const { productId } = useParams()
    const [selectedProduct, setSelectedProduct] = useState({ images: [] })

    useEffect(() => {
        const fetchSelectedProduct = async () => {
            const selectedProductData = await getSelectedProduct(productId)
            setSelectedProduct(selectedProductData)
        }
        fetchSelectedProduct()
    }, [])

    console.log(selectedProduct)

    return (
        <div className='my-20 grid h-180 grid-cols-2 grid-rows-1 gap-[5%]'>
            <div className='border border-gray-300 '>
                <img
                    src={selectedProduct.images.join(',')}
                    alt=""
                    className="object-contain w-full h-full"
                />
            </div>

            <div className='grid grid-cols-1 grid-rows-2'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-2xl'>{selectedProduct.title}</h1>
                    <span className='text-2xl font-semibold'>{selectedProduct.price}원</span>
                    <div className='flex items-center gap-5'>
                        <p className='text-lg font-medium'>배송비</p>
                        <p className='text-base'>3,000원(5만원 이상 구매시 무료)</p>
                    </div>
                    <hr></hr>
                    <div className='flex items-center gap-5'>
                        <p className='text-lg '>Colors: </p>
                        <div className='w-7 h-7 rounded-full bg-[#86c8a7]'></div>
                        <div className='w-7 h-7 rounded-full bg-[#c8b686]'></div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <p className='text-lg '>Sizes: </p>
                        <div className='flex items-center justify-center w-8 h-8 text-base border border-gray-300 rounded-md'>
                            xs
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 text-base border border-gray-300 rounded-md'>
                            s
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 text-base border border-gray-300 rounded-md'>
                            m
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 text-base border border-gray-300 rounded-md'>
                            l
                        </div>
                        <div className='flex items-center justify-center w-8 h-8 text-base border border-gray-300 rounded-md'>
                            xl
                        </div>
                    </div>
                </div>

                <div className='flex flex-col-reverse gap-6'>
                    <div className='flex flex-col gap-6'>
                        <p className='flex flex-row-reverse text-lg font-medium'>총 상품 금액 {selectedProduct.price}원</p>

                        <div className="grid grid-cols-3 grid-rows-1 gap-4">
                            <button className="flex items-center justify-center w-full h-12 text-base border border-gray-600 rounded-md">관심상품</button>
                            <button className="flex items-center justify-center w-full h-12 text-base border border-gray-600 rounded-md">장바구니</button>
                            <button className="flex items-center justify-center w-full h-12 text-base text-white bg-gray-600 rounded-md">관심상품</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ProductDetail;