import React from 'react'

const OrdersPage = () => {
  return (
    <div className='bg-white p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Pedido ID</th>
            <th>Data</th>
            <th>Preço</th>
            <th className='hidden md:block'>Produtos</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base bg-red-50'>
            <td className='hidden md:block py-6 px-2'>12334245325675</td>
            <td className='py-6 px-2'>19.07.2023</td>
            <td className='py-6 px-2'>89.90</td>
            <td className='hidden md:block py-6 px-2'>Big Burger Menu (2), Pizza Vegana (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-2'>A caminho (aprox. 10min)...</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-2'>12334245325675</td>
            <td className='py-6 px-2'>19.07.2023</td>
            <td className='py-6 px-2'>89.90</td>
            <td className='hidden md:block py-6 px-2'>Big Burger Menu (2), Pizza Vegana (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-2'>A caminho (aprox. 10min)...</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-2'>12334245325675</td>
            <td className='py-6 px-2'>19.07.2023</td>
            <td className='py-6 px-2'>89.90</td>
            <td className='hidden md:block py-6 px-2'>Big Burger Menu (2), Pizza Vegana (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-2'>A caminho (aprox. 10min)...</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage