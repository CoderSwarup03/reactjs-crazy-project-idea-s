import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import StatsCard from "./StatsCard";
import PostCard from "./PostCard";

export default function Dashboard() {
  const [stats, setStats] = useState({
    followers: 1200,
    likes: 4300,
    comments: 875,
  });

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("All");

  // 🔹 Simulate API fetching (useEffect)
  useEffect(() => {
    const fakeAPIData = [
      {
        id: 1,
        platform: "Twitter",
        content: "Just launched my new React project 🚀 #webdev",
        likes: 120,
        comments: 25,
      },
      {
        id: 2,
        platform: "Instagram",
        content: "Beautiful sunset 🌅 #photography",
        likes: 350,
        comments: 40,
      },
      {
        id: 3,
        platform: "Facebook",
        content: "Loving the new UI design trends!",
        likes: 200,
        comments: 30,
      },
    ];

    // Simulate delay like API fetch
    const timer = setTimeout(() => setPosts(fakeAPIData), 1500);
    return () => clearTimeout(timer);
  }, []);

  // 🔹 Simulate real-time likes increment
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        likes: prev.likes + Math.floor(Math.random() * 5),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Add Post (Random Platform + Content)
  const handleAddPost = () => {
    const platforms = ["Twitter", "Instagram", "Facebook"];
    const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];
    const newPost = {
      id: posts.length + 1,
      platform: randomPlatform,
      content: `This is a new post on ${randomPlatform}! 🎉`,
      likes: Math.floor(Math.random() * 300),
      comments: Math.floor(Math.random() * 50),
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  // 🔹 Filtered Posts
  const filteredPosts =
    filter === "All" ? posts : posts.filter((p) => p.platform === filter);

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <StatsCard title="Followers" value={stats.followers} />
          <StatsCard title="Likes" value={stats.likes} />
          <StatsCard title="Comments" value={stats.comments} />
        </div>

        {/* Filter + Add Button */}
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex gap-2">
            {["All", "Twitter", "Instagram", "Facebook"].map((platform) => (
              <button
                key={platform}
                onClick={() => setFilter(platform)}
                className={`px-3 py-1 rounded-full border ${
                  filter === platform
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
          <button
            onClick={handleAddPost}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            + Add Post
          </button>
        </div>

        {/* Posts Section */}
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>

        {posts.length === 0 ? (
          <p className="text-gray-500 text-center">Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
