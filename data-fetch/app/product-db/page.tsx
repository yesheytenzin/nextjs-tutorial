import { getProducts } from "@/prisma-db";
import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductDB() {
  const products: Product[] = await getProducts();
  return (
    <div>
      {products.map((products) => (
        <li key={products.id}>
          <h2>{products.title}</h2>
          <h2>{products.description}</h2>
          <h2>{products.price}</h2>
        </li>
      ))}
    </div>
  );
}
