import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Effect from '../components/Effect'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'

function Home() {
  return (
    <div>
        <Banner/>
        <Services/> 
        <Testimonial/>
        <Effect/>
        <Contact/>

    </div>
  )
}

export default Home