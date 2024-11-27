import {useEffect} from "react";
import Product from "../components/common/Product";
import {useState} from "react";
import {getProductByCategory} from "../api/productApi";
import {useSearchParams} from "react-router-dom";
import {Button} from "antd";
const CategoryDetail = () => {
    // url 파라미터값 갖고오기
    const [searchParams] = useSearchParams();
    const subCategory = searchParams.get("subcategory");
    console.log(subCategory);
    const [categoryProduct, setCategoryProduct] = useState([]);

    // 데이터 페치
    useEffect(() => {
        const fetchCategoryProduct = async () => {
            const categoryProduct = await getProductByCategory(subCategory);
            console.log(categoryProduct);
            setCategoryProduct(categoryProduct);
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
                <p>
                    {subCategory} / {subCategory} / {subCategory}
                </p>
                <div className="flex items-center justify-between pb-5">
                    <h2 className="pb-5 text-3xl pt-10">{subCategory}</h2>
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
                <hr className="my-12" />
                <div className="flex items-center justify-between pb-5">
                    <h2 className="pb-5 text-3xl">{subCategory}</h2>
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
