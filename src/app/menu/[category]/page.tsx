import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-600'>
      {pizzas.map(item => (
        <Link className='w-full h-[60vh] border-r-2 border-b-2 border-red-600 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50'  href={`/product/${item.id}`} key={item.id}>
          {/* Image Container */}
          {item.img ? 
          <div className='relative h-[80%]'>
            <Image src={item.img} alt='' fill className='object-contain' />
          </div> : null}
          {/* Text Container */}
          <div className='flex items-center justify-between font-bold'>
            <h1 className='text-2xl p-2 uppercase'>{item.title}</h1>
            <h2 className='group-hover:hidden text-xl'>R$ {item.price.toFixed(2)}</h2>
            <button className='hidden group-hover:block uppercase bg-red-600 text-white p-2 rounded-md'>Adicionar</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage