"use client"
import Property from '@/components/Property'
import SearchFilters from '@/components/SearchFilters'
import getProperty, { baseUrl } from '@/utils/fetchAPI'
import { NextApiRequest } from 'next'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsFilter } from 'react-icons/bs'
import noresult from "../../assets/images/noresult.svg"
import Link from 'next/link'
type Props = {
  properties: Hit[]
}


const Search = ({ properties }: Props) => {
  const [displayFilters, setDisplayFilters] = useState(false)
  if (!properties) {
    return <div className='h-screen flex justify-center items-center flex-col'>
      <h2 className='text-3xl dark:text-white text-primary-900'>Not Found :)</h2>
      <Link href="/" className='text-sm mt-2'>Back To Home</Link>
    </div>
  }
  return (
    <div className="container mx-auto">
      <div className="dark:bg-primary-500 bg-primary-200 dark:bg-opacity-[.9] bg-opacity-[.5] text-center p-2 border-b-[1px] dark:border-primary-200 border-primary-400">
        <div className='flex items-center justify-center cursor-pointer' onClick={() => setDisplayFilters(!displayFilters)}>
          <h2 className="font-bold text-lg dark:text-primary-300 text-primary-700  mr-3">Search Property By Filters</h2>
          <BsFilter className="dark:text-primary-300 text-primary-700 text-xl" />
        </div>
        {displayFilters && <SearchFilters />}
      </div>    
      <div className="grid grid-cols-12 container mx-auto  max-w-[1200px] lg:px-0 px-2 gap-6">
      {properties.map((property) => <Property property={property} key={property.id} />)}
      </div>
      {properties.length === 0 && (
        <div className='flex justify-center items-center flex-col my-5' >
          <Image src={noresult} alt="not found" />
          <p className='mt-2 text-2xl dark:text-primary-200 text-primary-700' >No Result Found.</p>
        </div>
      )}
      </div>
  )
}

export default Search;

export async function getServerSideProps({ query }: NextApiRequest) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await getProperty(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data?.hits,
    },
  };
}

