import Button from "../atoms/Button";
import Input from "../atoms/Input";
import {SearchOutlined} from "@ant-design/icons";

const SearchInput = ({placeholder, value, onChange}) => {
    return (
        <>
            <Input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full"
            />
            <Button
                className="border-0"
                icon={<SearchOutlined />}
            />
        </>
    );
};

export default SearchInput;
