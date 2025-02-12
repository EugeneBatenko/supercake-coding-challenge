import { FC } from "react";
import { InputProps } from "@/types";
import "./form.css";

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  additionalClasses,
  style,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input h-[40px] px-3 py-2.5 border border-[var(--color-border)] rounded-xl text-[14px]/[16.9px] tracking-[0] ${additionalClasses}`}
      style={style}
      value={value}
      onChange={onChange}
    />
  );
};
