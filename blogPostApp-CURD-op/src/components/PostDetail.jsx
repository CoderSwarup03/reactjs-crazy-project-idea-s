// import { useState } from "react";
import React, { useState } from "react";
import EditPost from "./EditPost";
import CommentSection from "./CommentSection";

export default function PostDetail({ post, onUpdatePost, onDeletePost, onBack }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="p-4 bg-white rounded-xl shadow mt-6">
      {isEditing ? (
        <EditPost
          post={post}
          onSave={(updated) => {
            onUpdatePost(updated);
            setIsEditing(false);
          }}
        />
      ) : (
        <>
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="mt-2 text-gray-700">{post.content}</p>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDeletePost(post.id)}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
            <button
              onClick={onBack}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              Back
            </button>
          </div>
        </>
      )}
      <CommentSection post={post} onUpdatePost={onUpdatePost} />
    </div>
  );
}
