import { ChangeEvent, CSSProperties } from "react";

export type InputProps = {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  additionalClasses?: string;
  style?: CSSProperties;
};
