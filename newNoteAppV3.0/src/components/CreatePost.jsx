import React, { useState } from 'react'

const CreatePost = ({ onAddPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddPost({ title, content })
        console.log("clicked")
        setTitle('')
        setContent('')
    }

    return (
        <>
            <div className='flex flex-col gap-4 mt-5'>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-2'
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
                        className='py-3 bg-green-500 hover:bg-green-600 font-bold cursor-pointer w-full rounded-md'>Add</button>
                </form>
            </div>
        </>
    )
}

export default CreatePost