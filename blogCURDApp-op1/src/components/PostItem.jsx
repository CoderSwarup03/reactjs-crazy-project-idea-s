import React from 'react'

const PostItem = ({ post, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className='p-4 border-2 border-green-500 rounded-md flex flex-col gap-2 mt-4'
      >
        <h2 className='text-2xl font-semibold'>{post.title}</h2>
        <span className='text-xl font-semibold'>{post.content}</span>
      </div>
    </>
  )
}

export default PostItem