import React from "react";
import { useState } from "react";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import PostDetail from "./components/PostDetail";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now(), comments: [] }]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📖 Blog App</h1>
      <CreatePost onAddPost={addPost} />
      {selectedPost ? (
        <PostDetail
          post={selectedPost}
          onUpdatePost={updatePost}
          onDeletePost={deletePost}
          onBack={() => setSelectedPost(null)}
        />
      ) : (
        <PostList posts={posts} onSelectPost={setSelectedPost} />
      )}
    </div>
  );
}
