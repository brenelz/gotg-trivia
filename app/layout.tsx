import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Guardians of the Galaxy Trivia',
  description: 'Guardians of the Galaxy Trivia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-center">
          <h1 className="text-4xl mt-12 mb-4 font-bold">Guardians of the Galaxy Trivia</h1>
          {children}
        </div>
      </body>
    </html >
  )
}
