// import { useState } from "react";
import React ,{ useState } from "react";

export default function CommentSection({ post, onUpdatePost }) {
  const [comment, setComment] = useState("");

  const addComment = () => {
    if (!comment) return;
    const updated = {
      ...post,
      comments: [...post.comments, { id: Date.now(), text: comment }],
    };
    onUpdatePost(updated);
    setComment("");
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      <div className="space-y-2">
        {post.comments.map((c) => (
          <div key={c.id} className="p-2 bg-gray-100 rounded">
            {c.text}
          </div>
        ))}
      </div>
      <div className="flex mt-3 gap-2">
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={addComment}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
