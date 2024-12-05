import {useEffect} from "react";
import ProductList from "../organisms/ProductList";
import CategoryHeader from "../molecules/CategoryHeader";
import {useState} from "react";
import {getAllProduct} from "../../api/productApi";
import {useSearchParams} from "react-router-dom";
const CategoryDetail = () => {
    // url 파라미터값 갖고오기
    const [searchParams] = useSearchParams();
    const subCategory = searchParams.get("subcategory");
    const [categoryProduct, setCategoryProduct] = useState([]);
    console.log(categoryProduct);
    // 데이터 페치
    useEffect(() => {
        const fetchCategoryProduct = async () => {
            const allProduct = await getAllProduct();
            const categoryProducts = allProduct.filter(item => item.type === subCategory);
            console.log(subCategory);
            setCategoryProduct(categoryProducts);
        };
        fetchCategoryProduct();
    }, [subCategory]);
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
                    {categoryProduct[0]?.category} / {subCategory}
                </p>
                <CategoryHeader
                    title={subCategory}
                    sortByLowPrice={sortByLowPrice}
                    sortByHighPrice={sortByHighPrice}
                />
                <ProductList data={categoryProduct} />
            </div>
        </>
    );
};

export default CategoryDetail;
