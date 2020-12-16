import React from 'react'
import { Link } from 'react-router-dom'
import { classnames } from 'tailwindcss-classnames'
import logo from '../assets/images/cropped-logo2.png'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = { open: true }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      document.querySelector('.menu-b').classList.remove('border-indigo-900')
      document.querySelector('.menu-b').classList.add('border-white')
      document.querySelector('.nav-b').classList.add('bg-indigo-900')
      document.querySelector('.nav-b').classList.remove('bg-indigo-400')
      document.querySelectorAll('.menu-t').forEach(function (item) {
        item.classList.add('text-white')
      })
    } else {
      document.querySelector('.menu-b').classList.remove('border-white')
      document.querySelector('.menu-b').classList.add('border-indigo-900')
      document.querySelector('.nav-b').classList.remove('bg-indigo-900')
      document.querySelector('.nav-b').classList.add('bg-white')
      document.querySelectorAll('.menu-t').forEach(function (item) {
        item.classList.remove('text-white')
      })
    }
  }

  render() {
    return (
      <nav className='nav-b fixed w-full top-0 z-10 bg-transparent flex items-center justify-between flex-wrap px-4 py-3 '>
        <Link to='/'>
          <div className='flex items-center flex-shrink-0 text-darker mr-6'>
            {/* <img src={logo} alt='logo' width='60' /> */}
            {/* <span className='menu-t font-bold ml-2 text-2xl tracking-tight hover:text-gray-400'> */}
            <img src={logo} alt='' className='md:w-48 w-32 mt-5 md:mt-0' />
            {/* </span> */}
          </div>
        </Link>
        <div className='block lg:hidden'>
          <button
            onClick={() => this.setState({ open: !this.state.open })}
            className='flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-gray-400 hover:border-gray-400'
          >
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>

        <div
          className={classnames(
            'w-full block flex-grow lg:flex lg:items-center lg:w-auto transition-all transition-transform duration-500 ease-in-out',
            {
              hidden: this.state.open
            }
          )}
        >
          <div className='lg:flex-grow text-base ml-12'>
            <Link
              to='/about-us'
              className='menu-t block ml-4 mt-4 lg:inline-block lg:mt-0 text-dark hover:text-gray-400 mr-8'
            >
              About
            </Link>
            <Link
              to='/news'
              className='menu-t block ml-4 mt-4 lg:inline-block lg:mt-0 text-dark hover:text-gray-400 mr-8'
            >
              Latest News
            </Link>

            <Link
              to='/contact-us'
              className='menu-t block ml-4 mt-4 lg:inline-block lg:mt-0 text-dark hover:text-gray-400'
            >
              Contact-Us
            </Link>
          </div>
          <div>
            <a
              href='https://calendly.com/arize-afristud/15min'
              target='_blank'
              rel='noreferrer'
              className='menu-t menu-b inline-block ml-4 text-sm px-6 py-3 leading-none border rounded text-darker border-indigo-900 hover:border-black hover:border-transparent hover:text-white hover:bg-gray-500 hover:text-white mt-4 lg:mt-0'
            >
              Book a session
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
