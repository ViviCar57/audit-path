import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['400', '500', '600', '700'] })
export const metadata: Metadata = { title: 'Maya Bennett | Miami Luxury Real Estate Advisor', description: 'Maya Bennett helps Miami homeowners strategically sell luxury properties with personalized representation and local market expertise.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light dark', themeColor: [{ media: '(prefers-color-scheme: light)', color: '#f5f1e9' }, { media: '(prefers-color-scheme: dark)', color: '#302d28' }] }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body className={`${inter.variable} ${cormorant.variable} antialiased`}>{children}</body></html> }

// Runs before paint so the saved or system theme applies without a light-mode flash.
const themeScript = `try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}`
