"use client";
import { Button as ButtonComponent } from "@material-tailwind/react";
import React from "react";

// Butonn gradient + (black, blue, grey, white)
// Button outlined + (black, blue, white)
// Button text + (white, red, green)

interface ButtonProps {
  variant: "gradient" | "outlined" | "text";
  color: "black" | "grey" | "blue" | "white" | "red" | "green";
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  size: "primary" | "secondary";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ variant, color, children, type, size, onClick }: ButtonProps) => {
  let buttonClasses =
    "flex items-center justify-center font-sans font-semibold capitalize tracking-wide rounded bg-transparent shadow-none hover:shadow-none";

  switch (size) {
    case "primary":
      buttonClasses += " h-12 w-[146px] text-base";
      break;
    case "secondary":
      buttonClasses += " h-[38px] w-[119px] text-sm";
      break;
    default:
      throw new Error(`Invalid type option '${type}' for Button`);
  }

  switch (variant) {
    case "gradient":
      switch (color) {
        case "black":
          buttonClasses += " bg-grey0 text-grey10 hover:bg-grey1";
          break;
        case "blue":
          buttonClasses += " bg-Brand1 text-grey10 hover:bg-Brand2";
          break;
        case "grey":
          buttonClasses += " bg-grey6 text-grey2 hover:bg-grey5";
          break;
        case "white":
          buttonClasses += " bg-grey10 text-grey1 hover:bg-grey1 hover:text-grey1";
          break;
        default:
          throw new Error(`Invalid color option '${color}' for gradient variant`);
      }
      break;

    case "outlined":
      buttonClasses += " border-2";
      switch (color) {
        case "black":
          buttonClasses +=
            " border-grey0 text-grey0 hover:border-grey0 hover:text-grey10 hover:bg-grey0";
          break;
        case "blue":
          buttonClasses +=
            " border-Brand1 text-Brand1 hover:border-Brand2 hover:text-Brand2 hover:bg-Brand2 hover:bg-opacity-5";
          break;
        case "white":
          // No additional classes needed
          break;
        default:
          throw new Error(`Invalid color option '${color}' for outlined variant`);
      }
      break;

    case "text":
      switch (color) {
        case "white":
          buttonClasses += " text-grey1 hover:bg-grey8";
          break;
        case "red":
          buttonClasses += " bg-Alert2 text-Alert1 hover:bg-Alert3";
          break;
        case "green":
          buttonClasses += " text-Success1 bg-Success2 hover:bg-Success3";
          break;
        default:
          throw new Error(`Invalid color option '${color}' for text variant`);
      }
      break;

    default:
      throw new Error(`Invalid variant option '${variant}' for ButtonPrimary`);
  }

  return (
    <ButtonComponent type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
