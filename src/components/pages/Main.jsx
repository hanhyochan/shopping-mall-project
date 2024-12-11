import {useEffect} from "react";
import MainSwiper from "../organisms/MainSwiper";
import ProductList from "../organisms/ProductList";
import {getAllProduct, getAllReiview} from "../../api/productApi";
import {useState} from "react";
import {useQueries} from "@tanstack/react-query";
import {LoadingOutlined} from "@ant-design/icons";
import {Spin} from "antd";
const Main = () => {
    // const [product, setProduct] = useState([]);

    // useEffect(() => {
    //     const fetchAllProduct = async () => {
    //         const AllProductData = await getAllProduct();
    //         setProduct(AllProductData);
    //         // setProduct(Object.values(AllProductData).flatMap(item => Object.values(item).flatMap(el => el.item)));
    //     };
    //     fetchAllProduct();
    // }, []);

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

    // 로딩 상태 처리
    if (isProductLoading || isReviewsLoading) return <div>로딩중입니닷</div>;

    // 에러 처리
    if (productError || reviewsError) return <div>Error fetching data</div>;
    return (
        <>
            <MainSwiper />
            <ProductList
                title="Now Hot Click"
                className="pb-5"
                data={productData}
                reviewdata={reviewsData}
            />
            <hr className="my-12" />
            <ProductList
                title="New Arrival"
                className="pb-5"
                data={productData}
                reviewdata={reviewsData}
            />
        </>
    );
};

export default Main;
