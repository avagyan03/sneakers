import useSWR, { mutate } from "swr";
import { fetcher } from "../helper/fetcher";

export const useProducts = () => {
    const { data, error, } = useSWR("http://localhost:3000/products", fetcher);
    const products = data?.length > 0 ? data : []

    if (error || !data) {
        return {
            productsLength: 0,
            products: [],
            error: error
        }
    }
};