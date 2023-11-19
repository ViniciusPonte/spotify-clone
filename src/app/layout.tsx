'use client'
import { NavHeader } from '@/components/layout/nav-header'
import { Sidebar } from '@/components/layout/sidebar'
import { Footer } from '@/components/layout/footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-black h-full">
          <div className="p-2 grid grid-cols-layout grid-rows-layout gap-2 h-full">
            <section className="flex flex-col gap-2 h-full">
              <NavHeader />
              <Sidebar />
            </section>
            <main className="h-full">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
