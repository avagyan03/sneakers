import styles from "./basket.module.css";
import Icon from "../Icon";

  const Basket = (props) => {

    const {  onClickClose,products , removeProduct,isSomeProduct } = props;

    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.aside}>
                <h2 className={styles.title}>Корзина</h2>
                <button onClick={onClickClose}>X</button>
                <div className={styles.cartWrapper}>
                    {products.map((item) => (
                        <div className={styles.cartItem} key={item.id}>
                            <img className={styles.img} src={item.img} alt="Sneakers" />
                            <div className={styles.cartContent}>
                                <p className={styles.cartItemTitle}>{item.title}</p>
                                <span className={styles.span}>{item.price} руб.</span>
                            </div>
                            <button onClick={() => removeProduct(item.id)}>
                                <Icon className={styles.buttonClose} id={"buttonClose"} />
                            </button>
                        </div>
                    ))}
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
