import { useEffect } from "react";
import ProductList from "../organisms/ProductList";
import CategoryHeader from "../molecules/CategoryHeader";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getAllProduct, getAllReiview} from "../../api/productApi";
import {useQueries} from "@tanstack/react-query";

const CategoryDetail = () => {
    const [searchParams] = useSearchParams();
    const subCategory = searchParams.get("subcategory");
    const [categoryProduct, setCategoryProduct] = useState([]);

    const [productQuery, reviewsQuery] = useQueries({
        queries: [
            {
                queryKey: ["categoryProduct"],
                queryFn: () => getAllProduct(),
            },
            {
                queryKey: ["reviews"],
                queryFn: () => getAllReiview(),
            },
        ],
    });

    const {data: productData, isLoading: isProductLoading, error: productError} = productQuery;
    const {data: reviewsData, isLoading: isReviewsLoading, error: reviewsError} = reviewsQuery;

    useEffect(() => {
        if (productData) {
            const categoryData = productData.filter(item => item.type === subCategory);
            console.log(categoryData)
            setCategoryProduct(categoryData)
        }
    }, [subCategory, productData])

    if (isProductLoading || isReviewsLoading) return <div>로딩중입니닷</div>;

    if (productError || reviewsError) return <div>Error fetching data</div>;

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
                    {productData[0]?.category} / {subCategory}
                </p>
                <CategoryHeader
                    title={subCategory}
                    sortByLowPrice={sortByLowPrice}
                    sortByHighPrice={sortByHighPrice}
                />
                <ProductList
                    data={categoryProduct}
                    reviewdata={reviewsData}
                />
            </div>
        </>
    );
};

export default CategoryDetail;