import React from "react";
import Link from "next/link";
import { Card } from "@/components/card";

// concpet to apply unmatched routes
export default function page() {
  return (
    <>
      <Card>
        <div>archived notification</div>
        <div>
          <Link href="/complex-dashboard" className="text-blue-500">
            default
          </Link>
        </div>
      </Card>
    </>
  );
}
