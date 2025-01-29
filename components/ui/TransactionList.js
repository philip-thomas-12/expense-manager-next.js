"use client";
export default function TransactionList({ transactions }) {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">📋 Transactions</h2>
      <ul className="list-disc pl-5">
        {transactions.map((txn) => (
          <li key={txn.id} className="my-2">
            {txn.category} - ${txn.amount} ({txn.type})
          </li>
        ))}
      </ul>
    </div>
  );
}
