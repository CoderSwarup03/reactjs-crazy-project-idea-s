import React from "react";
export default function PostItem({ post, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-4 bg-white rounded-xl shadow cursor-pointer hover:shadow-lg"
    >
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600 line-clamp-2">{post.content}</p>
    </div>
  );
}
