import '../static/scss/main.scss'
import React from 'react'
import { Plus_Jakarta_Sans, Kanit } from 'next/font/google'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })
const kanit = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={plus_jakarta_sans.className}>{children} TEST</body>
        </html>
    )
}
