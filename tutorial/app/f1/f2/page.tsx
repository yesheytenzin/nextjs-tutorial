import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>this is f2 page</h1>
      <Link href={"/f4"}>f4</Link>
    </div>
  );
}
