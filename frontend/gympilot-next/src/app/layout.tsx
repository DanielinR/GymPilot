import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/App.css'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GymPilot',
  description: 'Gym trainings register app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} antialiased'}>
        <div className='z-0 flex h-screen w-screen overflow-hidden'>
          <Navbar></Navbar>
          <main className='bg-color-primary relative h-full w-full flex-1 overflow-auto transition-width'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
