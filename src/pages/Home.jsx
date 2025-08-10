import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Effect from '../components/Effect'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <div>
        <Banner/>
        <Services/>

        <Testimonial/>
        <Effect/>
    </div>
  )
}

export default Home