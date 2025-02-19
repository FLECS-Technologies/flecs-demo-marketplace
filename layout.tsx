import { Inter, Roboto_Flex } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
const roboto = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  )
}

