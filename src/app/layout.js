import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnquirySticky from "@/components/layout/EnquirySticky";
import AOSInit from "@/components/layout/AOSInit";
import PageLoader from "@/components/layout/PageLoader";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata = {
  title: "Prestige | Premium Aluminium Doors & Windows",
  description: "Experience excellence in architectural innovation with Prestige aluminium systems.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  }
};

import { EnquiryProvider } from "@/context/EnquiryContext";
import EnquiryModal from "@/app/_components/EnquiryModal";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-screen flex flex-col">
        <EnquiryProvider>
          <PageLoader />
          <SmoothScroll />
          <AOSInit />
          <Navbar/>
          <main className="flex-1">
            {children}
          </main>
          <EnquirySticky />
          <Footer />
          <EnquiryModal />
        </EnquiryProvider>
        </body>
    </html>
  );
}

