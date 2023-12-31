import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-600'>
      {/* Wrapper */}
      <div className='w-max flex'>
        {/* Single Item */}
        {
          featuredProducts.map(item => (
          <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
          {/* Image Container */}
          {item.img && (
            <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
              <Image src={item.img} alt='' fill className='object-contain' />
            </div>
          )}
          {/* Text Container */}
          <div className='flex flex-1 flex-col items-center justify-center text-center gap-4'>
            <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
            <p className='p-4 2xl:p-8'>{item.desc}</p>
            <span className='text-xl font-bold'>R$ {item.price.toFixed(2)}</span>
            <button className='bg-gradient-to-tr from-red-600 to-amber-500 text-white font-bold  p-3 rounded-md ease-in-out duration-300 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-red-600'>
              Adicionar
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Featured