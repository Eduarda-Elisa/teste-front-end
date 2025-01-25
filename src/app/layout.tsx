import type { Metadata } from "next"
import "../styles/global.scss"

export const metadata: Metadata = {
  title: "Econverse",
  description: "Encontre os melhores produtos com os melhores preços",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

