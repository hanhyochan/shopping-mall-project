import { useEffect } from "react";
import Product from "../organisms/Product"
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "antd";
import { getAllProduct } from "../../api/productApi";
import { useQueries } from "@tanstack/react-query";

const CategoryDetail = () => {
    const [categoryProduct, setCategoryProduct] = useState([]);
    const [searchParams] = useSearchParams();
    const subCategory = searchParams.get("subcategory");

    const [productQuery] = useQueries({
        queries: [
            {
                queryKey: ["product"],
                queryFn: () => getAllProduct(),
            }
        ]
    })

    const { data: productData, isLoading: isProductLoading, error: productError } = productQuery;

    useEffect(() => {
        if (productData) {
            const categoryProducts = productData.filter(item => item.type === subCategory);
            setCategoryProduct(categoryProducts);
        }
    }, [productData, subCategory])

    if (isProductLoading) return <div>로딩중입니다</div>;

    if (productError) return <div>Error fetching data</div>;

    const sortByLowPrice = () => {
        setCategoryProduct(prev => [...prev].sort((a, b) => a.price - b.price));
    };

    const sortByHighPrice = () => {
        setCategoryProduct(prev => [...prev].sort((a, b) => b.price - a.price));
    };
    return (
        <>
            <div className="pt-10">
                <p>
                    {categoryProduct[0]?.category} / {subCategory}
                </p>
                <div className="flex items-center justify-between pb-5">
                    <h2 className="pt-10 pb-5 text-3xl">{subCategory}</h2>
                    <div>
                        <Button
                            type="primary"
                            className="mr-2"
                        >
                            인기순
                        </Button>
                        <Button
                            color="default"
                            variant="filled"
                            className="mr-2"
                            onClick={sortByLowPrice}
                        >
                            낮은가격
                        </Button>
                        <Button
                            color="default"
                            variant="filled"
                            type="warning"
                            onClick={sortByHighPrice}
                        >
                            높은가격
                        </Button>
                    </div>
                </div>

                <div className="flex flex-wrap md:w-[80vw] xl: w-[90vw]">
                    {categoryProduct?.map(item => (
                        <Product
                            data={item}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryDetail;