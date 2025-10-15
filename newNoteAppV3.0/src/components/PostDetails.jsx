import React, { useState } from 'react'
import EditPost from './EditPost';

const PostDetails = ({ post, onDeletePost, onUpdatePost, onBack }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <div className='w-full m-4 p-4 rounded-md bg-white flex flex-col'>
                {isEditing ? (
                    <EditPost
                        post={post}
                        onSave={(update) => {
                            onUpdatePost(update)
                            setIsEditing(false)
                        }}
                    />
                ) : (
                    <>
                        <div>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-2xl font-semibold'>{post.title}</h1>
                                <span className='text-xl font-semibold text-gray-300'>{post.title}</span>
                            </div>
                            <div className='flex gap-3 justify-center items-center'>
                                <button
                                    onClick={() => onDeletePost(post.id)}
                                    className='text-xl font-bold px-3 py-2 rounded-md bg-red-500 hover:bg-red-600'>Delete</button>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className='text-xl font-bold px-3 py-2 rounded-md bg-red-500 hover:bg-red-600'>Edit</button>
                                <button
                                    onClick={onBack}
                                    className='text-xl font-bold px-3 py-2 rounded-md bg-red-500 hover:bg-red-600'>Back</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default PostDetails