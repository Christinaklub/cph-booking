import React from 'react'
import Footer from '../molecules/Footer'
import Header from '../molecules/Header'
import { useRouter } from 'next/router'


export default function DefaultLayout({children}) {
  const router = useRouter()
  return (
  
    <div>
{/* conditional rendering der kigger på hvor man befinder sig. for er du på andet en /login viser den din header og footer */}
        {router.pathname !== "/login" && <Header/>}
        {children}
        {router.pathname !== "/login" && <Footer/> }
    </div>
  )
}
