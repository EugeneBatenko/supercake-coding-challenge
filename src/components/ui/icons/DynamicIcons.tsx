import React, { FC } from "react";
import { DynamicIconProps } from "@/types";

// Dynamically load icon using Webpack require.context
// TODO Fix types
// @ts-expect-error - Warning with require context type
const iconsContext = require.context("@/public/icons", false, /\.svg$/);

export const DynamicIcon: FC<DynamicIconProps> = ({
  iconName,
  size,
  className,
}) => {
  try {
    const Icon = iconsContext(`./${iconName.toLowerCase()}.svg`).default;

    return <Icon width={size} height={size} className={className} />;
  } catch (error) {
    console.warn(error);
    return <span></span>;
  }
};
