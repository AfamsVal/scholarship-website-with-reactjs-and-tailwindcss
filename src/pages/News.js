import React from 'react'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <>
      <div className='mt-24 px-auto py-36 bg-gray-500  bg-no-repeat bg-news grid grid-cols-12 gap-1'>
        <div className='text-center col-span-12 font-bold text-white text-3xl'>LATEST NEWS</div>
      </div>
      <div className='px-2 md:px-auto py-14 bg-gray-100 grid md:mx-10 grid-cols-12 md:gap-6'>
        <div className='mb-8 md:mb-1 col-span-12 md:col-span-4 border-b-4 border-indigo-900'>
          <div className='max-w-md px-10 py-12 bg-white rounded-t-lg shadow-lg'>
            <h2 className='text-gray-900 text-xl font-bold leading-snug'>
              Getting Started with Tailwind CSS Custom Forms
            </h2>
            <p className='mt-2 text-base'>
              In this tutorial, I show you how to install the Tailwind CSS Custom Forms plugin and
              get started using it.
            </p>
            <Link to='/#' className='mt-6 inline-block text-indigo-900 text-base'>
              Read more
            </Link>
          </div>
        </div>
        <div className='mb-8 md:mb-1 col-span-12 md:col-span-4 border-b-4 border-indigo-900'>
          <div className='max-w-md px-10 py-12 bg-white rounded-t-lg shadow-lg'>
            <h2 className='text-gray-900 text-xl font-bold leading-snug'>
              Getting Started with Tailwind CSS Custom Forms
            </h2>
            <p className='mt-2 text-base'>
              In this tutorial, I show you how to install the Tailwind CSS Custom Forms plugin and
              get started using it.
            </p>
            <Link to='/#' className='mt-6 inline-block text-indigo-900 text-base'>
              Read more
            </Link>
          </div>
        </div>
        <div className='mb-8 md:mb-1 col-span-12 md:col-span-4 border-b-4 border-indigo-900'>
          <div className='max-w-md px-10 py-12 bg-white rounded-t-lg shadow-lg'>
            <h2 className='text-gray-900 text-xl font-bold leading-snug'>
              Getting Started with Tailwind CSS Custom Forms
            </h2>
            <p className='mt-2 text-base'>
              In this tutorial, I show you how to install the Tailwind CSS Custom Forms plugin and
              get started using it.
            </p>
            <Link to='/#' className='mt-6 inline-block text-indigo-900 text-base'>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
