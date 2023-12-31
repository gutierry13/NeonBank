import './globals.css'
import { Inter,Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'],variable:'--font-inter' })
const poppins = Poppins({ subsets: ['latin'] ,weight:['400','500','600','800'],variable:'--font-poppins'})

export const metadata = {
  title: 'Neon',
  description: 'Neon bank landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>{children}</body>
    </html>
  )
}
