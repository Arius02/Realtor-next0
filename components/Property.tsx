import Image from 'next/image'
import React from 'react'
import aveta from 'aveta';
import DefaultImage from '../assets/images/house.jpg';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import Link from 'next/link';

type Props = {
  property: Hit
}
const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }: Props) => {

  return (
    <div className="lg:col-span-4 md:col-span-6 col-span-12 my-4" >
      < Link href={`/property/${externalID}`} passHref>
        <Image
          alt={title}
          src={coverPhoto ? coverPhoto.url: DefaultImage}
          height={250}
          width={400}
          style={{width:"100%", height:"250px"}}
        />
        <div>
          <div className="flex justify-between items-center ">
            <div className='flex items-center my-2 space-x-2'>
              {isVerified && <GoVerified className='text-green-400 dark:text-primary-400' />}
              <p className="font-bold dark:text-white text-primary-900 text-xl ">AED {aveta(price)}{rentFrequency && `/${rentFrequency}`}</p>
            </div>
            <Image
              alt={agency? agency.name: "Agency"}
              src={agency?.logo ? agency.logo.url: DefaultImage}
              width={40}
              height={40}
              className='h-[40px]'
              style={{ borderRadius: "20px" , marginTop:"10px"}}
            />
          </div>
          <div className='flex dark:text-primary-100 text-primary-600 items-center max-w-[250px] justify-between'>
            {rooms} <FaBed /> || {baths} <FaBath /> | {area? millify(area): "--"} sqft <BsGridFill />
          </div>
          <p className='dark:text-primary-400 text-primary-500 text-lg'>
            {title.length > 30 ? title.substring(0, 30) + '...' : title}
          </p>

        </div>
      </Link>
    </div>

  )
}

export default Property