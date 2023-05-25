import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
const Navbar = () => {
  return (
    <div className='shadow p-2 dark:bg-primary-800 bg-white flex justify-between items-center'>
      <h1 >
        <Link href="/" className="text-4xl dark:text-white text-primary-900 font-bold">
          Realtor</Link>
      </h1>

      <Menu/>
    </div>
  )
}

export default Navbar