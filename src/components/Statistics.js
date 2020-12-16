import React, { useEffect, useState } from 'react'

const Statistics = () => {
  const [count, setCount] = useState({
    applicant: 0,
    admit: 0,
    visa: 0,
    work: 0
  })

  useEffect(() => {
    if (count.applicant < 500 || count.admit < 450 || count.visa < 350 || count.work < 200) {
      setCount({
        ...count,
        applicant: count.applicant < 500 ? count.applicant + 1 : count.applicant,
        admit: count.admit < 450 ? count.admit + 1 : count.admit,
        visa: count.visa < 350 ? count.visa + 1 : count.visa,
        work: count.work < 200 ? count.work + 1 : count.work
      })
    }
  }, [count.applicant])

  return (
    <div className='mt-20 px-auto py-40 bg-gray-700  px-10 md:px-1 bg-no-repeat bg-img grid grid-cols-12 gap-6 md:gap-28'>
      <div className='col-span-6 md:col-span-2 md:col-start-3'>
        <div className='col-span-1 py-10 bg-white rounded-full font-bold text-2xl text-indigo-900 text-center'>
          {count.applicant}
        </div>
        <p className='text-center text-white mt-6 font-bold'>APPLICANT</p>
      </div>
      <div className='col-span-6 md:col-span-2'>
        <div className='col-span-1 py-10 rounded-full font-bold text-2xl text-indigo-900 text-center bg-white'>
          {count.admit}
        </div>
        <p className='text-center text-white mt-6 font-bold'>ADMITED</p>
      </div>
      <div className='col-span-6 md:col-span-2 mt-10 md:mt-1'>
        <div className='col-span-1 py-10 rounded-full font-bold text-2xl text-indigo-900 text-center bg-white'>
          {count.visa}
        </div>
        <p className='text-center text-white mt-6 font-bold'>VISA ISSUED</p>
      </div>
      <div className='col-span-6 md:col-span-2 mt-10 md:mt-1'>
        <div className='col-span-1 py-10 rounded-full font-bold text-2xl text-indigo-900 text-center bg-white'>
          {count.work}
        </div>
        <p className='text-center text-white mt-6 font-bold'>WORK</p>
      </div>
    </div>
  )
}

export default Statistics
