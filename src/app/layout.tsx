import { CartProvider } from '@/contexts/cart-context'
import { Inter } from 'next/font/google'
import './globals.css'
import { link } from 'fs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Comforty',
  description: 'Created By Tanzeel Sarwar',
  icons: {
    icon: "/images/Logo Icon.png",
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

