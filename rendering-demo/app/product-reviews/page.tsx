import React from "react";
import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default function page() {
  return (
    <>
      <h1>product details and reviews</h1>
      <Suspense fallback={<p>prodcuts is loading....</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>reviews is loading....</p>}>
        <Reviews />
      </Suspense>
    </>
  );
}
