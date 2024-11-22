import {SearchOutlined, MenuOutlined} from "@ant-design/icons";
import {Menu, Input, Button} from "antd";
const items = [
    {
        label: "의류",
        key: "SubMenu1",
        children: [
            {
                label: "Option 1",
                key: "setting:1",
            },
            {
                label: "Option 2",
                key: "setting:2",
            },
        ],
    },
    {
        label: "운동복",
        key: "SubMenu2",
        children: [
            {
                label: "Option 1",
                key: "setting:1",
            },
            {
                label: "Option 2",
                key: "setting:2",
            },
        ],
    },
    {
        label: "신발",
        key: "SubMenu3",
        children: [
            {
                label: "Option 1",
                key: "setting:1",
            },
            {
                label: "Option 2",
                key: "setting:2",
            },
        ],
    },
    {
        label: "악세서리",
        key: "SubMenu4",
        children: [
            {
                label: "Option 1",
                key: "setting:1",
            },
            {
                label: "Option 2",
                key: "setting:2",
            },
        ],
    },
    {
        label: "SALE",
        key: "SubMenu5",
        children: [
            {
                label: "Option 1",
                key: "setting:1",
            },
            {
                label: "Option 2",
                key: "setting:2",
            },
        ],
    },
];

const CategoryNav = () => {
    return (
        <div className="flex items-center flex-col sm:flex-row justify-between gap-4 relative md:w-[80vw] xl: w-[90vw]">
            <div className="hidden md:block">
                <Button
                    className="border-0"
                    icon={<MenuOutlined />}
                />
                <Button className="underline border-0 text-base">Best 10</Button>
            </div>

            <div className="flex-1 flex justify-center static md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <Menu
                    mode="horizontal"
                    items={items}
                    className="!border-0 min-w-350 text-base"
                />
            </div>

            <div className="flex items-center gap-2 sm:w-250 w-full">
                <Input
                    placeholder="상품을 검색해보세요"
                    className="w-full text-base"
                />
                <Button
                    className="border-0"
                    icon={<SearchOutlined />}
                />
            </div>
        </div>
    );
};

export default CategoryNav;
