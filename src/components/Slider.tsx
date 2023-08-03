"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "Sempre quentinha e com muito recheio!",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "Entregamos o seu pedido em qualquer lugar da cidade",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "A melhor pizza para compartilhar com sua família e amigos",
    image: "/slide3.jpg",
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setCurrentSlide((prev) => (prev === data.length -1 ? 0 : prev + 1))
  //   , 2000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      {/* Text Container */}
      <div className='flex flex-1 flex-col items-center justify-center gap-8 text-red-500 font-bold'>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {data[currentSlide].title}
        </h1>
        <button className='bg-red-500 text-white py-4 px-8 rounded-lg'>
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