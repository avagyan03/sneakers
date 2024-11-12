import useSWR, { mutate } from "swr";
import { fetcher } from "../helper/fetcher";
export const useShop = () => {
    const { data, error, mutate } = useSWR("http://localhost:3000/basket", fetcher);
    const shop = data?.length > 0 ? data : [];
    if (error || !data) {
        return {
            addShop: () => {},
            shop: [],
            error: error
        }
    }

    return {
        addShop,
        shop,
        error,
    }
}