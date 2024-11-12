import { create } from "zustand";
   export const isShowBasket = create(set => ({
    isShow: false,
    setIsShow: () => set({ isShow: !isShow })
}));