import {Input as AntdInput} from "antd";

const Input = ({placeholder, value, onChange, className, label, labelClassName, ...props}) => {
    return (
        <>
            {label && <label className={`mb-1 ${labelClassName}`}>{label}</label>}
            <AntdInput
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                className={`text-base ${className}`}
                {...props}
            />
        </>
    );
};

export default Input;
