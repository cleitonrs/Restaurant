"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { id: 1, title: "Início", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Aberto às", url: "/" },
  { id: 4, title: "Contato", url: "/" },
]

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false)

  // TEMPORARY
  const user = false
  return (
    <div>
      {!openMenu ? (
        <Image src='/open.png' alt='' width={20} height={20} onClick={() => setOpenMenu(true)}/> 
      ) : (
        <Image src='/close.png' alt='' width={20} height={20} onClick={() => setOpenMenu(false)}/>
      )}
      <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
        {links.map(item => (
          <Link href={item.url} key={item.id}>
            {item.title}
          </Link>
        ))}
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Pedidos</Link>
        )}
        <Link href="/cart">
          
        </Link>
      </div>
    </div>
  )
}

export default Menu