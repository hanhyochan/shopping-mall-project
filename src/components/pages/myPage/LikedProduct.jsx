import React from 'react';
import ProductList from '../../organisms/ProductList';
import useAllProducts from '../../../hooks/useAllProducts';
import useLikedProducts from '../../../hooks/useLikedProducts';
import useAllReview from '../../../hooks/useAllReview';

const LikedProduct = () => {
    const allProductsData = useAllProducts();
    const likedProductIdData = useLikedProducts();
    const allReviewData = useAllReview()

    if (!allProductsData || !likedProductIdData) {
        return <div>Loading...</div>;
    }

    const likedProductList = allProductsData.filter(product =>
        likedProductIdData.some(liked => liked.id === product.id) // ID 비교
    );

    return (
        <>
            <ProductList
                title="Liked Products"
                className="pb-5"
                data={likedProductList}
                reviewdata={allReviewData}
            />
        </>
    );
};

export default LikedProduct;


// export default LikedProduct;

// import React from 'react';
// import useAllProducts from '../../../hooks/useAllProducts';
// import useLikedProducts from '../../../hooks/useLikedProducts';

// const LikedProduct = () => {
//     const allProductsData = useAllProducts()
//     const likedProductIdData = useLikedProducts();

// if (allProductsData && likedProductIdData) {
//     const likedProductList = allProductsData.filter(product => product.id === likedProductIdData.id)
//     console.log(likedProductList)
// }
//     return (
//         <div>
//             관심상품
//         </div>
//     );
// };

// export default LikedProduct;