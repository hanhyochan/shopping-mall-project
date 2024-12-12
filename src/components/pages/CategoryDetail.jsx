import {useEffect} from "react";
import ProductList from "../organisms/ProductList";
import CategoryHeader from "../molecules/CategoryHeader";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getAllProduct, getAllReiview} from "../../api/productApi";
import {useQueries} from "@tanstack/react-query";

const CategoryDetail = () => {
    // url 파라미터값 갖고오기
    const [searchParams] = useSearchParams();
    const subCategory = searchParams.get("subcategory");
    const [categoryProduct, setCategoryProduct] = useState([]);
    console.log(categoryProduct);
    // 데이터 페치
    // useEffect(() => {
    //     const fetchCategoryProduct = async () => {
    //         const allProduct = await getAllProduct();
    //         const categoryProducts = allProduct.filter(item => item.type === subCategory);
    //         console.log(subCategory);
    //         setCategoryProduct(categoryProducts);
    //     };
    //     fetchCategoryProduct();
    // }, [subCategory]);

    // 상품데이터, 리뷰데이터 불러오기
    const [productQuery, reviewsQuery] = useQueries({
        queries: [
            {
                queryKey: ["product"],
                queryFn: () => getAllProduct(),
            },
            {
                queryKey: ["reviews"],
                queryFn: () => getAllReiview(),
            },
        ],
    });

    // 상품 데이터 로딩 및 에러 처리
    const {data: productData, isLoading: isProductLoading, error: productError} = productQuery;
    const {data: reviewsData, isLoading: isReviewsLoading, error: reviewsError} = reviewsQuery;
    // 필터
    const categoryData = productData.filter(item => item.type === subCategory);
    // 로딩 상태 처리
    if (isProductLoading || isReviewsLoading) return <div>로딩중입니닷</div>;

    // 에러 처리
    if (productError || reviewsError) return <div>Error fetching data</div>;
    // 낮은가격 필터링
    const sortByLowPrice = () => {
        setCategoryProduct(prev => [...prev].sort((a, b) => a.price - b.price));
    };

    // 높은가격 필터링
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
                    data={categoryData}
                    reviewdata={reviewsData}
                />
            </div>
        </>
    );
};

export default CategoryDetail;
