import React from "react";
import NavLinks from "./nav-links";
import NavSearch from "./nav-serach";

export default function NavBar() {
  console.log("nav bar rendered");
  return (
    <>
      <NavLinks />
      <NavSearch />
    </>
  );
}
