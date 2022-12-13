import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

type LayoutProps = {
    children?: React.ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
        <style jsx global>{`
      body {
        margin: 0;
        font-family:"montserrat"
      }
    `}</style>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout