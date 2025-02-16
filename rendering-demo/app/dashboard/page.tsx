"use client";
import React, { useState } from "react";

export default function Dashboard() {
  // invoke state
  console.log("dashboard client component");
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Dashbaord</h1>
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello {name}!</p>
    </div>
  );
}
