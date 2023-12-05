import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar, AppSider, AppHeader } from '@/components';
import { GlobalContextProvider, useGlobalContext } from './Context/store';
import { Layout } from 'antd';

// export const metadata: Metadata = {
//   title: 'TinaMys',
//   description: '',
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <GlobalContextProvider>
      <html lang="en">
        <head>
          <title>TinaMys</title>
          <meta name='description' content='' />
        </head>
        <body className="relative" >
          {children}
        </body>
      </html>
    </GlobalContextProvider>
  )
}
