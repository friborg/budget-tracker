import { create } from "zustand";

type UiStore = {
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

export const useUiStore = create<UiStore>((set) => ({
  isModalOpen: false,
  setModalOpen: (open) => set({ isModalOpen: open }),
}));
