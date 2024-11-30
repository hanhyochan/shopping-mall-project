import {useEffect} from "react";
import MainSwiper from "../components/MainSwiper";
import Product from "../components/Product";
import {getAllProduct} from "../api/productApi";
import {useState} from "react";

const Main = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchAllProduct = async () => {
            const AllProductData = await getAllProduct();
            setProduct(AllProductData);
        };
        fetchAllProduct();
    }, []);
    // console.log(product)
    const a = Object.values(product).flat().map(el => el.item.map(ell => ell.item).flat().map(elll => elll))
    console.log(a)

    return (
        <>
            <MainSwiper />
            <h2 className="pb-5 text-3xl">Now Hot Click</h2>
            <div className="flex flex-wrap md:w-[80vw] xl: w-[90vw]">
                {product?.map(item => (
                    <Product
                        data={item}
                        key={item.id}
                    />
                ))}
            </div>
            <hr className="my-12" />
            <h2 className="pb-5 text-3xl">New Arrival</h2>
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
