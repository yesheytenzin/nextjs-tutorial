"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const pid = pathname.split("/")[2];
  const rid = pathname.split("/")[4];
  return (
    <div>
      review {rid} not found for product {pid}
    </div>
  );
}
