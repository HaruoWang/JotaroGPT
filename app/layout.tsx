import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Jotaro GPT",
  description:
    "Jotaro GPT是個以《JOJO的奇妙冒險：星塵鬥士》角色空條承太郎口吻進行回覆的AI機器人"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning={true}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
