"use client"
import React, { useState } from 'react';
import RootLayout from '../layout';
import LoginForm from '@/components/Login/LoginForm';

const Login = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: any) => {
        setEmailOrUsername(e.target.value);
        console.log('emailOrUsername', emailOrUsername);
    };

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
        console.log('email', email);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
        console.log('password', password);
    };

    const handleLogin = async () => {
        try {

            const loginData = {
                username: emailOrUsername,
                email: 'cuongvp1102@gmail.com',
                emailOrUsername: emailOrUsername,
                password: password,
            };
            console.log('loginData', loginData);

            const response = await fetch('https://dev.mys.tinasoft.com.vn/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const responseData = await response.json();
                const { accessToken, refreshToken, user } = responseData;

                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);

                if (user) {
                    console.log('Login successful');
                    console.log('User info:', user);
                    console.log('accessToken:', accessToken);
                    console.log('refreshToken:', refreshToken);
                } else {
                    console.log('Login successful but no user info provided');
                }
            } else {
                // Handle login error (e.g., display error message)
                const errorData = await response.json();
                console.error('Login failed:', errorData.message);
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Login failed:', error.message);
        }
    };

    return (
        <RootLayout hideNavFooter={true}>
            <LoginForm
                handleUsernameChange={handleUsernameChange}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleLogin={handleLogin}
            />
        </RootLayout>
    );
};

export default Login;
