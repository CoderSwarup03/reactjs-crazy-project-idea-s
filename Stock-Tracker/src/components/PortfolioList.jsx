// src/components/PortfolioList.jsx
import React from "react";

export default function PortfolioList({ investments }) {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-3 text-center">Your Investments</h2>
      <ul className="space-y-3">
        {investments.map((inv) => (
          <li
            key={inv.id}
            className="flex justify-between bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <span className="font-medium">{inv.name}</span>
            <div className="text-right">
              <p>Invested: ${inv.amount}</p>
              <p>Value: ${inv.currentValue}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
