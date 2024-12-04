import {Button as AntButton} from "antd";

const Button = ({children, antDesign = true, onClick, className, ...props}) => {
    if (!antDesign) {
        return (
            <button
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        );
    }

    return (
        <AntButton
            onClick={onClick}
            className={className}
            {...props}
        >
            {children}
        </AntButton>
    );
};

export default Button;
