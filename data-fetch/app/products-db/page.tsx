import { getProducts } from "@/prisma-db";
import { ProductDetail } from "./product-details";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductDB({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  return <ProductDetail products={products} />;
}
