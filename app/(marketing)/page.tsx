import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h2>this is the home page</h2>
        <Link href="/dashboard" className="flex p-5">
          dashboard
        </Link>
        <Link href="/products" className="flex p-5">
          products
        </Link>
        <Link href="/articles/news?lang=en">read in english</Link>
        <Link href="/articles/news?lang=fr">read in french</Link>
      </div>
    </>
  );
}
