import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div>
        <div className='Header'>
            <Navbar />
            <Header />
        </div>
        {children}
        <Footer />
    </div>
  )
}

export default Layout