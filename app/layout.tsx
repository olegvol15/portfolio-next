import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/Header"

export const metadata: Metadata = {
  title: "Dev Lab Portfolio",
  description: "My portfolio and learning journey as a frontend developer"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <Header />
        {children}
      </body>
    </html>
  )
}



