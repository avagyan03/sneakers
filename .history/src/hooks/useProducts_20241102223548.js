import useSWR, { mutate } from "swr";
import { fetcher } from "../helper/fetcher";

export const useProducts = () => {
    const { data, error, } = useSWR("http://localhost:3000/products", fetcher);

    if (error || !data) {
        return {
            products: data
            error: error
        }
    }
};