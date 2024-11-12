import useSWR, { mutate } from "swr";
import { fetcher } from "../helper/fetcher";

export const useBasket = () => {
    const { data, error, mutate } = useSWR("http://localhost:3000/basket", fetcher);

    const basket = data?.length > 0 ? data : [];

    if (error || !data) {
        return {
            totalPrice: 0,
            total: 0,
            addProduct: () => { },
            isFindProduct: () => { },
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
             mutate fetch("http://localhost:3000/basket", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(product),
            });
        }
    };
    const totalPrice = basket.reduce((sum, item) => item.price + sum, 0);
    const total = totalPrice * 5 / 100
    return {
        totalPrice,
        total,
        addProduct,
        isFindProduct,
        basket,
        error,
    }

}