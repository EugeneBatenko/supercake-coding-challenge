import { create } from "zustand";
import { CustomerStore } from "@/types";

export const useCustomerStore = create<CustomerStore>((set) => ({
  searchText: "",
  setSearchText: (text) => set({ searchText: text }),

  filters: [],
  setFilters: (filters) => set({ filters }),
}));
