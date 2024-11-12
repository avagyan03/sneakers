import useSWR, { mutate } from "swr";
import { fetcher } from "../helper/fetcher";
export const useShop = () => {
    const { data, error, mutate } = useSWR ("http://localhost:3000/shop", fetcher);
    const shop = data?.length > 0 ? data : [];
    if (error || !data) {
        return {
            shopProductsLength: 0,
            addShop: () => { },
            shop: [],
            error: error
        }
    }
    const addShop = (product) => {
       mutate(fetch("http://localhost:3000/shop", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product),
        }));

        product.forEach((obj) => {
            mutate(
                "http://localhost:3000/basket",
                fetch(`http://localhost:3000/basket/${obj.id}`, {
                    method: "DELETE",
                }),
                {
                    populateCache: false,
                }
            );
        });

        setShop([...shop, product]);
    };

    const shopProductsLength = shop.length;
    return {
        shopProductsLength,
        addShop,
        shop,
        error,
    }
}