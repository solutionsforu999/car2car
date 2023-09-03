"use client"
import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'
import { Provider } from 'react-redux';
import store from '@/features/store';

// export const metadata = {
//   title: 'Car2Car',
//   description: 'Discover the Cars Now!',
// }

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html className='scroll-smooth' style={{scrollBehavior:'smooth !important'}} lang="en">

        <body>
          <Navbar />
          {children}
          <Footer />
        </body>

      </html>
    </Provider>
  )
}
