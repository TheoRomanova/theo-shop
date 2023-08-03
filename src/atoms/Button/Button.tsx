import "./styles.scss";
import React from "react";
import { PaletteButton, SizeButton } from "./types";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  palette: PaletteButton;
  size: SizeButton;
  otherClassName?: string;
  disabled?: boolean;
  children?: string;
  onClick?(): void;
}

export const Button = (props: Props) => {
  return (
    <button
      className={`atom-button ${props.palette} ${props.size} ${props.otherClassName}`}
      {...props}
    />
  );
};
