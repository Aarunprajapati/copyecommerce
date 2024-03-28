import NavBar from '@/components/NavBar'
import './globals.css'
import { AuthContext } from './context/AuthContext'
import getCurrentuser from './(auth)/actions/getCurrentUser'
import { ToasterContext } from './context/HotToastContext'
import { CartProvider } from './context/CartProvider'

export const metadata = {
  title: 'Copy of E-commerce',
  description: 'E-commerce management',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentuser()
  return (
    <html lang="en">
      <body className='h-screen'>
        <AuthContext>
          <CartProvider>
          <ToasterContext/>
          <NavBar user={currentUser!}/>
          {children}
          </CartProvider>
        </AuthContext>
      </body>
    </html>
  )
}
