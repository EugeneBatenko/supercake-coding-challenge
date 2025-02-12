"use client";

import { FC } from "react";
import { ChevronDown } from "lucide-react";
import { DropdownProps } from "@/types";
import { useDropdownStore } from "@/store/useDropdownStore";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import "./dropdown.css";

export const Dropdown: FC<DropdownProps> = ({ name, children }) => {
  const { isDropdownOpen, toggleDropdown, closeDropdown } = useDropdownStore();

  const handleClickOutside = () => {
    closeDropdown();
  };

  const ref = useOutsideClick<HTMLDivElement>(handleClickOutside);

  return (
    <div ref={ref} className="relative">
      <button
        className={`${isDropdownOpen ? "open" : ""} dropdown-button flex justify-between items-center bg-white w-[122px] h-[40px] border border-[var(--color-border)] rounded-xl cursor-pointer ps-5 pe-3 py-3`}
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
      >
        <span className="font-medium text-sm/[16.94px]">{name}</span>
        <ChevronDown size={16} color="var(--color-icon)" />
      </button>
      <div
        className={`${isDropdownOpen ? "open" : ""} dropdown-children absolute left-0 mt-1 bg-white border border-[var(--color-border)] rounded-lg shadow-lg z-10`}
      >
        {children}
      </div>
    </div>
  );
};
