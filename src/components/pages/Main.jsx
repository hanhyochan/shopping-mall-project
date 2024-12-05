import {useEffect} from "react";
import MainSwiper from "../organisms/MainSwiper";
import ProductList from "../organisms/ProductList";
import { fetchAllProducts } from "../../RTK/slice";
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts, selectProductStatus } from "../../RTK/selector";

const Main = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const status = useSelector(selectProductStatus);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    if (status === 'loading') {
        return <p>상품 불러오는 중...</p>;
    }

    if (status === 'failed') {
        return <p>상품 불러오기를 실패했습니다.</p>;
    }

    return (
        <>
            <MainSwiper />
            <ProductList
                title="Now Hot Click"
                className="pb-5"
                data={products}
            />
            <hr className="my-12" />
            <ProductList
                title="New Arrival"
                className="pb-5"
                data={products}
            />
        </>
    );
};

export default Main;
