"use client"

import React, { useEffect, useState } from 'react'

type Props = {
  price: number
  id: number
  options?: { title: string, additionalPrice: number;}[] 
}

const Price = ({price, id, options}: Props) => {
const [totalPrice, setTotalPrice] = useState(price)
const [quantity, setQuantity] = useState(1)
const [selected, setSelected] = useState(0)

useEffect(() => {
  setTotalPrice(
      quantity * (options ? price + options[selected].additionalPrice : price)
    )
}, [quantity, selected, options, price])

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>{totalPrice.toFixed(2)}</h2>
      {/* Options container */}
      <div className='flex gap-4'>
        {options?.map((option, index) => (
          <button 
            key={option.title} 
            className='min-w-[6rem] p-2 ring-1 ring-red-600 rounded-md'
            style={{
              background: selected === index ? "rgb(220 38 38)" : "white",
              color: selected === index ? "white" : "red"
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity And Add Button Container */}
      <div className='flex justify-between items-center'>
        {/* Quantity */}
        <div className='flex justify-between w-full p-3 ring-1 ring-red-600'>
          <span>Quantidade</span>
          <div className='flex gap-4 items-center'>
            <button className='font-bold' onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>{'<'}</button>
            <span className='font-bold'>{quantity}</span>
            <button className='font-bold' onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}>{'>'}</button>
          </div>
        </div>
        {/* Card Button */}
        <button className='uppercase font-bold w-56 bg-red-600 text-white p-3 ring-1 ring-red-500'>Adicionar</button>
      </div>
    </div>
  )
}

export default Price