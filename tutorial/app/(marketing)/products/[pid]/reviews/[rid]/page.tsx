import React from "react";
import { redirect } from "next/navigation";
// import notFound

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default async function page({
  params,
}: {
  params: Promise<{ pid: string; rid: string }>;
}) {
  const random = getRandomInt(2);

  if (random === 1) throw new Error("error finding file"); //scenario for error handling

  const { pid, rid } = await params;
  if (parseInt(rid) > 1000) {
    //notFound()
    redirect("/products");
  }
  return (
    <div>
      product {pid} review {rid}
    </div>
  );
}
// params can take multiple instance
