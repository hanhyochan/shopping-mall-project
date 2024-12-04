import Heading from "../atoms/Heading";
import Product from "../organisms/Product.jsx";
const ProductList = ({title, data, className}) => {
    return (
        <>
            <Heading
                text={title}
                className={className}
            />
            <div className="flex flex-wrap md:w-[80vw] xl: w-[90vw]">
                {data?.map(item => (
                    <Product
                        data={item}
                        key={item.id}
                    />
                ))}
            </div>
        </>
    );
};

export default ProductList;
