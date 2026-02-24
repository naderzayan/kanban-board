import { create } from "zustand";

export const useUIStore = create((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),
}));