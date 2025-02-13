import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ pid: string }>;
};

// dynamic meta data
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).pid;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${id}`);
    }, 100);
  });
  return {
    title: `product ${title}`,
  };
};

export default async function page({
  params,
}: {
  params: Promise<{ pid: string }>;
}) {
  const pid = (await params).pid;
  return <div>product details {pid}</div>;
}
// using params as identifier for each product. using params from url
