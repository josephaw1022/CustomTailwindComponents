import classnames from 'classnames';
import React, { FC } from "react";
import { PrimaryButtonProps } from "../../../Models/Props";
import * as Button from './PrimaryButtonStyle';
import * as Layout from "../../../style/styleclasses"; 

const PrimaryButton: FC<PrimaryButtonProps> = (
  props = {
    text: "Provide text",
    color: Layout.whiteBG,
  }
) => {
  return (
    <button className={ Button.PrimaryButton+ props.color }>
      {props.text}
    </button>
  );
};

export default PrimaryButton;
