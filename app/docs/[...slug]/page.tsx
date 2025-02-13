import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <div>
        docs for feature {slug[0]} concept {slug[1]}
      </div>
    );
  } else if (slug?.length === 1) {
    return <div>docs for feature {slug[0]}</div>;
  }
  return <div>docs home page</div>;
}
