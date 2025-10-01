import React, { useEffect } from 'react'

const Home = ({ products, setProducts }) => {
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);
  }

  return (
    <>
      {
        products.map((item) => {
          return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[10px]'>
              <div className='flex flex-wrap items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-2 border-2 border-[#222] rounded-md w-[250px] p-4'>
                  <img
                    className='w-[200px] h-[120px] object-cover mx-auto'
                    src={item.thumbnail} alt="" />
                  <h2>{item.title}</h2>
                  <div className='flex justify-between gap-2 bg-gray-200 hover:bg-gray-300'>
                    <span className='text-md font-semibold'>Price: {item.price}</span>
                    <span className='text-md font-semibold'>Category: {item.category}</span>
                  </div>
                  <button className='py-2 bg-blue-500 hover:bg-blue-600 text-semibold rounded-md text-white cursor-pointer w-full'>Buy</button>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Home