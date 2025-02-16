import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>this is inner f2</h1>
      <Link href={"/f5"}>f5</Link>
    </div>
  );
}
