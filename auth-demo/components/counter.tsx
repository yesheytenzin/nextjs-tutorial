"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import React from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);
  const { userId, sessionId, isLoaded, getToken } = useAuth();
  //   const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !userId) {
    return null;
  }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
