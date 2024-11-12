import useSWR, { mutate } from "swr";
import { fetcher } from "../helper/fetcher";
export const useBasket = () => {
    const { data, error, mutate } = useSWR("http://localhost:3000/basket", fetcher);