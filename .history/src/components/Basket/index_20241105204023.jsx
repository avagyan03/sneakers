import styles from "./basket.module.css";
import Icon from "../Icon";
import Empty from "../Empty";
import { useState } from "react";
import { useBasket } from "../../hooks/useBasket";
import { useShop } from "../../hooks/useShop";
import { isShowBasket } from "../../store/isShowBasket";

const Basket = (props) => {
  const [isBuy, SetIsBuy] = useState(false);
  // const { onClickClose } = props;
  const { basket, removeProduct, total, totalPrice } = useBasket();
  const { addShop, shopProductsLength } = useShop();
  const { setSisShow } = isShowBasket();
  return (
    <>
      <div className={styles.overlay} onClick={setSisShow}></div>
      <div className={styles.aside}>
        <h2 className={styles.title}>Корзина</h2>
        <button onClick={setSisShow}>X</button>
        {basket.length > 0 ? (
          <>
            <div className={styles.cartWrapper}>
              {basket.map((item) => (
                <div className={styles.cartItem} key={item.id}>
                  <img className={styles.img} src={item.img} alt="Sneakers" />
                  <div className={styles.cartContent}>
                    <p className={styles.cartItemTitle}>{item.title}</p>
                    <span className={styles.span}>{item.price} руб.</span>
                  </div>
                  <button
                    className={styles.buttonClose}
                    onClick={() => removeProduct(item.id)}
                  >
                    <Icon className={styles.icon} id={"close"} />
                  </button>
                </div>
              ))}
              <div className={styles.items}>
                <ul className={styles.itemsList}>
                  <li className={styles.itemsProps}>
                    <p className={styles.text}>Итого:</p>
                    <div className={styles.dots}></div>
                    <span className={styles.price}>{totalPrice} руб.</span>
                  </li>
                  <li className={styles.itemsProps}>
                    <p className={styles.text}>Налог 5%:</p>
                    <div className={styles.dotsSec}></div>
                    <span className={styles.price}>{total} руб.</span>
                  </li>
                </ul>
                <button
                  className={styles.buttonConfirm}
                  onClick={() => {
                    addShop(basket);
                    SetIsBuy(true);
                  }}
                >
                  Оформить заказ
                  <Icon className={styles.arrowRight} id={"arrowRight"} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <Empty
            imgUrl={isBuy ? "img/emptySuccess.png" : "img/Empty.png"}
            title={isBuy ? "Заказ оформлен!" : "Корзина пустая"}
            text={
              isBuy
                ? `Ваш заказ #${shopProductsLength} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            onClickButton={onClickClose}
          />
        )}
      </div>
    </>
  );
};
export default Basket;
