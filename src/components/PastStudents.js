import React from 'react'
import pics1 from '../assets/testimony/a-sch.jpg'
import pics2 from '../assets/testimony/b-sch.jpg'
import pics3 from '../assets/testimony/c-sch.jpg'
import pics4 from '../assets/testimony/d-sch.jpg'
import pics5 from '../assets/testimony/e-sch.jpg'

const PastStudents = () => {
  return (
    <div className='bg-white pb-12'>
      <div className='mt-20 pt-12 grid grid-cols-12 gap-1'>
        <div className='col-span-12 md:col-start-4 md:col-span-6'>
          <h1 className='text-3xl md:text-4xl font-bold text-center text-indigo-900'>
            Our Past Students
          </h1>
        </div>
      </div>
      <div className='mt-16 grid grid-cols-12 md:grid-cols-10 gap-4 mx-2 md:mx-12'>
        <div className='col-span-6 sm:col-span-3 md:col-span-2 bg-white rounded-t-lg shadow-md'>
          <img src={pics1} alt='testimony' className='rounded-t-lg mx-auto w-full' />
          <p className='text-center font-bold py-2  text-gray-500 italic'>~ Arinze ~</p>
        </div>
        <div className='col-span-6 sm:col-span-3 md:col-span-2 bg-white rounded-t-lg shadow-md'>
          <img src={pics2} alt='testimony' className='rounded-t-lg mx-auto w-full' />
          <p className='text-center font-bold py-2  text-gray-500 italic'>~ Chi ~</p>
        </div>
        <div className='col-span-6 sm:col-span-3 md:col-span-2 bg-white rounded-t-lg shadow-md'>
          <img src={pics3} alt='testimony' className='rounded-t-lg mx-auto w-full' />
          <p className='text-center font-bold py-2  text-gray-500 italic'>~ Amanda ~</p>
        </div>
        <div className='col-span-6 sm:col-span-3 md:col-span-2 bg-white rounded-t-lg shadow-md'>
          <img src={pics4} alt='testimony' className='rounded-t-lg mx-auto w-full' />
          <p className='text-center font-bold py-2  text-gray-500 italic'>~ Fin ~</p>
        </div>
        <div className='col-span-6 sm:col-span-3 md:col-span-2 bg-white rounded-t-lg shadow-md'>
          <img src={pics5} alt='testimony' className='rounded-t-lg mx-auto w-full' />
          <p className='text-center font-bold py-2  text-gray-500 italic'>~ Tony ~</p>
        </div>
      </div>
    </div>
  )
}

export default PastStudents
