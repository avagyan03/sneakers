import { create } from "zustand";
export const isShowBasket = create((set, get) => ({
    isShow: false,
    setIsShow: () => set({ isShow: !get().isShow }),
}));