"use client";
import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <h1 className="text-2xl font-bold">Welcome to Budget Tracker </h1>
    </div>
  );
}
