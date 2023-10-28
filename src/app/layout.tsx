import '../../public/scss/style.scss'

import type { Metadata } from 'next'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Head from '@/app/components/Head'
import OffCanvas from '@/app/components/OffCanvas'
import Calculator from '@/app/components/Calculator'
import ScrollToTop from '@/app/components/ScrollToTop'
import CallToAction from '@/app/components/CallToAction'
import Script from 'next/script'


export const metadata: Metadata = {
  title: 'Поликлиника Узи4Д',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="h-100">
      <Head />
      <body className="d-flex flex-column h-100">
        <Header />
        <OffCanvas />

        {children}

        <CallToAction />

        <Footer />
        <Calculator />
        <ScrollToTop />

        <Script src="/js/bootstrap.js" type="text/javascript" />
        <Script src="/js/app.js" type="text/javascript" />
        <Script src="/blind/js/bvi.min.js" type="text/javascript" />
      </body>
    </html>
  )
}
