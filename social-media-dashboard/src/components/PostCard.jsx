import React from "react";
import { MessageCircle, Heart } from "lucide-react";

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500">{post.platform}</span>
        <span className="text-xs text-gray-400">#{post.id}</span>
      </div>
      <p className="text-gray-800 mb-3">{post.content}</p>
      <div className="flex justify-start items-center gap-4 text-gray-600">
        <div className="flex items-center gap-1">
          <Heart size={16} /> {post.likes}
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle size={16} /> {post.comments}
        </div>
      </div>
    </div>
  );
}
