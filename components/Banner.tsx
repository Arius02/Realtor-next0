import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  purpose: string,
  title1: string,
  desc1: string,
  buttonText: string,
  linkName: string,
  imageUrl: string
}
const Banner = ({ purpose, title1, desc1, buttonText, linkName, imageUrl }: Props) => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center space-x-6 space-y-5 lg:max-w-[80%] w-full mx-auto my-10'>
      <Image
        width={500} height={300}
        alt={title1}
        src={imageUrl}
        loading='lazy'
      />
     <div className="flex flex-col space-y-5">
        <h6 className='font-semibold dark:text-primary-200 text-primary-300 text-sm'>{purpose}</h6>
        <h2 className='font-bold text-3xl max-w-[65%] dark:text-white text-primary-900 '>{title1} </h2>
        <h2 className='dark:text-primary-400 text-primary-500 text-xl '>{desc1}</h2>
          <Link href={linkName}>
        <button type='button' className="dark:bg-primary-200 text-xl rounded-sm py-1 px-2 font-semibold bg-primary-100 dark:text-primary-500" >
            {buttonText}
        </button>
          </Link>
     </div>
    </div>
  )
}

export default Banner;