"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineMenu } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { FcHome, FcSearch, FcCurrencyExchange, FcKey } from "react-icons/fc"
import Mode from './Mode';
const Menu = () => {
  const [displayList, setDisplayList] = useState<boolean>(false)
  const handleClick = ()=>{
    setDisplayList(!displayList)
  }
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDisplayList(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return (
    <div className='relative'>
      <button type="button" onClick={handleClick} >
        {displayList === false ? <MdOutlineMenu className='dark:text-white text-2xl' /> : <AiOutlineClose className='dark:text-white text-2xl' />}
      </button>
      <div ref={ref} className={displayList === false ?`-top-[300px] absolute overflow-hidden right-0`:"" + ' absolute  right-full w-48 border-[1px] border-primary-100 bg-white py-4 rounded-sm  duration-200 dark:bg-primary-900 z-[9999999999]'}>
        <Link onClick={handleClick} href="/"
         className='flex space-x-2 items-center hover:bg-primary-200 bg-opacity-60 py-1 px-2 duration-200'>
          <FcHome/>
          <span className='dark:text-primary-100 text-slate-950 text-lg'>Home</span>
        </Link>
        <Link onClick={handleClick} href="/search" 
        className='flex space-x-2 items-center hover:bg-primary-200 bg-opacity-60 py-1 px-2 duration-200'>
          <FcSearch />
          <span className='dark:text-primary-100 text-slate-950 text-lg '>
          Serach
          </span>
        </Link>
        <Link onClick={handleClick} href="/search?purpose=for-sale" 
        className='flex space-x-2 items-center hover:bg-primary-200 bg-opacity-60 py-1 px-2 duration-200'>
          <FcCurrencyExchange />
          <span className='dark:text-primary-100 text-slate-950 text-lg '>
            Buy Property
          </span>
        </Link>
        <Link onClick={handleClick} href="/search?purpose=for-rent" 
        className='flex space-x-2 items-center hover:bg-primary-200 bg-opacity-60 py-1 px-2 duration-200'>
          <FcKey />
          <span className='dark:text-primary-100 text-slate-950 text-lg '>
          Sell Property
          </span>
        </Link>
        <div onClick={handleClick} className="hover:bg-primary-200 bg-opacity-60  duration-200">
          <Mode />
        </div>
      </div>
    </div>
  )
}

export default Menu