import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Docker Project',
  description: 'A test project | JSM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='max-w-md mx-auto p-5'>
          <nav className='flex gap-x-5'>
            <Link href="/" className='uppercase'>Home</Link>
            <Link href="/list" className='uppercase'>List</Link>
            <Link href="/create" className='uppercase'>Create</Link>
          </nav>
        </header>
        <main className='max-w-md mx-auto p-5'>
          {children}
        </main>
      </body>
    </html>
  )
}
