import styles from "./basket.module.css";
import Icon from "../Icon";

  const Basket = (props) => {
    const { isShow, onClickClose, onClickRemoveProduct, data } = props;

    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.aside}>
                <h2 className={styles.title}>Корзина</h2>
                <button onClick={onClickClose}>X</button>
                <div className={styles.cartWrapper}>
                </div>
                <div className={styles.items}>
                    <ul className={styles.itemsList}>
                        <li className={styles.itemsProps}>
                            <p className={styles.text}>Итого:</p>
                            <div className={styles.dots}></div>
                            <span className={styles.price}>21 498 руб.</span>
                        </li>
                        <li className={styles.itemsProps}>
                            <p className={styles.text}>Налог 5%:</p>
                            <div className={styles.dotsSec}></div>
                            <span className={styles.price}>1074 руб.</span>
                        </li>
                    </ul>
                    <button className={styles.buttonConfirm}>
                        Оформить заказ
                        <Icon className={styles.arrowRight} id={"arrowRight"} />
                    </button>
                </div>
            </div>
        </>
    );
};
export default Basket;
