import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { fontInter } from '@/utils/fonts'
import Head from 'next/head'

export const metadata: Metadata = {
  title: {
    template: 'Namviek',
    default: 'Namviek - The open source task manager for super tiny teams',
  },
  description:
    'Do not mind the cost any more, just do your work now. Namviek has a lot of features that helps you run your team with a low budget',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        fontInter.variable
      )}
    >
      <Head>
        <link
          rel="canonical"
          href="https://namviek.com"
          key="canonical"
        />
      </Head>

      <body className="h-screen bg-black">{children}</body>
    </html>
  )
}
