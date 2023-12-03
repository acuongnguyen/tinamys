import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components';
import { GlobalContextProvider } from './Context/store';

export const metadata: Metadata = {
  title: 'TinaMys',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <GlobalContextProvider>
          <Navbar />
          {children}
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  )
}
