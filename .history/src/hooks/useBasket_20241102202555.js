import useSWR, { mutate } from "swr";
import { fetcher } from "../helper/fetcher";

export const useBasket = () => {
    const { data, error, mutate } = useSWR("http://localhost:3000/basket", fetcher);
    
    const basket = data?.length > 0 ? data : [];

}