import React from 'react'
import NewCarousel from '../components/NewCarousel'
import OurPartners from '../components/OurPartners'
import PastStudents from '../components/PastStudents'
import Services from '../components/Services'
import Statistics from '../components/Statistics'

const Landing = () => {
  return (
    <div className='pb-16 bg-gray-100'>
      <NewCarousel />
      <Services />
      <Statistics />
      <PastStudents />
      <OurPartners />
    </div>
  )
}

export default Landing
