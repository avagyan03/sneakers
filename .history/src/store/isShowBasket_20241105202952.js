import { create } from "zustand";
const isShowBasket = create((set => ({
    isShow: false,
    setIsShow :() =>{set()}
})));