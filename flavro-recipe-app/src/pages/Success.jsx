import React, { useEffect, useState } from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col gap-2 w-full'>
        {loading ? (
          <PropagateLoader />
        ) : (
          <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-lg lg:text-2xl font-bold'>Order Successfully Done!</h1>
            <p className='text-gray-600 text-sm lg:text-xl font-semibold'>Your order has been successfully placed</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Success