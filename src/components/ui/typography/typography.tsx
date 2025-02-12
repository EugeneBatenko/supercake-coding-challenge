import { FC } from "react";
import { TitleProps } from "@/types";

export const SectionTitle: FC<TitleProps> = ({
  name,
  additionalClasses = "",
}) => {
  return (
    <h2
      className={`font-semibold section-title text-[25px]/[30.26px] tracking-[-0.03em] ${additionalClasses}`}
    >
      {name}
    </h2>
  );
};
