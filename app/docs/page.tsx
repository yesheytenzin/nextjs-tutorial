import React from "react";

export default async function page() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("inetentional delay");
    }, 2000);
  });
  return <div>default docs page</div>;
}
