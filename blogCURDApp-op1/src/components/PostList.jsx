import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, onSelectPost }) => {
  return (
    <>
      {posts.lenght === 0 ? (
        <h2  className='text-center text-2xl font-semibold text-red-500'>No posts.add one or more</h2>
      ): (
          posts.map((post) => (
            <PostItem  key={post.id} post={post} onClick={() => onSelectPost(post)}/>
          ))
        )}
    </>
  )
}

export default PostList