import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border  rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white text-white bg-transparent",
    },
    size: {
      sm: "h-10",
      md: "h-12",
    },
  },
});

type ButtonProps = {
  variant: "primary" | "secondary";
  size?: "sm" | "md";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant,
  className,
  size = "md",
  ...otherProps
}: ButtonProps) => {
  return (
    <button className={classes({ variant, className, size })} {...otherProps} />
  );
};
