import React, { FC } from "react";
import * as  Button from './PrimaryButtonStyle'; 

interface PrimaryButtonProps {
  text?: string;
  color?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = (
  props = {
    text: "Provide text",
    color: " bg-white ",
  }
) => {
  return (
    <button className={Button.PrimaryButton + props.color}>
      {props.text}
    </button>
  );
};

export default PrimaryButton;
