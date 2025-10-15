// src/components/AddInvestmentForm.jsx
import React, { useState } from "react";

export default function AddInvestmentForm({ addInvestment }) {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    currentValue: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.amount || !formData.currentValue) return;
    addInvestment({
      name: formData.name,
      amount: parseFloat(formData.amount),
      currentValue: parseFloat(formData.currentValue),
    });
    setFormData({ name: "", amount: "", currentValue: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-4 rounded-xl shadow-md w-full max-w-md mb-6"
    >
      <h2 className="text-lg font-semibold mb-4 text-center">Add Investment</h2>
      <div className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Asset Name (e.g. Bitcoin)"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
        />
        <input
          type="number"
          name="amount"
          placeholder="Invested Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
        />
        <input
          type="number"
          name="currentValue"
          placeholder="Current Value"
          value={formData.currentValue}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded text-white font-medium"
        >
          Add
        </button>
      </div>
    </form>
  );
}
