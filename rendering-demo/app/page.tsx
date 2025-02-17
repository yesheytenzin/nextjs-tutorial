import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>home page</h1>
      <div className="flex">
        <Link href="/dashboard" className="p-3">
          Dashboard
        </Link>
        <Link href="/about" className="p-3">
          About
        </Link>
      </div>
    </>
  );
}
