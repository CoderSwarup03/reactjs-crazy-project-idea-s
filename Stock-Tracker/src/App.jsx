// src/App.jsx
import React, { useState, useMemo } from "react";
import PortfolioList from "./components/PortfolioList";
import PortfolioSummary from "./components/PortfolioSummary";
import AddInvestmentForm from "./components/AddInvestmentForm";

export default function App() {
  const [investments, setInvestments] = useState([
    { id: 1, name: "Bitcoin", amount: 1000, currentValue: 1800 },
    { id: 2, name: "Ethereum", amount: 800, currentValue: 1200 },
  ]);

  const addInvestment = (newItem) => {
    setInvestments([...investments, { id: Date.now(), ...newItem }]);
  };

  // ✅ useMemo to memoize total calculations (only recalculates when investments change)
  const totalInvested = useMemo(
    () => investments.reduce((acc, curr) => acc + curr.amount, 0),
    [investments]
  );

  const totalCurrentValue = useMemo(
    () => investments.reduce((acc, curr) => acc + curr.currentValue, 0),
    [investments]
  );

  const totalProfit = useMemo(
    () => totalCurrentValue - totalInvested,
    [totalCurrentValue, totalInvested]
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">📈 Portfolio Analyzer</h1>

      <PortfolioSummary
        totalInvested={totalInvested}
        totalCurrentValue={totalCurrentValue}
        totalProfit={totalProfit}
      />

      <AddInvestmentForm addInvestment={addInvestment} />

      <PortfolioList investments={investments} />
    </div>
  );
}
