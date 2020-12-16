import React from 'react'

const Services = () => {
  return (
    <>
      <div className='mt-20 grid grid-cols-12 gap-1 px-2'>
        <div className='col-span-12 md:col-start-4 md:col-span-6'>
          <h1 className='text-4xl md:text-4xl font-bold text-center text-indigo-900'>
            Our Services
          </h1>
          <p className='text-center text-lg mt-4'>
            We at Afristud will guide and assist you with a guaranteed hitch free admission, visa
            and accommodation. We go beyond that by rendering other additional services you may
            require, all through the duration of your studies.
          </p>
        </div>
      </div>
      <div className='mt-20 grid grid-cols-12 gap-8 px-2'>
        <div className='col-span-12 md:col-span-4 bg-white px-8 py-8 rounded-lg shadow-md'>
          <p className='text-center'>
            <i className='fa fa-graduation-cap fa-2x text-indigo-900' aria-hidden='true' />
          </p>
          <h1 className='text-xl font-bold text-center my-4 text-indigo-900'>Study and Work</h1>
          <p className='text-center text-lg mt-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='col-span-12 md:col-span-4 bg-white px-8 py-8 rounded-lg shadow-md'>
          <p className='text-center'>
            <i className='fa fa-book fa-2x text-indigo-900' aria-hidden='true' />
          </p>
          <h1 className='text-xl font-bold text-center my-4 text-indigo-900'>Scholarship</h1>
          <p className='text-center text-lg mt-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='col-span-12 md:col-span-4 bg-white px-8 py-8 rounded-lg shadow-md'>
          <p className='text-center'>
            <i className='fa fa-globe fa-2x text-indigo-900' aria-hidden='true' />
          </p>
          <h1 className='text-xl font-bold text-center my-4 text-indigo-900'>
            Visa and Accommodation
          </h1>
          <p className='text-center text-lg mt-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  )
}

export default Services
