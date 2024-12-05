import {Button as AntButton} from "antd";

const Button = ({text, antDesign = true, onClick, className, color, variant, type, icon, ...props}) => {
    if (!antDesign) {
        return (
            <button
                className={className}
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
            {icon}
        </AntButton>
    );
};

export default Button;
