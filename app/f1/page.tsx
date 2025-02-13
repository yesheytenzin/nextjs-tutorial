import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>f1 page</h1>
      <Link href={"/f1/f2"}>f2</Link>
      <Link href={"/f3"}>f3</Link>
    </div>
  );
}
