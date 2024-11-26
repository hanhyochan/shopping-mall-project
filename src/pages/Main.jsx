import {useEffect} from "react";
import MainSwiper from "../components/common/MainSwiper";
import Product from "../components/common/Product";
import {getAllProduct} from "../api/productApi";
import {useState} from "react";

const Main = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchAllProduct = async () => {
            const AllProductData = await getAllProduct();
            console.log(AllProductData);
            setProduct(AllProductData);
        };
        fetchAllProduct();
    }, []);

    return (
        <>
            <MainSwiper />
            <h1 className="pb-5 text-3xl">Now Hot Click</h1>
            <div className="flex flex-wrap md:w-[80vw] xl: w-[90vw]">
                {product?.map(item => (
                    <Product
                        data={item}
                        key={item.id}
                    />
                ))}
            </div>
            <hr className="my-12" />
            <h1 className="pb-5 text-3xl">New Arrival</h1>
            <div className="flex flex-wrap md:w-[80vw] xl: w-[90vw]">
                {product?.map(item => (
                    <Product
                        data={item}
                        key={item.id}
                    />
                ))}
            </div>
        </>
    );
};

export default Main;
