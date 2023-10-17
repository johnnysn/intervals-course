import type { Metadata } from 'next'
import { poppins } from './fonts';
import './globals.css'
import Header from './Header';
import Footer from './Footer';

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
        <Header />
        <div className="w-full flex justify-center">
          <main className="w-full max-w-screen-xl">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
