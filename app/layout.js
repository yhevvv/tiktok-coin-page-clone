"uses client"

import './globals.css'
import { Inter } from 'next/font/google'

const inter = ({ subsets: ['latin'] })

export const metadata = {
  title: 'TikTok Coins: Buy and recharge Coins to send Gifts | TikTok',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className }>{children}</body>
    </html>
  )
}
