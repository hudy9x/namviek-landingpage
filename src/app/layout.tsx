import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { fontInter, fontJosefinSan } from '@/utils/fonts'

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
        fontInter.variable,
        fontJosefinSan.variable,
      )}
    >
      <body className="h-screen bg-black">{children}</body>
    </html>
  )
}
