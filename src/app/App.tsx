import React, { FC } from "react";
import SimpleNav from "./Components/Navbars/SimpleNavbar/Navbar";
import "tailwindcss/tailwind.css"



export default () => {
  const links = ["Login", "Admin"];
  return (
    <div className="min-h-screen min-w-full overflow-x-hidden">
      <SimpleNav
        header={"Header working yet? "}
        navlinks={links}
      />
      <section className="flex justify-center items-center min-h-screen">
        <h1 className=" text-black text-3xl ">hello world</h1>
      </section>
    </div>
  );
};

