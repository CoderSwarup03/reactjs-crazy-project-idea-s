import React  from "react";
import PostItem from "./PostItem";
export default function PostList({ posts, onSelectPost }) {
  return (
    <div className="grid gap-4 mt-6">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet. Add one!</p>
      ) : (
        posts.map((post) => (
          <PostItem key={post.id} post={post} onClick={() => onSelectPost(post)} />
        ))
      )}
    </div>
  );
}
