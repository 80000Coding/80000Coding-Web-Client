import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'

import '@80000coding/ui/dist/index.css'
import './globals.css'

import { Providers } from './providers'

const noto = Noto_Sans_KR({ weight: ['400', '500', '700'], variable: '--font-noto', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${noto.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
