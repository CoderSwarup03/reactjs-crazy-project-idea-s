import React from "react";

export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <h3 className="text-gray-500 text-sm uppercase">{title}</h3>
      <p className="text-2xl font-bold text-indigo-600">{value}</p>
    </div>
  );
}
