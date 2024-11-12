import useSWR, { mutate } from "swr";
import { fetcher } from "../helper/fetcher";

export const useFavorite = () => {



    const { data, error, mutate, isLoading } = useSWR(`${import.meta.env.VITE_API_URL}/favorite`, fetcher);

    const favorites = data?.length > 0 ? data : [];


    if (error || !data) {
        return {
            addFavorite: () => { },
            isFindFavoriteId: () => { },
            removeFavorite: () => { },
            isSomeFavorite: () => { },
            favorites: [],
            isLoading,
            error: error
        }
    }
    const isFindFavoriteId = (id) => {
        return favorites?.find((item) => item.productId === id)?.id;
    };
    const isSomeFavorite = (id) => {
        return favorites?.some((item) => item.productId === id);
    }

    const removeFavorite = async (id) => {
        await fetcher(`${import.meta.env.VITE_API_URL}/favorite/${id}`, {
            method: "DELETE",

        }),
            mutate(
                favorites.filter((item) => item.id !== id)

            )
    };



    const addFavorite = async (product) => {
        if (isSomeFavorite(product.productId)) {

            return;
        }
        await fetcher(`${import.meta.env.VITE_API_URL}/favorite`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product),
        }),
            mutate(
                [...favorites, product]

            )
    }


    return {
        addFavorite,
        isFindFavoriteId,
        removeFavorite,
        isSomeFavorite,
        favorites,
        error: error,
        isLoading
    };
}

