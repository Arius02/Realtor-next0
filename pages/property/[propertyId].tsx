import ImageScorollbar from '@/components/ImageScorollbar'
import getProperty, { baseUrl } from '@/utils/fetchAPI'
import aveta from 'aveta'
import millify from 'millify'
import Image from 'next/image'
import React from 'react'
import { BsGridFill } from 'react-icons/bs'
import { FaBath, FaBed } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'
import DefaultImage from '../../assets/images/house.jpg';
import Link from 'next/link'

type Props = {
  params: {
    propertyId: string
  },
  
}
// done
const PropertyDetails = ({propertyDetails}: PropertyDetails) => {
  const { price, rentFrequency, rooms, title, baths,
    area, agency, isVerified, description, type, purpose,
    furnishingStatus, amenities, photos } = propertyDetails
  if (!propertyDetails){
    return<div className='h-screen flex justify-center items-center flex-col'>
      <h2 className='text-3xl dark:text-white text-primary-900'>Not Found :)</h2>
      <Link href="/" className='text-sm mt-2'>Back To Home</Link>
    </div>
  }

  return (
    <div className="container max-w-[1100px] mx-auto my-10  md:px-10 px-5 min-h-screen">
      <div className="relative z-10">
        <ImageScorollbar data={photos} />
      </div>
      <div className="flex justify-between items-center mt-5 ">
        <div className='flex items-center my-2 space-x-2'>
          {isVerified && <GoVerified className='text-green-400 dark:text-primary-400' />}
          <p className="font-bold dark:text-white text-primary-900 text-xl ">AED {price ?aveta(price):"$$"}{rentFrequency && `/${rentFrequency}`}</p>
        </div>
        <Image
          alt={agency ? agency.name : "Agency"}
          src={agency?.logo ? agency.logo.url : DefaultImage}
          height={40}
          width={40}
          className='h-[40px]'
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className='flex my-2 dark:text-primary-200 text-primary-600 items-center max-w-[250px] justify-between'>
        {rooms} <FaBed /> || {baths} <FaBath /> | {area ? millify(area) : "--"} sqft <BsGridFill />
      </div>
      <div>
        <h2 className="text-xl font-bold dark:text-white text-primary-700 mb-2">{title}</h2>
        <p className='dark:text-primary-400 text-primary-500 text-lg'>{description}</p>
      </div>
      <div className='flex flex-wrap  justify-between mt-5 space-y-2 '>
        <div className='flex justify-between items-center  md:w-[400px] w-full border-b-[1px] border-primary-100 '>
          <h4 className="dark:text-primary-400 text-primary-500 text-xl">TYPE</h4>
          <h3 className="font-bold dark:text-primary-100 text-primary-700 text-xl uppercase">{type}</h3>
        </div>
        <div className='flex justify-between items-center  md:w-[400px] w-full border-b-[1px] border-primary-100'>
          <h4 className="dark:text-primary-400 text-primary-500 text-xl">PURPOSE</h4>
          <h3 className="font-bold dark:text-primary-100 text-primary-700 text-xl uppercase">{purpose}</h3>
        </div>
        {furnishingStatus && <div className='flex justify-between items-center  md:w-[400px] w-full border-b-[1px] border-primary-100'>
          <h4 className="dark:text-primary-400 text-primary-500 text-xl">FURNISHING STATUS</h4>
          <h3 className="font-bold dark:text-primary-100 text-primary-700 text-xl uppercase">{furnishingStatus}</h3>
        </div>}

      </div>
      <h4 className="font-bold text-xl dark:text-primary-100 text-primary-800 my-4">Facilites:</h4>
      <div className='flex flex-wrap'>
        {amenities.map((item) => (
          item?.amenities?.map((amenity) => (
            <p key={amenity.text} className="font-bold text-primary-700 bg-primary-300 p-2 m-1 rounded-sm" >
              {amenity.text}
            </p>
          ))
        ))}
      </div>
    </div>
  )
}

export default PropertyDetails;
export async function getServerSideProps({ params: { propertyId } }:Props) {
  const propertyDetails :Promise<PropertyDetails> = await getProperty(`${baseUrl}/properties/detail?externalID=${propertyId}`);
  return {
    props: {
      propertyDetails: propertyDetails,
    },
  };
}
