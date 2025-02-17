import Link from "next/link";
import React from "react";

export default function ProductsPage() {
  return (
    <>
      <h1>Featured products</h1>
      <div className="flex">
        <Link href="/products/1">product 1</Link>
        <Link href="/products/2">product 2</Link>
        <Link href="/products/3">product 3</Link>
      </div>
    </>
  );
}
