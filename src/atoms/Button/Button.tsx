import "./styles.scss";
import React from "react";
import { PaletteButton, SizeButton } from "./types";

interface Props {
  palette: PaletteButton;
  size: SizeButton;
  rest?: string;
  children: React.ReactNode;
}

export const Button = (props: Props) => {
  return (
    <button
      className={`atom-button ${props.palette} ${props.size} ${props.rest}`}
      {...props}
    />
  );
};
