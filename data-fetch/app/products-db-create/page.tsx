import { Submit } from "@/components/submit";
import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import React from "react";

export default function page() {
  async function createProduct(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    await addProduct(title, parseInt(price), description);
    redirect("/product-db");
  }
  return (
    <form action={createProduct} className="p-4 space-y-4 max-w-96">
      <label className="text-black">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
        />
      </label>
      <label className="text-black">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
        />
      </label>
      <label className="text-black">
        Description
        <textarea
          className="block w-full p-2 text-black border rounded"
          name="description"
        />
      </label>
      <Submit />
    </form>
  );
}
