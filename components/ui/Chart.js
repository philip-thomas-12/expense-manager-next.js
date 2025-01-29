"use client";
import { Bar } from "react-chartjs-2";

export default function Chart({ data }) {
  return (
    <div className="bg-white p-4 shadow-md rounded">
      <Bar
        data={{
          labels: data.map((txn) => txn.category),
          datasets: [{ label: "Amount", data: data.map((txn) => txn.amount), backgroundColor: "blue" }]
        }}
      />
    </div>
  );
}
