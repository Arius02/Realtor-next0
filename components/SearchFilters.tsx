"use client"
import { filterData, getFilterValues } from '@/utils/filter'
import { useRouter } from 'next/router'
import {useState } from 'react'



const SearchFilters = () => {
const router = useRouter()
  const [filters] = useState(filterData);
  const searchProperties = (filterValues: filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if (item.value ) {
        query[item.name] = item.value
      }
    })

    router.push({ pathname: path, query: query });
  };
  return <div>
    <div className="flex flex-wrap justify-center">
      {filters.map((filter) => <><select key={filter.queryName}
        className='p-2 border-[.5px] rounded-sm bg-[transparent] border-primary-300 dark:text-primary-300 mt-5 text-primary-500'
        onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>
        <option selected className='dark:bg-primary-600 bg-primary-200'>{filter.placeholder}</option>
        {filter.items.map((item) => <option value={item.value} key={item.value} className='dark:bg-primary-600 bg-primary-100 '>
          {item.name}
        </option>
        )}
      </select>
      </>)}
    </div>

  </div>
}

export default SearchFilters