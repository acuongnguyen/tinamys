import React from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { useGlobalContext } from '@/app/Context/store';

const { Header } = Layout;

const AppHeader = () => {
    const { loggedIn, setLoggedIn } = useGlobalContext();
    console.log('loggedIn-header', loggedIn);
    const handleLogout = () => {
        setLoggedIn(false);
    };
    return (
        <Header style={{ maxHeight: '10vh', backgroundColor: '#ffffff' }}>
            <div className="logo" />
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                <Link href="/" className='flex justify-center items-center'>
                    <Image src="/logo.svg" alt="Car Hub Logo" width={236} height={36} className="object-contain"></Image>
                </Link>

                <Menu.Item key="2">Sản phẩm</Menu.Item>
                <Menu.Item key="3">Giới thiệu</Menu.Item>
                <Menu.Item key="4">Search</Menu.Item>
                {!loggedIn && (
                    <Menu.Item key="5" onClick={handleLogout}>Đăng xuất</Menu.Item>
                )}
            </Menu>
        </Header >
    );
};

export default AppHeader;
