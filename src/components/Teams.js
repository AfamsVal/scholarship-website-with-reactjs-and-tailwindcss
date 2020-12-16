import React from 'react'
import pics1 from '../assets/team/a.jpg'
import pics2 from '../assets/team/b.jpg'
import pics3 from '../assets/team/c.jpg'
import pics4 from '../assets/team/d.jpg'

const Teams = () => {
  return (
    <>
      <div className='mt-20 grid grid-cols-12 gap-1 px-2'>
        <div className='col-span-12 md:col-start-4 md:col-span-6'>
          <h1 className='text-4xl md:text-4xl font-bold text-center text-indigo-900'>
            Meet the Team
          </h1>
        </div>
      </div>
      <div className='mt-20 grid grid-cols-12 md:gap-14'>
        <div className='col-span-6 md:col-start-3 md:col-span-4 px-3'>
          <img src={pics1} alt='partners' className='md:mx-auto w-full' />
          <p className='font-bold text-xl'>Daniel Musterly</p>
          <small className='text-sm text-gray-500'>Director</small>
        </div>
        <div className='md:pt-24 col-span-6 md:col-span-4 px-3 mt-8 md:mt-1'>
          <img src={pics2} alt='partners' className='md:mx-auto w-full' />
          <p className='font-bold text-xl'>Jane Muster</p>
          <small className='text-sm text-gray-500'>PRO</small>
        </div>
      </div>
      <div className='mt-20 md:mt-0 mb-12 grid grid-cols-12 md:gap-14'>
        <div className='col-span-6 md:col-start-3 md:col-span-4 px-3'>
          <img src={pics3} alt='partners' className='md:mx-auto w-full' />
          <p className='font-bold text-xl'>Nathan Litt</p>
          <small className='text-sm text-gray-500'>General Secretary</small>
        </div>
        <div className='md:pt-24 col-span-6 md:col-span-4 px-3 mt-8 md:mt-1'>
          <img src={pics4} alt='partners' className='md:mx-auto w-full' />
          <p className='font-bold text-xl'>Mandy Renard</p>
          <small className='text-sm text-gray-500'>Customer Service</small>
        </div>
      </div>
    </>
  )
}

export default Teams
