import React from "react";
// import fs from "fs";
import { ServerCompTwo } from "./server-comp-two";

export const ServerCompOne = () => {
  //   fs.readFileSync("/app/components/server-comp-one.tsx", "utf-8");
  return (
    <>
      <div>server comp one</div>
      <ServerCompTwo />
    </>
  );
};
