import useSWR, { mutate } from "swr";
import { fetcher } from "../helper/fetcher";

export const useBasket = () => {
    const { data, error, mutate } = useSWR("http://localhost:3000/basket", fetcher);

    const basket = data?.length > 0 ? data : [];

    if (error || !data) {
        return {
            basket: [],
            error: error
        }
    }
    const isFindProduct = (id) => {
        return basketData.find((item) => item.id === id)?.id;
    };

    const removeProduct = (id) => {
        fetch(`http://localhost:3000/basket/${id}`, {
            method: "DELETE",
        });


    };
    const addProduct = (product) => {


        if (isFindProduct(product.id)) {
            removeProduct(product.id);
        } else {
            fetch("http://localhost:3000/basket", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(product),
            });
        }
    };
    return {
        addProduct,
        isFindProduct,
        basket,
        error,
    }

}