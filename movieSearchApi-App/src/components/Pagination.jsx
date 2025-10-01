import React from 'react'

const Pagination = ({ page, setPage, totalPage }) => {
  return (
    <>
      <div className='flex justify-center items-center gap-2'>
        <button
          disabled={page === 1}
          onClick={setPage(page - 1)}
          className={`px-4 py-2 rounded-md text-white font-semibold ${page === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}
        >Prev</button>
        <span>Page {page} Total page {totalPage}</span>
        <button
          disabled ={page === totalPage}
          onClick={setPage(page + 1)}
          className={`px-4 py-2 rounded-md text-white font-semibold ${page === totalPage ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500' }`}
        >Next</button>
      </div>
    </>
  )
}

export default Pagination