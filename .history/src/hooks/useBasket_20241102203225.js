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
    
  const removeProduct = (id) => {
    fetch(`http://localhost:3000/basket/${id}`, {
      method: "DELETE",
    });

    setBasketData(basketData.filter((item) => item.id !== id));
  };
    const addProduct = (product) => {
        const isProduct = basketData.find((item) => item.id === product.id);
    
        if (isProduct) {
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
        basket,
        error,
    }

}