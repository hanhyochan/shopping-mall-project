import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
    {
        label: '운동복',
        key: 'SubMenu1',
        icon: <SettingOutlined />,
        children: [
            {
                label: 'Option 1',
                key: 'setting:1',
            },
            {
                label: 'Option 2',
                key: 'setting:2',
            },
        ]
    },
    {
        label: '운동복',
        key: 'SubMenu2',
        icon: <SettingOutlined />,
        children: [
            {
                label: 'Option 1',
                key: 'setting:1',
            },
            {
                label: 'Option 2',
                key: 'setting:2',
            },
        ]
    },
    {
        label: '운동복',
        key: 'SubMenu3',
        icon: <SettingOutlined />,
        children: [
            {
                label: 'Option 1',
                key: 'setting:1',
            },
            {
                label: 'Option 2',
                key: 'setting:2',
            },
        ]
    },
    {
        label: '운동복',
        key: 'SubMenu4',
        icon: <SettingOutlined />,
        children: [
            {
                label: 'Option 1',
                key: 'setting:1',
            },
            {
                label: 'Option 2',
                key: 'setting:2',
            },
        ]
    },
    {
        label: '운동복',
        key: 'SubMenu5',
        icon: <SettingOutlined />,
        children: [
            {
                label: 'Option 1',
                key: 'setting:1',
            },
            {
                label: 'Option 2',
                key: 'setting:2',
            },
        ]
    },
    {
        label: '운동복',
        key: 'SubMenu6',
        icon: <SettingOutlined />,
        children: [
            {
                label: 'Option 1',
                key: 'setting:1',
            },
            {
                label: 'Option 2',
                key: 'setting:2',
            },
        ]
    }
];
const Layout2 = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
        하이
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
        </>
    )
};
export default Layout2;