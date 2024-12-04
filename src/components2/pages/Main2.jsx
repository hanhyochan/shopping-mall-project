import {useEffect} from "react";
import MainSwiper from "../organisms/MainSwiper";
import ProductList from "../organisms/ProductList";
import {getAllProduct} from "../../api/productApi";
import {useState} from "react";

const Main2 = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchAllProduct = async () => {
            const AllProductData = await getAllProduct();
            setProduct(AllProductData);
            // setProduct(Object.values(AllProductData).flatMap(item => Object.values(item).flatMap(el => el.item)));
        };
        fetchAllProduct();
    }, []);

    return (
        <>
            <MainSwiper />
            <ProductList
                title="Now Hot Click"
                className="pb5"
                data={product}
            />
            <hr className="my-12" />
            <ProductList
                title="New Arrival"
                className="pb5"
                data={product}
            />
        </>
    );
};

export default Main2;
