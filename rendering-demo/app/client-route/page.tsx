"use client";
import React from "react";
// import { serverfunction } from "@/utils/server-utils";
import ImageSlider from "@/components/ImageSlider";
import { useTheme } from "@/components/theme-provider";
import { clientFucntion } from "@/utils/client-utils";

export default function CientRoutePage() {
  //   const result = serverfunction();
  const theme = useTheme();
  // const settings = {
  //   dots: true,
  // };
  const result = clientFucntion();
  return (
    <>
      <h1 style={{ color: theme.color.primary }}>this is client page </h1>
      <h2>client : {result}</h2>
      <ImageSlider />
    </>
  );
}
