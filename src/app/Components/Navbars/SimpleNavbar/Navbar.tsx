import classnames from "classnames";
import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import * as Nav from "./NavbarStyle";
import { SimpleNavbarProps } from "../../../Models/Props";
import * as Layout from "../../../style/styleclasses";

export default (
  props: SimpleNavbarProps = {
    header: "No header",
    color: "bg-black",
    navlinks: [],
    buttonColors: Layout.whiteBG,
  }
) => {
  return (
    <div className={classnames(Nav.nav, props.color)}>
      <h1 className={classnames(Layout.largeText, Layout.whiteText )}>{props.header}</h1>
      <div className={Nav.rightsection}>
        {props.navlinks?.map((eachValue, index) => {
          return (
            <div className="mx-2" key={index}>
              <PrimaryButton
                text={eachValue}
                color={Layout.whiteBG}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
