import React from 'react'
import Link from 'next/link'  // Importing Link from Next.js

const Navbar = () => {
  return (
    <nav className='h-20 bg-purple-700 flex justify-between items-center'>
      <div className="logo text-white font-bold mx-24 text-3xl">
        ShortLinks
      </div>
      <ul className='flex text-xl text-white font-bold justify-center gap-16 items-center mx-28'>
        <Link href="/"><li>Home</li></Link>  
        <Link href="/about"><li>About</li></Link> 
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link> 
        <li className='flex gap-3'>
          <Link href="/login">
            <button className='bg-blue-700 p-3 rounded-lg hover:bg-blue-600'>
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className='bg-blue-700 p-3 rounded-lg hover:bg-blue-600'>
              SignUp
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
