import { Button, message } from 'antd'
import React, { useState } from 'react'

const ContactUs = () => {
  const [contact, setContact] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState()

  const onChangeText = e => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const submitFormHandle = async () => {
    setLoading(true)
    try {
      const res = await fetch(
        'https://us-central1-oppopromo-19201.cloudfunctions.net/eazy2conMail/afristud-contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contact)
        }
      )
      await fetch(
        `https://us-central1-oppopromo-19201.cloudfunctions.net/eazy2conMail/send-afri-stud?email=${contact.email}name=${contact.fname}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (res.ok || res.status < 300) {
        const data = await res.json()
        setLoading(false)
        message.success('We will reach out to you soon \n Thank you')
      }
    } catch (error) {
      setLoading(false)
      message.error('Network error')
    }
  }

  return (
    <>
      <div className='mt-24 px-auto py-36 bg-gray-500  bg-no-repeat bg-contact grid grid-cols-12 gap-1'>
        <div className='text-center col-span-12 font-bold text-white text-3xl'>CONTACT US</div>
      </div>
      <div className='px-auto py-20 bg-gray-100 grid grid-cols-12 gap-1'>
        <div className='text-center col-span-12 md:col-start-4 md:col-span-6'>
          <div className='px-auto py-6 grid grid-cols-12 md:gap-8 px-3'>
            <div className='col-span-12 md:col-span-6'>
              <input
                className='w-full bg-gray-300 text-black mt-2 p-3 focus:outline-none focus:shadow-outline'
                type='text'
                value={contact.fname}
                onChange={onChangeText}
                name='fname'
                placeholder='Firstname'
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <input
                className='w-full bg-gray-300 text-black mt-2 p-3 focus:outline-none focus:shadow-outline'
                type='text'
                value={contact.lname}
                onChange={onChangeText}
                name='lname'
                placeholder='Lastname'
              />
            </div>
            <div className='mt-2 col-span-12 md:col-span-6'>
              <input
                className='w-full bg-gray-300 text-black mt-2 p-3 focus:outline-none focus:shadow-outline'
                type='text'
                value={contact.email}
                onChange={onChangeText}
                name='email'
                placeholder='Email'
              />
            </div>
            <div className='mt-2 col-span-12 md:col-span-6'>
              <input
                className='w-full bg-gray-300 text-black mt-2 p-3 focus:outline-none focus:shadow-outline'
                type='text'
                value={contact.phone}
                onChange={onChangeText}
                name='phone'
                placeholder='Phone'
              />
            </div>
            <div className='mt-2 col-span-12 md:col-span-12'>
              <textarea
                className='w-full h-32 bg-gray-300 text-black mt-2 p-3 focus:outline-none focus:shadow-outline'
                onChange={onChangeText}
                value={contact.message}
                name='message'
                placeholder='Message'
              />
            </div>
            <div className='mt-2 col-span-12 md:col-start-5 md:col-span-4'>
              <Button
                loading={loading}
                onClick={submitFormHandle}
                type='link'
                className='uppercase text-sm font-bold tracking-wide bg-gray-700 hover:bg-gray-900  text-gray-100 px-3 pb-1 h-10 w-full focus:outline-none focus:shadow-outline'
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='my-16 grid grid-cols-12 md:gap-8 md:mx-12 mx-3'>
        <div className='col-span-12 md:col-span-4 mb-4 md:mb-1 bg-white px-8 py-8 rounded-lg shadow-md'>
          <p className='text-center'>
            <i className='fa fa-map-marker fa-2x text-indigo-900' aria-hidden='true' />
          </p>
          <h1 className='text-xl font-bold text-center my-4 text-indigo-900'>Visit Us</h1>
          <p className='text-center text-lg mt-6'>
            Plot 93, Oyo Street, area 2, section 1,
            <br />
            Garki, Abuja
          </p>
        </div>
        <div className='col-span-12 md:col-span-4 mb-4 md:mb-1 bg-white px-8 py-8 rounded-lg shadow-md'>
          <p className='text-center'>
            <i className='fa fa-volume-control-phone fa-2x text-indigo-900' aria-hidden='true' />
          </p>
          <h1 className='text-xl font-bold text-center my-4 text-indigo-900'>Call Us</h1>
          <p className='text-center text-lg mt-6'>
            +37069221174 <br />
            +2348082369281 <br />
            +2347037419267
          </p>
        </div>
        <div className='col-span-12 md:col-span-4 mb-4 md:mb-1 bg-white px-8 py-8 rounded-lg shadow-md'>
          <p className='text-center'>
            <i className='fa fa-envelope fa-2x text-indigo-900' aria-hidden='true' />
          </p>
          <h1 className='text-xl font-bold text-center my-4 text-indigo-900'>E-mail Us</h1>
          <p className='text-center text-lg mt-6'>support@afristud.com</p>
        </div>
      </div>
    </>
  )
}

export default ContactUs
