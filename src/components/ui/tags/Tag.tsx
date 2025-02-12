import { FC } from "react";
import { DynamicIcon } from "@/ui/icons/DynamicIcons";
import "./tags.css";
import { TagProps } from "@/types";

export const Tag: FC<TagProps> = ({
  name,
  defaultValue,
  className,
  onClick,
}) => {
  return (
    <span
      className={`tag cursor-pointer rounded-[28px] font-medium text-sm/[16.94px] border border-(--color-border) flex items-center py-1.5 px-4 w-fit ${className}`}
      onClick={onClick}
    >
      {!defaultValue && (
        <DynamicIcon className="me-1" iconName={name} size={16} />
      )}
      {name}
    </span>
  );
};
