import React from "react";
import { serverfunction } from "@/utils/server-utils";
import ImageSlider from "@/components/ImageSlider";

export default function page() {
  const result = serverfunction();
  return (
    <>
      <div>this is server code {result}</div>
      <ImageSlider />
    </>
  );
}
