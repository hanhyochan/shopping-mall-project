import {useState} from "react";
import Button from "../atoms/Button";

const ProductQuantity = ({initialQuantity = 1, onChange}) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            onChange(newQuantity); // 부모 컴포넌트에 변경된 수량 전달
            return newQuantity;
        });
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity > 1) {
                const newQuantity = prevQuantity - 1;
                onChange(newQuantity); // 부모 컴포넌트에 변경된 수량 전달
                return newQuantity;
            }
            return prevQuantity; // 최소 1개 이상 유지
        });
    };

    return (
        <div className="flex items-center gap-4">
            <Button
                className="w-8 h-8"
                onClick={decreaseQuantity}
                text="-"
            />
            <span className="text-sm">{quantity}</span>
            <Button
                className="w-8 h-8"
                onClick={increaseQuantity}
                text="+"
            />
        </div>
    );
};

export default ProductQuantity;
