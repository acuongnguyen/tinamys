import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar, AppSider, AppHeader } from '@/components';
import { GlobalContextProvider } from './Context/store';
import { Layout } from 'antd';

// export const metadata: Metadata = {
//   title: 'TinaMys',
//   description: '',
// }
export default function RootLayout({
  children,
  hideNavFooter,
  loggedIn,
}: {
  children: React.ReactNode,
  hideNavFooter?: boolean,
  loggedIn: boolean,
}) {
  console.log('loggedIn-layout', loggedIn);
  return (
    <html lang="en">
      <head>
        <title>TinaMys</title>
        <meta name='description' content='' />
      </head>
      <body className="relative" >
        {!loggedIn ? (
          <Layout>
            {!hideNavFooter && <Navbar />}
            {children}
            {!hideNavFooter && <Footer />}
          </Layout>
        ) : (
          <Layout style={{ minHeight: '100vh', height: 'calc(100vh)' }}>
            <AppHeader />
            <Layout style={{ minHeight: '100vh' }} >
              <AppSider />
              <Layout style={{ minHeight: '90vh' }}>
                {children}
              </Layout>
            </Layout>
          </Layout>
        )}
      </body>
    </html>
  )
}
