"use client";
import React, { useState } from "react";

function AddTransaction() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Add Transaction</h2>
      <input
        type="text"
        placeholder="Transaction Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 my-2 w-full"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 my-2 w-full"
      />
      <button className="bg-blue-500 text-white p-2 mt-2">Add</button>
    </div>
  );
}

export default AddTransaction;
