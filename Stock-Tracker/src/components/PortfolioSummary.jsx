// src/components/PortfolioSummary.jsx
import React from "react";

export default function PortfolioSummary({
  totalInvested,
  totalCurrentValue,
  totalProfit,
}) {
  const profitColor = totalProfit >= 0 ? "text-green-400" : "text-red-400";

  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-4 w-full max-w-md mb-6">
      <h2 className="text-xl font-semibold mb-2 text-center">Portfolio Summary</h2>
      <div className="flex justify-between py-2">
        <span>Total Invested:</span>
        <span>${totalInvested.toFixed(2)}</span>
      </div>
      <div className="flex justify-between py-2">
        <span>Current Value:</span>
        <span>${totalCurrentValue.toFixed(2)}</span>
      </div>
      <div className="flex justify-between py-2">
        <span>Total Profit/Loss:</span>
        <span className={profitColor}>
          {totalProfit >= 0 ? "+" : "-"}${Math.abs(totalProfit).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
