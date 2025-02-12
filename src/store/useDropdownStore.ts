import { create } from "zustand";
import { DropdownState } from "@/types";

export const useDropdownStore = create<DropdownState>((set) => ({
  isDropdownOpen: false,
  openDropdown: () => set(() => ({ isDropdownOpen: true })),
  closeDropdown: () => set(() => ({ isDropdownOpen: false })),
  toggleDropdown: () =>
    set((state) => ({ isDropdownOpen: !state.isDropdownOpen })),
}));
