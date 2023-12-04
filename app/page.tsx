"use client";
import { useEffect } from 'react';
import { useGlobalContext } from './Context/store';
import { AppPersonal, CustomButton, Hero, AppTaskDay, AppCompany } from '@/components'
import Image from 'next/image'
import { Layout } from 'antd';

import RootLayout from './layout';
const { Content } = Layout;

export default function Home() {
  const { loggedIn, setLoggedIn } = useGlobalContext();
  console.log('loggedIn', loggedIn);
  return (
    <main className="overflow-hidden">
      {!loggedIn ?
        <RootLayout hideNavFooter={false} loggedIn={loggedIn}>
          <Hero />
        </RootLayout>
        :
        <RootLayout hideNavFooter={true} loggedIn={loggedIn}>
          <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ margin: '0px 16px 50px 16px', overflowY: 'auto' }}>
              <div style={{ padding: 24, minHeight: 360 }}>
                <AppTaskDay />
                <AppCompany />
                <AppPersonal />
              </div>
            </Content>
          </Layout>
        </RootLayout>
      }
    </main >
  )
}
