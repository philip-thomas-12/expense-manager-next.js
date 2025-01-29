"use client";
import { useState } from "react";

export default function AddTransaction() {
  const [form, setForm] = useState({ type: "expense", amount: "", category: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/transactions", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" }
    });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 py-3 mb-4">
      <input
        type="text"
        placeholder="Category"
        className="border rounded w-full p-2"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        className="border rounded w-full p-2 my-2"
        onChange={(e) => setForm({ ...form, amount: parseFloat(e.target.value) })}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Add Transaction</button>
    </form>
  );
}
