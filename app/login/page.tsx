"use client"
import React, { useEffect, useState } from 'react';
import RootLayout from '../layout';
import LoginForm from '@/components/Login/LoginForm';
import { GlobalContextProvider, useGlobalContext } from '../Context/store';
import { useRouter } from 'next/router';

const Login = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loggedIn, setLoggedIn } = useGlobalContext();

    const handleUsernameChange = (e: any) => {
        setEmailOrUsername(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const router = useRouter();


    const handleLogin = async () => {
        try {

            const loginData = {
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
                const { accessToken, refreshToken, user } = responseData.data;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                if (user) {
                    setLoggedIn(true);
                    console.log('Login successful');
                    console.log('loggedIn', loggedIn);
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

    useEffect(() => {
        // Your logic to execute after successful login
        if (loggedIn) {
            console.log('User has logged in');
            // Perform any actions after successful login
            // Redirect, update UI, etc.
        }
    }, [loggedIn]);
    return (
        <RootLayout hideNavFooter={true} loggedIn={false}>
            <LoginForm
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
                handleLogin={handleLogin}
                router={router}
            />
        </RootLayout>
    );
};

export default Login;
