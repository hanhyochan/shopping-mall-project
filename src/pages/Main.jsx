import {useEffect} from "react";
import Layout from "../components/common/Layout";
import MainSwiper from "../components/common/MainSwiper";
import Product from "../components/common/Product";
import {useState} from "react";
const Main = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProduct(data.products));
    }, []);
    return (
        <Layout>
            <MainSwiper />
            <h1 className="text-3xl pb-5">Now Hot Click</h1>
            <div className="flex flex-wrap md:w-[80vw] xl: w-[90vw]">
                {product.map(item => (
                    <Product
                        data={item}
                        key={item.id}
                    />
                ))}
            </div>
            <hr className="my-12" />
            <h1 className="text-3xl pb-5">New Arrival</h1>
            <div className="flex flex-wrap md:w-[80vw] xl: w-[90vw]">
                {product.map(item => (
                    <Product
                        data={item}
                        key={item.id}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default Main;
