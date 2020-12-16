import React from 'react'
import pics1 from '../assets/about/about-1.jpg'
import OurPartners from '../components/OurPartners'
import Teams from '../components/Teams'

const AboutUs = () => {
  return (
    <>
      <div className='my-24 px-auto py-36 bg-gray-500  bg-no-repeat bg-img grid grid-cols-12 gap-1'>
        <div className='text-center col-span-12 font-bold text-white text-3xl'>ABOUT US</div>
      </div>
      <div className='py-20 grid grid-cols-12 gap-1 bg-gray-100'>
        <div className='mx-2 md:mx-auto col-span-12 md:col-start-4 md:col-span-6'>
          <h1 className='text-3xl md:text-4xl font-bold text-center text-indigo-900'>
            Our Company
          </h1>
          <p className='text-center text-lg mt-4'>
            We at Afristud will guide and assist you with a guaranteed hitch free admission, visa
            and accommodation. <br />
            We go beyond that by rendering other additional services you may require, all through
            the duration of your studies.
          </p>
        </div>
      </div>
      <div className='mt-20 grid grid-cols-12 md:gap-14'>
        <div className='col-span-12 md:col-start-3 md:col-span-4 px-3'>
          <img src={pics1} alt='partners' className='rounded-t-lg md:mx-auto w-full' />
        </div>
        <div className='col-span-12 md:col-span-4 px-3 mt-8 md:mt-1'>
          <h1 className='text-3xl md:text-4xl text-center md:text-left font-bold text-indigo-900'>
            Our Vision
          </h1>
          <p className=' text-lg mt-4'>
            We at Afristud will guide and assist you with a guaranteed hitch free admission, visa
            and accommodation. <br />
            We go beyond that by rendering other additional services you may require, all through
            the duration of your studies.
            <br />
            <br />
            We at Afristud will guide and assist you with a guaranteed hitch free admission, visa
            and accommodation.
          </p>
        </div>
      </div>
      <Teams />
      <OurPartners />
    </>
  )
}

export default AboutUs
