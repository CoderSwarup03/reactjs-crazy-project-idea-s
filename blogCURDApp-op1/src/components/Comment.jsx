import React, { useState } from 'react'

function Comment({ post, onUpdatePost }) {
  const [comment, setComment] = useState('')

  const handleSubmit = () => {
    if(comment === '') return
    const updated = {
      
      ...post,
      comments: [...post.comments,{id: Date.now(), text: comment}]
    }
    onUpdatePost(updated)
    setComment('')
  }
  return (
    <>
      <div className='mt-3'>
        <span className='text-2xl font-semibold text-green-500'>Comment:</span>
        <div>
          {post.comments.map((comment) => {
            return (
              <div>{comment.text}</div>
            )
          })}
        </div>
        <div className='flex gap-2'>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='white your comment'
            className='p-3 w-[50%] rounded-md border-2 border-green-500 outline-none hover:border-green-600'
            type="text" />
          <button
            onClick={handleSubmit}
            className='text-xl font-bold px-4 py-2 rouunded-md bg-green-500 rounded-md cursor-pointer'>Add Comment</button>
        </div>
      </div>
    </>
  )
}

export default Comment