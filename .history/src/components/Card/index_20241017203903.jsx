import React from 'react'

const Card = () => {
  return (
    <ul className={styles.list}>
    {sneakers.map((obj, index) => (
      <li className={styles.item} key={index}>
        <button
          className={
            isFavorite
              ? styles.favoriteButton + " " + styles.favoriteButtonActive
              : styles.favoriteButton
          }
          style={{
            color: isFavorite && "#ff8585",
            backgroundColor: isFavorite && "#fef0f0",
          }}
          onClick={onClickFavorite}
        >
          <Icon className={styles.favorite} id="favorite" />
        </button>
        <img className={styles.img} src={obj.img} alt="sneakers" />
        <h3 className={styles.itemTitle}>{obj.title}</h3>
        <div className={styles.wrapper}>
          <span className={styles.span}>Цена:</span>
          <span className={styles.price}>{obj.price} руб.</span>
          <button
            className={clsx(
              styles.plusButton,
              isPlus && styles.plusButtonActive
            )}
            onClick={onClickPlus}
          >
            <Icon
              className={styles.plus}
              id={isPlus ? "checked" : "plus"}
            />
          </button>
        </div>
      </li>
    ))}
  </ul>
  )
}

export default Card
