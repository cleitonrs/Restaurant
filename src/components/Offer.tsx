import Image from 'next/image'
import React from 'react'
// import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
      {/* Text Container */}
      <div className='flex flex-1 flex-col justify-center text-center items-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Deguste um delicioso hambuguer com batata frita</h1>
        <p className='text-white xl:text-xl'>
          Saboreie o que há de mais gostoso e torne o seu dia melhor!
        </p>
        {/* <CountDown/> */}
        <button className='bg-red-500 text-white rounded-md px-6 py-3'>Pedir Agora</button>
      </div>
      {/* Image Container */}
      <div className='flex-1 w-full relative md:h-full'>
        <Image src='/offerProduct.png' alt='' fill className='object-contain'/>
      </div>
    </div>
  )
}

export default Offer