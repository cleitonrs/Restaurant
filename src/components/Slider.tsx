"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "Entregamos o seu pedido em qualquer lugar da cidade",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "A melhor pizza para compartilhar com sua família",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    title: "Sempre quentinha e com muito recheio para você",
    image: "/slide4.jpg",
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev === data.length -1 ? 0 : prev + 1))
    , 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      {/* Text Container */}
      <div className='flex flex-1 flex-col items-center justify-center gap-8 text-red-600 font-bold'>
        <h1 className='text-4xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-6xl'>
          {data[currentSlide].title}
        </h1>
        <button className='bg-gradient-to-tr from-red-600 to-amber-500 text-white py-4 px-8 rounded-lg ease-in-out duration-300 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-red-600'>
          Pedir Agora
        </button>
      </div>
      {/* Image Container */} 
      <div className='w-full flex-1 relative '>
        <Image src={data[currentSlide].image} alt='' fill className='object-cover' />
      </div>
    </div>
  )
}

export default Slider