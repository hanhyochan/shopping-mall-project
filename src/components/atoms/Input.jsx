import {Input as AntdInput} from "antd";

const Input = ({placeholder, value, onChange, className, ...props}) => {
    return (
        <AntdInput
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
            className={`text-base ${className}`}
            {...props}
        />
    );
};

export default Input;
