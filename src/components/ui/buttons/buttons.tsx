import { FC, ReactNode } from "react";
import "./buttons.css";

type ButtonProps = {
  type: "submit" | "reset" | "button";
  children: ReactNode;
  color?: "primary" | "secondary";
  onClick?: () => void;
  additionalClasses?: string;
};

export const Button: FC<ButtonProps> = ({
  type,
  children,
  additionalClasses,
  color,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`button font-medium text-[14px]/[16.9px] tracking-0 text-center ${color} ${additionalClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
