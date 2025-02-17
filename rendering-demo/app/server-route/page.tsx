import React from "react";
import { serverfunction } from "@/utils/server-utils";
import ImageSlider from "@/components/ImageSlider";
// import { clientFucntion } from "@/utils/client-utils";

export default function page() {
  const result = serverfunction();
  // const clienRes = clientFucntion();
  return (
    <>
      <div>
        this is server code {result}
        {/* {clienRes} */}
      </div>
      <ImageSlider />
    </>
  );
}
