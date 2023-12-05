"use client"
import React, { useEffect, useState } from 'react';
import RootLayout from '../layout';
import LoginForm from '@/components/Login/LoginForm';
import { useGlobalContext } from '../Context/store';

const Login = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loggedIn, setLoggedIn } = useGlobalContext();

    console.log('loggedIn-1', loggedIn);

    const handleUsernameChange = (e: any) => {
        setEmailOrUsername(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };
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
                if (accessToken) {
                    console.log('loggedIn-before', loggedIn);
                    setLoggedIn(true);
                    console.log('Login successful');
                    console.log('loggedIn-after', loggedIn);
                    localStorage.setItem('isLoggedIn', 'true');
                } else {
                    console.log('Login successful but no user info provided');
                }
            } else {
                // Handle login error (e.g., display error message)
                const errorData = await response.json();
                console.error('Login failed:', errorData.message);
            }
        } catch (error: any) {
            // Handle network or other errors
            console.error('Login failed:', error.message);
        }
    };

    useEffect(() => {
        console.log('loggedIn changed:', loggedIn);
        if (loggedIn) {
            window.location.href = '/';
        }
    }, [loggedIn]);

    const redirectToHome = () => {
        if (loggedIn) {
            window.location.href = '/';
        }
    };

    return (
        <RootLayout>
            <LoginForm
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
                handleLogin={handleLogin}
            />
        </RootLayout>
    );
};

export default Login;
