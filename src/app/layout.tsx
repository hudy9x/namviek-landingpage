import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { fontInter, fontJosefinSan } from '@/utils/fonts'
import Head from 'next/head'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    template: 'Namviek',
    default: 'Namviek - The open source task manager for super tiny teams',
  },
  description:
    'Do not mind the cost any more, just do your work now. Namviek has a lot of features that helps you run your team with a low budget',
}


const GA_TRACKING_ID = 'GTM-THJC2383'

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
      {/* <Head> */}
      {/*         <script dangerouslySetInnerHTML={{ */}
      {/*           __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': */}
      {/* new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], */}
      {/* j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= */}
      {/* 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); */}
      {/* })(window,document,'script','dataLayer','${GA_TRACKING_ID}');`, */}
      {/*         }} /> */}
      <Script id="ga-id">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GA_TRACKING_ID}');`}
      </Script>
      {/* </Head> */}
      <body className="h-screen bg-black">
        <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {children}
      </body>
    </html>
  )
}
