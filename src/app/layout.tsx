import "../styles/tailwind.css"

import type { Metadata } from "next"

import { cx } from "@/utils/cx"

import { raleway } from "./fonts"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cx(
          "max-w-screen-2xl mx-auto antialiased bg-background scroll-smooth font-sans text-base text-neutral-700",
          raleway.variable
        )}>
        {children}
      </body>
    </html>
  )
}
