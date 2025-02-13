import Link from "next/link";
import React from "react";

export default function page() {
  const pid = 100; // synmaic pid generation
  return (
    <div>
      <h1>product list</h1>
      <h2>
        <Link href="/products/1">product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>
          product 3
        </Link>
      </h2>
      <h2>
        <Link href={`/products/${pid}`}>product {pid}</Link>
      </h2>
      <Link href="/">home</Link>
    </div>
  );
}
