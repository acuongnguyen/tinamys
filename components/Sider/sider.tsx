"use client";
import Link from 'next/link';
import { Layout, Menu, theme } from 'antd';
import { useEffect, useState } from 'react';
const { Sider } = Layout;

const AppSider = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [filter, setFilter] = useState<string>('');
    const { token: { colorBgContainer } } = theme.useToken();
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: '#ffffff', height: '100vh' }}>
            <div className="demo-logo-vertical" />
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        Trang chủ
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link href="/blog" style={{ textDecoration: 'none' }}>
                        Blog
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider >
    );
};

export default AppSider;
