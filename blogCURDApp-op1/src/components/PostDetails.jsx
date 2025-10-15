import React, { useState } from 'react'
import EditPost from './EditPost';
import Comment from './Comment';

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
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl font-semibold'>{post.title}</h1>
                                <span className='text-xl font-semibold text-gray-300'>{post.content}</span>
                            </div>
                            <div className='flex gap-3 items-start'>
                                <button
                                    onClick={() => onDeletePost(post.id)}
                                    className='text-lg font-bold px-2 py-2 rounded-md bg-red-500 hover:bg-red-600'>Delete</button>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className='text-lg font-bold px-2 py-2 rounded-md bg-green-500 hover:bg-green-600'>Edit</button>
                                <button
                                    onClick={onBack}
                                    className='text-lg font-bold px-2 py-2 rounded-md bg-gray-500 hover:bg-gray-600'>Back</button>
                            </div>
                        </div>
                    </>
                )}
                <Comment post={post} onUpdatePost={onUpdatePost}/>
            </div>
        </>
    )
}

export default PostDetails