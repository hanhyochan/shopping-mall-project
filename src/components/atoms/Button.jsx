import {Button as AntButton} from "antd";

const Button = ({text, antDesign = true, onClick, className, color, variant, type, ...props}) => {
    if (!antDesign) {
        return (
            <button
                onClick={onClick}
                {...props}
            >
                {text}
            </button>
        );
    }

    return (
        <AntButton
            onClick={onClick}
            className={className}
            color={color}
            variant={variant}
            type={type}
            {...props}
        >
            {text}
        </AntButton>
    );
};

export default Button;
