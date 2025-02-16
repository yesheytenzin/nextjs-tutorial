import React from "react";
import Link from "next/link";
import { Card } from "@/components/card";

export default function page() {
  return (
    <>
      <Card>
        <div>notification</div>
        <div>
          <Link href="/complex-dashboard/archived" className="text-blue-500">
            Archive
          </Link>
        </div>
      </Card>
    </>
  );
}
