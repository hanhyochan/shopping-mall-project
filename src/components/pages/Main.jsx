import MainSwiper from "../organisms/MainSwiper";
import ProductList from "../organisms/ProductList";
import {getAllProduct, getAllReiview} from "../../api/productApi";
import {useQueries} from "@tanstack/react-query";

const Main = () => {

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

    const {data: productData, isLoading: isProductLoading, error: productError} = productQuery;
    const {data: reviewsData, isLoading: isReviewsLoading, error: reviewsError} = reviewsQuery;

    if (isProductLoading || isReviewsLoading) return <div>로딩중입니다</div>;

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
