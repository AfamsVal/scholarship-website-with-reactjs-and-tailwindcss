import React from 'react'
import { Carousel } from 'antd'

const NewCarousel = () => {
  return (
    <>
      <Carousel autoplay className='mt-20' autoplaySpeed={5000}>
        <div className='bg-img-2'>
          <div className='mt-14 grid grid-cols-12 gap-4'>
            <div className='col-span-10 col-start-2 md:col-span-5 py-12 px-8  bg-opacity-50 bg-gray-900'>
              <h1 className='text-4xl md:text-5xl text-white font-bold'>Study in Europe</h1>
              <h1 className='text-3xl md:text-4xl text-white font-bold'>Hassle Free</h1>
              <h3 className='text-xl mb-6 text-white'>
                We provide Africans professional consultation, hitch-free guaranteed admission,
                visa, and accomodation to study in Europe.
              </h3>
              <p>
                <a
                  href='https://calendly.com/arize-afristud/15min'
                  target='_blank'
                  rel='noreferrer'
                  className='border border-indigo-900 bg-indigo-900 text-white rounded-md px-6 py-3 my-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-700 focus:outline-none focus:shadow-outline'
                >
                  GET STARTED
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* hidden md:inline-block */}
        {/* <div className='bg-img-1'>
          <div className='mt-24 md:mt-20 grid grid-cols-9 gap-4'>
            <div className='col-start-6 col-span-5 md:col-start-6 md:col-span-3'>
              <h1 className='text-2xl md:text-5xl font-bold'>WE MAKE SIMPLE</h1>
              <h1 className='text-2xl md:text-5xl font-bold'>Hassle Free</h1>
              <p className='mt-16'>
                <a
                  href='https://calendly.com/arize-afristud/15min'
                  target='_blank'
                  rel='noreferrer'
                  className='border border-indigo-900 bg-indigo-900 text-white rounded-md px-6 py-3 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-700 focus:outline-none focus:shadow-outline'
                >
                  GET STARTED
                </a>
              </p>
            </div>
          </div>
        </div> */}
        <div className='bg-img-3'>
          <div className='mt-14 grid grid-cols-12 gap-4'>
            <div className='col-span-10 col-start-2 md:col-span-5 py-12 px-8  bg-opacity-50 bg-gray-900'>
              <h1 className='text-4xl md:text-5xl text-white font-bold'>Register Today...</h1>
              <h1 className='text-3xl md:text-4xl text-white font-bold'>Secure Your Future</h1>
              <h3 className='text-xl mb-6 text-white'>
                We provide Africans professional consultation, hitch-free guaranteed admission,
                visa, and accomodation to study in Europe.
              </h3>
              <p>
                <a
                  href='https://calendly.com/arize-afristud/15min'
                  target='_blank'
                  rel='noreferrer'
                  className='border border-indigo-900 bg-indigo-900 text-white rounded-md px-6 py-3 my-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-700 focus:outline-none focus:shadow-outline'
                >
                  GET STARTED
                </a>
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  )
}

export default NewCarousel
