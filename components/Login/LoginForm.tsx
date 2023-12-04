import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';

const LoginForm = ({ handleUsernameChange, handlePasswordChange, handleLogin, router }: any) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loggedInSuccessfully = await handleLogin();
        if (loggedInSuccessfully) {
            router.push('/');
        }
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: "url('https://tinamys.com/_next/static/media/loginBanner.f7fc6e11.svg')" }}></div>
            <div className="absolute top-4 right-4 ">
                <Link href="/" className='flex justify-center items-center'>
                    <Image src="/logo.svg" alt="Car Hub Logo" width={236} height={36} ></Image>
                </Link>

            </div>
            <form className="bg-white bg-opacity-80 p-8 rounded shadow-lg z-10" onSubmit={handleSubmit}>
                <h2 className="text-center text-3xl font-semibold mb-4">ĐĂNG NHẬP</h2>
                <p className="text-center mb-4 text-sm text-gray-500">Hoàn thành các thông tin chi tiết dưới đây</p>

                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Email hoặc tên đăng nhập:</label>
                    <input type="text" id="credential" name="credential" required className="w-full border border-gray-300 rounded px-3 py-2" onChange={handleUsernameChange} />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Mật khẩu:</label>
                    <input type="password" id="password" name="password" required className="w-full border border-gray-300 rounded px-3 py-2" onChange={handlePasswordChange} />
                </div>

                <div className="flex items-center justify-between mb-2">
                    <a href="#" className="text-sm text-blue-500 hover:underline">Quên mật khẩu?</a>
                </div>

                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full mb-2"
                        onClick={handleSubmit}
                    >
                        Đăng nhập
                    </button>
                </div>

                <div className="text-center">
                    <button type="button" className="bg-white text-base font-semibold py-2 px-4 border border-gray-300 rounded w-full mb-2 flex items-center justify-center">
                        <img src="/logogg.png" alt="Google Logo" className="w-6 h-6 mr-2" />
                        Đăng nhập bằng Google
                    </button>
                    <p className="text-sm text-gray-500">Bạn chưa có tài khoản? <a href="#" className="text-blue-500 hover:underline">Đăng ký ngay</a></p>
                </div>
            </form>
            <div className="hidden lg:block w-1/3 px-4">
            </div>
        </div>
    );
};

export default LoginForm;
