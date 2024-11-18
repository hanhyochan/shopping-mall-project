import React, {useState} from "react";
import {AppstoreOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import {Typography} from "antd";

const {Title} = Typography;
const items = [
    {
        label: "운동복",
        key: "SubMenu1",
        icon: <SettingOutlined />,
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
        icon: <SettingOutlined />,
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
        key: "SubMenu3",
        icon: <SettingOutlined />,
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
        key: "SubMenu4",
        icon: <SettingOutlined />,
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
        key: "SubMenu5",
        icon: <SettingOutlined />,
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
        key: "SubMenu6",
        icon: <SettingOutlined />,
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
    const [current, setCurrent] = useState("mail");
    const onClick = e => {
        console.log("click ", e);
        setCurrent(e.key);
    };
    return (
        <>
            <div className="flex justify-between">
                <Title
                    level={3}
                    style={{margin: 0}}
                >
                    MyApp
                </Title>
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                />
            </div>
        </>
    );
};
export default CategoryNav;