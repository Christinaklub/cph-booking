import React from 'react'
import Footer from '../molecules/Footer'
import Header from '../molecules/Header'


export default function DefaultLayout({children}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
