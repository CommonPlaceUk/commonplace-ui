import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { NavBar } from './layout/Navbar/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-50 text-gray-800 antialiased`}>
        <NavBar
          navItems={[
            { label: 'Write To Your MP', href: '/email' },
            { label: 'Political Profiles', href: '/profile' },
            { label: 'Raise A Petition', href: '/petition' }
          ]}
        />
        <main className='max-w-8xl container mx-auto px-4 py-8'>{children}</main>
      </body>
    </html>
  )
}
