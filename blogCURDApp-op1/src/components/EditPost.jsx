import React, { useState } from 'react'

const EditPost = ({ post, onSave }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content)

  const handleSubmit =(e) => {
    e.preventDefault()
    onSave({ ...post, title, content })
  }

  return (
    <>
      <div>
        <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 m-2'
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='enter title...'
            className='p-3 outline-none w-full border-2 border-green-500 hover:border-green-600 rounded-md'
            type="text" name="" id="" />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='enter context...'
            className='p-3 outline-none w-full border-2 border-green-500 hover:border-green-600 rounded-md'
            name="" id=""></textarea>
          <button
            type='submit'
            className='py-3 bg-green-500 hover:bg-green-600 font-bold cursor-pointer w-full'
          >Save</button>
        </form>
      </div>
    </>
  )
}

export default EditPost