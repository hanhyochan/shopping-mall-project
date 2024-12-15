import { useEffect } from "react";
import ProductList from "../organisms/ProductList";
import CategoryHeader from "../molecules/CategoryHeader";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAllProducts from "../../hooks/useAllProducts";
import useAllReview from "../../hooks/useAllReview";

const CategoryDetail = () => {
    const [searchParams] = useSearchParams();
    const subCategory = searchParams.get("subcategory");
    const [categoryProduct, setCategoryProduct] = useState([]);
    const { allProductsData, isProductsLoading, productsError } = useAllProducts();
    const { allReviewData, isReviewsLoading, reviewsError } = useAllReview()

    useEffect(() => {
        if (allProductsData) {
            const categoryData = allProductsData.filter(item => item.type === subCategory);
            setCategoryProduct(categoryData)
        }
    }, [subCategory, allProductsData])

    if (isProductsLoading || isReviewsLoading) return <div>로딩중입니다</div>;

    if (productsError || reviewsError) return <div>Error fetching data</div>;

    const sortByLowPrice = () => {
        setCategoryProduct(prev => [...prev].sort((a, b) => a.price - b.price));
    };

    const sortByHighPrice = () => {
        setCategoryProduct(prev => [...prev].sort((a, b) => b.price - a.price));
    };

    return (
        <>
            <div className="pt-10">
                <p className="text-lg">
                    {allProductsData[0]?.category} / {subCategory}
                </p>
                <CategoryHeader
                    title={subCategory}
                    sortByLowPrice={sortByLowPrice}
                    sortByHighPrice={sortByHighPrice}
                />
                <ProductList
                    data={categoryProduct}
                    reviewdata={allReviewData}
                />
            </div>
        </>
    );
};

export default CategoryDetail;