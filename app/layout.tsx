import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components';
import { GlobalContextProvider } from './Context/store';

// export const metadata: Metadata = {
//   title: 'TinaMys',
//   description: '',
// }

export default function RootLayout({
  children,
  hideNavFooter,
}: {
  children: React.ReactNode,
  hideNavFooter?: boolean,
}) {
  return (
    <html lang="en">
      <head>
        <title>TinaMys</title>
        <meta name='description' content='' />
      </head>
      <body className="relative">
        <GlobalContextProvider>
          {!hideNavFooter && <Navbar />}
          {children}
          {!hideNavFooter && <Footer />}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
