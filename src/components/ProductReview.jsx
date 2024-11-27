import React from 'react';

const ProductReview = () => {
    return (
        <>
            <div className='grid w-full h-48 grid-cols-3 grid-rows-1 border border-gray-300 mb-14'>
                <div className='flex flex-col items-center justify-center border-r border-gray-300'>
                    <span className='text-base'>구매고객 총 평점</span>
                    <h1 className='text-2xl'>5점</h1>
                </div>
                <div className='flex flex-col items-center justify-center border-r border-gray-300'>
                    <span className='text-base'>별점 비율</span>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <span className='text-base'>한줄평</span>
                </div>
            </div>

            <div className='flex flex-col w-full h-8'>
                <div className='mb-4 text-right cursor-pointer'>리뷰쓰기</div>
                <hr className='mb-4 border border-black' />
                <span>이미지</span>
            </div>
        </>
    );
};

export default ProductReview;