import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/utils/theme-provider";
import { ClerkProvider } from '@clerk/nextjs';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export const metadata = {
  title: {
    default: 'Mysocials',
    template: '%s | Mysocials',
  },
  description: 'Open-Source link in bio tool for content creaters, developers and enthusiasts.',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader
              color="#e11d48"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 0px #e11d48,0 0 0px #e11d48"
              template='<div className="bar" role="bar"><div className="peg"></div></div><div className="spinner" role="spinner"><div className="spinner-icon"></div></div>'
              zIndex={1600}
              showAtBottom={false}
            />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
