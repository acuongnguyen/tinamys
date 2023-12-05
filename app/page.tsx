"use client";
import { useGlobalContext } from './Context/store';
import { AppPersonal, CustomButton, Hero, AppTaskDay, AppCompany, Navbar, Footer, AppHeader, AppSider } from '@/components'
import { Layout } from 'antd';

import RootLayout from './layout';
const { Content } = Layout;

export default function Home() {
  const { loggedIn } = useGlobalContext();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  console.log('loggedIn-page', loggedIn);
  console.log('isLoggedIn-page', isLoggedIn);

  return (
    <main className="overflow-hidden">
      {!isLoggedIn ?
        <RootLayout>
          <Layout>
            {isLoggedIn ? '' : <Navbar />}
            <Hero />
            {isLoggedIn ? '' : <Footer />}
          </Layout>
        </RootLayout>
        :
        <RootLayout>
          <Layout style={{ minHeight: '100vh', height: 'calc(100vh)' }}>
            <AppHeader />
            <Layout style={{ minHeight: '100vh' }} >
              <AppSider />
              <Layout style={{ minHeight: '90vh' }}>
                <Content style={{ margin: '0px 16px 50px 16px', overflowY: 'auto' }}>
                  <div style={{ padding: 24, minHeight: 360 }}>
                    <AppTaskDay />
                    <AppCompany />
                    <AppPersonal />
                  </div>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </RootLayout>
      }
    </main >
  )
}
