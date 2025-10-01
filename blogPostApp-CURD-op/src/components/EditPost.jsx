// import { useState } from "react";
import React ,{ useState } from "react";

export default function EditPost({ post, onSave }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSave = (e) => {
    e.preventDefault();
    onSave({ ...post, title, content });
  };

  return (
    <form onSubmit={handleSave}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Save Changes
      </button>
    </form>
  );
}
