import classnames from "classnames";
import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import * as Nav from "./NavbarStyle";

interface SimpleNavbarProps {
  header: string;
  color: string;
  navlinks?: string[];
}

export default (
  props: SimpleNavbarProps = {
    header: "No header",
    color: "bg-black",
    navlinks: [],
  }
) => {
  return (
    <div className={classnames(Nav.nav, props.color)}>
      <h1 className={Nav.header}>{props.header}</h1>
      <div className={Nav.rightsection}>
        {props.navlinks?.map((eachValue, index) => {
          return (
            <div className="mx-2" key={index}>
              <PrimaryButton
                text={eachValue}
                color=" bg-white "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
