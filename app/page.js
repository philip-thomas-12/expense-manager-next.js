"use client";
import { useState, useEffect } from "react";
import AddTransaction from "@/components/ui/AddTransaction";
import TransactionList from "@/components/ui/TransactionList";
import { Button } from "@/components/ui/TransactionList";
import Chart from "@/components/ui/Chart";

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions
  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <button>class</button>
      <h1 className="text-2xl font-bold text-center mb-4">💰 Budget Tracker</h1>
      <AddTransaction />
      <Chart data={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}
