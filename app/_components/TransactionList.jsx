"use client";
import React, { useState } from "react";

function TransactionList() {
  const [transactions, setTransactions] = useState([
    { id: 1, name: "Groceries", amount: -50 },
    { id: 2, name: "Salary", amount: 500 },
  ]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Transactions</h2>
      <ul>
        {transactions.map((t) => (
          <li key={t.id} className="border p-2 my-2">
            {t.name} - ${t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
