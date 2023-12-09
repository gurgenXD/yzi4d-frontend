import "../../public/scss/style.scss";

import type { Metadata } from "next";

import Footer from "@/app/components/global/Footer";
import Header from "@/app/components/global/Header";
import Head from "@/app/components/global/Head";
import OffCanvas from "@/app/components/global/OffCanvas";
import Calculator from "@/app/components/global/Calculator";
import ScrollToTop from "@/app/components/global/ScrollToTop";
import CallToAction from "@/app/components/global/CallToAction";
import Cookies from "@/app/components/global/cookies/Cookies";
import Script from "next/script";
import Navigation from "@/app/components/global/Navigation";

export const metadata: Metadata = {
  title: "Поликлиника УЗИ 4Д",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="h-100">
      <Head />
      <body className="d-flex flex-column h-100">
        <Header />
        <Navigation />
        <OffCanvas />
        <Cookies />

        {children}

        <CallToAction />
        <Footer />
        <Calculator />
        <ScrollToTop />

        <Script src="/js/bootstrap.js" type="text/javascript" />
        <Script src="/js/app.js" type="text/javascript" />
        <Script src="/blind/js/bvi.js" type="text/javascript" />
        {/* <Script src="https://unpkg.com/react-input-mask/dist/react-input-mask.min.js" /> */}
      </body>
    </html>
  );
}
