import React, { useState, useEffect } from 'react';
import ProductList from '../../organisms/ProductList';
import useAllProducts from '../../../hooks/useAllProducts';
import useLikedProducts from '../../../hooks/useLikedProducts';
import useAllReview from '../../../hooks/useAllReview';
import CategoryHeader from '../../molecules/CategoryHeader';

const LikedProduct = () => {
    const { allProductsData, isProductsLoading, productsError } = useAllProducts();
    const { likedProductIdData, isLikedProductLoading, likedProductError } = useLikedProducts();
    const { allReviewData, isReviewLoading, reviewError } = useAllReview()
    const [likedProducts, setLikedProducts] = useState([])

    if (isProductsLoading || isLikedProductLoading || isReviewLoading) return <div>로딩중입니다</div>;
    if (productsError || likedProductError || reviewError) return <div>Error fetching data</div>;

    useEffect(() => {
        if (allProductsData && likedProductIdData) {
            const likedProductList = allProductsData.filter(product =>
                likedProductIdData?.some(liked => liked.id === product.id)
            );
            setLikedProducts(likedProductList)
        }
    }, [allProductsData, likedProductIdData])

    const sortByLowPrice = () => {
        setLikedProducts(prev => [...prev].sort((a, b) => a.price - b.price));
    };

    const sortByHighPrice = () => {
        setLikedProducts(prev => [...prev].sort((a, b) => b.price - a.price));
    };

    return (
        <div className="pt-10">
            <CategoryHeader
                title={'Liked Product'}
                sortByLowPrice={sortByLowPrice}
                sortByHighPrice={sortByHighPrice}
            />
            <ProductList
                className="pb-5"
                data={likedProducts}
                reviewdata={allReviewData}
            />
        </div>
    );
};

export default LikedProduct;