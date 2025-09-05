import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RoleForge - AI-Enhanced TTRPG Platform',
  description: 'The ultimate virtual tabletop for tabletop role-playing games. Create characters, manage campaigns, and play with AI assistance.',
  keywords: ['TTRPG', 'D&D', 'virtual tabletop', 'AI', 'role-playing games', 'character creation', 'campaign management'],
  authors: [{ name: 'RoleForge Team' }],
  creator: 'RoleForge',
  publisher: 'RoleForge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roleforge.ai',
    title: 'RoleForge - AI-Enhanced TTRPG Platform',
    description: 'The ultimate virtual tabletop for tabletop role-playing games. Create characters, manage campaigns, and play with AI assistance.',
    siteName: 'RoleForge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoleForge - AI-Enhanced TTRPG Platform',
    description: 'The ultimate virtual tabletop for tabletop role-playing games. Create characters, manage campaigns, and play with AI assistance.',
    creator: '@roleforge',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, 'min-h-screen antialiased')}>
        {children}
      </body>
    </html>
  )
}

