import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-indigo-600">Social Dashboard</h1>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
          Refresh
        </button>
      </div>
    </nav>
  );
}
