"use client"
import Image from 'next/image';
import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

type Props = {
  data:  {
  id: number;
  externalID: string;
  orderIndex: number;
  url: string;
} []
}
const LeftArrow = ()=>{
  const { scrollPrev } = useContext(VisibilityContext)
  return <button onClick={()=>scrollPrev()}>
    <FaArrowAltCircleLeft className='dark:text-primary-100 text-primary-700 mr-3' />
  </button>
}

const RightArrow = ()=>{
  const { scrollNext } = useContext(VisibilityContext)

  return <button onClick={() => scrollNext()}>
    <FaArrowAltCircleRight className='dark:text-primary-100 text-primary-700 ml-3'/>
  </button>
}
const ImageScorollbar = ({data}: Props) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} itemClassName='lg:w-[1000px] md:lg:w-[800px] w-[500px] '>
      {data?.map((item) => (
        <div className="lg:w-[1000px] md:lg:w-[800px] w-[500px]" key={item.id}>
          <Image placeholder="blur" alt="flat photos" loading='lazy' blurDataURL={item.url} src={item.url} width={1000} height={450} sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
        </div>
      ))}
    </ScrollMenu>
  );
}


export default ImageScorollbar