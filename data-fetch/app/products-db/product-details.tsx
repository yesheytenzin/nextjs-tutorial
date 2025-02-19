"use client";
import { removeProduct } from "@/actions/products";
import Link from "next/link";
import React, { useOptimistic } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export const ProductDetail = ({ products }: { products: Product[] }) => {
  const [optProduct, setoptProduct] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    }
  );

  const removeProductById = async (productId: number) => {
    setoptProduct(productId);
    await removeProduct(productId);
  };
  return (
    <>
      <div>
        {optProduct.map((products) => (
          <>
            <li key={products.id}>
              <Link href={`/products-db/${products.id}`}>
                <h2>{products.title}</h2>
              </Link>
              <h2>{products.description}</h2>
              <h2>{products.price}</h2>
            </li>
            <form action={removeProductById.bind(null, products.id)}>
              <button type="submit" className="bg-red-500">
                delete
              </button>
            </form>
          </>
        ))}
      </div>
    </>
  );
};
