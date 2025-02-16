"use client";

// to use params and searchParams in clent, implement use hook from react, remove async and replace await with use
import Link from "next/link";
import React from "react";
import { use } from "react";

export default function ArtcilePage({
  params,
  searchParams,
}: {
  params: Promise<{ articleid: string }>;
  searchParams: Promise<{ lang?: "es" | "en" | "fr" }>;
}) {
  const { articleid } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <>
      <h1>this is the articles for {articleid}</h1>;<p>reading in {lang}</p>
      <div>
        <Link href={`/articles/${articleid}?lang=en`}>english</Link>
        <Link href={`/articles/${articleid}?lang=fr`}>french</Link>
        <Link href={`/articles/${articleid}?lang=es`}>spanish</Link>
      </div>
    </>
  );
}
