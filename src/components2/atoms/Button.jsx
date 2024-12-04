import {Button as AntButton} from "antd";

const Button = ({children, antDesign = false, ...props}) => {
    if (antDesign) {
        return <AntButton {...props}>{children}</AntButton>;
    }

    // 기본 HTML 버튼
    return <button {...props}>{children}</button>;
};

export default Button;
