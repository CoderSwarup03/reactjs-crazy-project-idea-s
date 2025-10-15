import React, { useState } from 'react'
import CreatePost from './components/CreatePost';
import PostDetails from './components/PostDetails';
import PostList from './components/PostList';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const addPost = (item) => {
    setPosts([...posts, { ...item, id: Date.now(), comments: [] }])
  }

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  const updatePost = (update) => {
    setPosts(posts.map((post) => post.id === update.id ? update : post))
  }
  return (
    <>
      <div className='bg-gray-100  h-[100vh] w-[100vw] p-4'>
        <h1 className='text-3xl font-bold text-green-500 text-center'>BlogApp-CURD New</h1>
        <CreatePost onAddPost={addPost} />
        {selectedPost ? (
          <PostDetails
            post={selectedPost}
            onDeletePost={deletePost}
            onUpdatePost={updatePost}
            onBack={() => setSelectedPost(null)}
          />
        ) : (
          <PostList posts={posts} onSelectPost={setSelectedPost} />
        )}
      </div>
    </>
  )
}

export default App