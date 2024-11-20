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
const TopNav = () => {
    const [current, setCurrent] = useState("mail");
    const onClick = e => {
        console.log("click ", e);
        setCurrent(e.key);
    };
    return (
        <>
        {/* <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"></div> */}
            <div className="flex justify-between py-[10px] items-center md:w-[80vw] xl: w-[90vw]">
                {/* <Title
                    level={3}
                    style={{margin: 0}}
                >
                    MyApp
                </Title> */}
                <span className="text-[25px]">MyApp</span>
                <div className="flex gap-[20px] text-[10px]">
                    <button>로그인</button>
                    <button>회원가입</button>
                    <button>장바구니</button>
                    <button>마이페이지</button>
                    <button>게시판</button>
                </div>
            </div>
        </>
    );
};
export default TopNav;