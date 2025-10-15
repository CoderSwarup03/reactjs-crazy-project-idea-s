import React from 'react'

const PostItem = ({ post, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
      >
        <h2>{post.title}</h2>
        <span>{post.content}</span>
      </div>
    </>
  )
}

export default PostItem