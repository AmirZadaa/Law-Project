import React from 'react'
import './styles.css'
import '@/styles/globals.css'
import Footer from './_components/Footer'
import Header from './_components/header'

export const metadata = {
  title: 'Amir-Law',
  description: 'Amir LAW Advocates and Consultants',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link
          href="/logo.webp"
          rel="icon"
          type="image/svg+xml"
          sizes="32x32"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/logo.webp"
          rel="icon"
          type="image/svg+xml"
          sizes="32x32"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="description" content="This is Amir Law home page." />
      </head>
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
