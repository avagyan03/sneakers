import useSWR, { mutate } from "swr";
import { fetcher } from "../helper/fetcher";
export const useShop = () => {
    const { data, error, mutate } = useSWR("http://localhost:3000/basket", fetcher);
    if (error || !data) {
        return {
            totalPrice: 0,
            total: 0,
            addProduct: () => { },
            isFindProduct: () => { },
            shop: [],
            error: error
        }
    }