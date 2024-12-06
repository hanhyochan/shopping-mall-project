import Button from "../atoms/Button";

const ProductSizes = ({data = [], onSizeChange}) => {
    return (
        <div className="flex items-center gap-3">
            {data.map((item, index) => (
                <Button
                    key={index}
                    className="flex items-center justify-center text-sm rounded-md"
                    text={item}
                    onClick={() => onSizeChange(item)}
                />
            ))}
        </div>
    );
};

export default ProductSizes;
