import clsx from "clsx"
import './global.css'
import type { Metadata } from "next"
import { Geist, Lora } from 'next/font/google'


export const metadata: Metadata = {
  title: "next-starter-template",
  description: "next starter template",
}

const geist = Geist({ weight: ['400'], subsets: ['latin'] })
const lora  =  Lora({ weight: ['400'], subsets: ['latin', 'cyrillic'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={clsx(geist.className, lora.className)}>
      <body>{children}</body>
    </html>
  )
}
