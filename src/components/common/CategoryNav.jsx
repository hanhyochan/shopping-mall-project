import {SearchOutlined, MenuOutlined} from "@ant-design/icons";
import {Menu, Input, Button} from "antd";

const items = [
    {
        label: "의류",
        key: "SubMenu1",
        children: [
            {
                label: "Option 1",
                key: "SubMenu1:1",
            },
            {
                label: "Option 2",
                key: "SubMenu1:2",
            },
        ],
    },
    {
        label: "운동복",
        key: "SubMenu2",
        children: [
            {
                label: "Option 1",
                key: "SubMenu2:1",
            },
            {
                label: "Option 2",
                key: "SubMenu2:2",
            },
        ],
    },
    {
        label: "신발",
        key: "SubMenu3",
        children: [
            {
                label: "Option 1",
                key: "SubMenu3:1",
            },
            {
                label: "Option 2",
                key: "SubMenu3:2",
            },
        ],
    },
    {
        label: "악세서리",
        key: "SubMenu4",
        children: [
            {
                label: "Option 1",
                key: "SubMenu4:1",
            },
            {
                label: "Option 2",
                key: "SubMenu4:2",
            },
        ],
    },
    {
        label: "SALE",
        key: "SubMenu5",
        children: [
            {
                label: "Option 1",
                key: "SubMenu5:1",
            },
            {
                label: "Option 2",
                key: "SubMenu5:2",
            },
        ],
    },
];

const CategoryNav = () => {
    return (
        <div className="flex items-center justify-between gap-4 relative">
            <div>
                <Button
                    className="border-0"
                    icon={<MenuOutlined />}
                />
                <Button className="underline border-0">Best 10</Button>
            </div>

            <div className="flex-1 flex justify-center absolute left-1/2 transform -translate-x-1/2">
                <Menu
                    mode="horizontal"
                    items={items}
                    className="!border-0 min-w-[330px]"
                />
            </div>

            <div className="flex items-center gap-2 w-64">
                <Input
                    placeholder="상품을 검색해보세요"
                    className="w-full"
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
