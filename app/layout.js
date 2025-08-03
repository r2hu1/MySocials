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
    default: 'MySocials.',
    template: '%s | MySocials',
  },
  description: 'One link to bring all your social profiles into one place.',
   icons: {
    icon: '/favicon.svg', 
  },
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={poppins.className}
        suppressHydrationWarning
      >
        <body>
          <NextTopLoader
            color="hsl(229 100% 62%)"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 0px hsl(229 100% 62%),0 0 0px hsl(229 100% 62%)"
            template='<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />

          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange={false}
          >
            {children}
            <Toaster position="bottom-right" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

