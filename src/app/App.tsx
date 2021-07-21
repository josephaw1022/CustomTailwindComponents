import React, { FC } from "react";
import SimpleNav from "./Components/Navbars/SimpleNavbar/Navbar";
import "tailwindcss/tailwind.css"
import * as Layout from "./style/styleclasses"


export default () => {
  const links = ["Login", "Admin"];
  return (
    <div className={Layout.screenFlex}>
      <SimpleNav
        color={Layout.blueBG} 
        header={"Header working yet?"}
        navlinks={links}
      />
      <section className={Layout.screenFlex}>
        <h1 className={Layout.veryLargeText}>hello world</h1>
      </section>
    </div>
  );
};


