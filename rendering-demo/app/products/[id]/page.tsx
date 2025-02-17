import React from "react";

export const dynamicParams = false;

// helps prerender static route for dynamic segemnt
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Products({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <h1>
        Product {id} at {new Date().toLocaleTimeString()}
      </h1>
    </>
  );
}
