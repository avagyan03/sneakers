import useSWR, { mutate } from "swr";
import { fetcher } from "../helper/fetcher";
export const useShop = () => {
    const { data, error, mutate } = useSWR("http://localhost:3000/shop", fetcher);
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
        mutate(fetcher("http://localhost:3000/shop", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product),
        }),
            { populateCache: false }
        );

        product.forEach((obj) => {
            mutate(
                "http://localhost:3000/basket",
                fetcher(`http://localhost:3000/basket/${obj.id}`, {
                    method: "DELETE",
                }),
                {
                    populateCache: false,
                }
            );
        });

    };

    const shopProductsLength = shop.length;
    return {
        shopProductsLength,
        addShop,
        shop,
        error,
    }
}