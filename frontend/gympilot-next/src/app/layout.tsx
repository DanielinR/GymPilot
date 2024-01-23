import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/App.css'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '100'
})

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
      <body className={'${poppins.className} antialiased'}>
        {children}
      </body>
      <Script src='scripts/screenSize.js'/>
    </html>
  )
}
