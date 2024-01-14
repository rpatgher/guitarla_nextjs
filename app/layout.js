import { Outfit } from 'next/font/google'

// ************ Styles ************
import 'normalize.css/normalize.css';
import '../styles/globals.css'

// ********** Components **********
import Header from '../components/header';
import Footer from '../components/footer';

import CartProvider from './cart-provider';


const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'GuitarLA - Next.js',
  description: 'In GuitarLA you can find the best guitars in the world and even a blog to learn how to play them and know more about music.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        <CartProvider>
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  )
}
