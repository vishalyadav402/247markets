import React from 'react'
import Header from './Header'
import Footer from './Footer'


const Master = ({children}) => {
  return (
    <div>
        <Header/>
        <div className='pt-28 md:my-5 min-h-[44.5vh]'>
          {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Master