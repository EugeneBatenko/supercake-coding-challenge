import { ReactNode } from "react";

export type DropdownProps = {
  name: string;
  children: ReactNode;
  additionalClasses?: string;
};

export type DropdownState = {
  isDropdownOpen: boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
  toggleDropdown: () => void;
};
