import ProductLikeList from "../../organisms/ProductLikeList";
import useLikedProducts from "../../../hooks/useLikedProducts";
import useAllProducts from "../../../hooks/useAllProducts";

const MyPage = () => {
    const {allProductsData, isProductsLoading, productsError} = useAllProducts();
    const {likedProductIdData, isLikedProductLoading, likedProductError} = useLikedProducts();

    if (isProductsLoading || isLikedProductLoading) return <div>로딩중입니다</div>;
    if (productsError || likedProductError) return <div>Error fetching data</div>;

    const likedProductList = allProductsData.filter(
        product => likedProductIdData?.some(liked => liked.id === product.id) // ID 비교
    );

    return (
        <div>
            <p>회원이름 님</p>
            <ProductLikeList
                title="나의 관심상품"
                className="pb-5 text-lg font-bold"
                data={likedProductList}
            />
        </div>
    );
};

export default MyPage;
