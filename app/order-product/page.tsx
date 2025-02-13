"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProduct() {
  const router = useRouter();
  const handleclick = () => {
    console.log("order in progress ........");
    router.replace("/");
  };
  return (
    <>
      <h1>order processing</h1>
      <button onClick={handleclick}>place order</button>
    </>
  );
}
