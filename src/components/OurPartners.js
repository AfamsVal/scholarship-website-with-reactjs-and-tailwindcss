import React from 'react'
import pics1 from '../assets/partners/1.png'
import pics2 from '../assets/partners/b.jpg'
import pics3 from '../assets/partners/2.png'
import pics4 from '../assets/partners/d.jpg'

const OurPartners = () => {
  return (
    <div className='bg-white pb-14'>
      <div className='pt-12 grid grid-cols-12 gap-1'>
        <div className='col-start-4 col-span-6'>
          <h1 className='text-3xl md:text-4xl font-bold text-center text-indigo-900'>
            Our Partners
          </h1>
        </div>
      </div>
      <div className='mt-16 grid grid-cols-12 gap-8 mx-2 md:mx-12'>
        <div className='col-span-6 md:col-span-3 bg-white rounded-t-lg shadow-md'>
          <img src={pics1} alt='partners' className='rounded-t-lg mx-auto w-full' />
        </div>
        <div className='col-span-6 md:col-span-3 bg-white rounded-t-lg shadow-md'>
          <img src={pics2} alt='partners' className='rounded-t-lg mx-auto w-full' />
        </div>
        <div className='col-span-6 md:col-span-3 bg-white rounded-t-lg shadow-md'>
          <img src={pics3} alt='partners' className='rounded-t-lg mx-auto w-full' />
        </div>
        <div className='col-span-6 md:col-span-3 bg-white rounded-t-lg shadow-md'>
          <img src={pics4} alt='testimony' className='rounded-t-lg mx-auto w-full' />
        </div>
      </div>
    </div>
  )
}

export default OurPartners
