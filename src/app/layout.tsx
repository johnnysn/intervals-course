import type { Metadata } from 'next'
import { poppins } from './fonts';
import './globals.css'

export const metadata: Metadata = {
  title: 'Intervals',
  description: 'Aplicativo de treino intervalado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} min-h-screen`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
