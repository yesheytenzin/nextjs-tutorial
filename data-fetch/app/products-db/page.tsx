import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prisma-db";
import Link from "next/link";
import React, { useOptimistic } from "react";
import { ProductDetail } from "./product-details";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductDB() {
  const products: Product[] = await getProducts();

  return <ProductDetail products={products} />;
}
