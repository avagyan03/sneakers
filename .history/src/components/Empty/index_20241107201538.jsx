import styles from "./empty.module.css";
import {Icon} from "../index";
import { useNavigate } from "react-router-dom";
import 

 export const Empty = (props) => {
  const { imgUrl, title, text, onClickButton = () => {} } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.cardEmpty}>
      <img className={styles.emptyImg} src={imgUrl} alt="Empty" />
      <h2 className={styles.emptyTitle}>{title}</h2>
      <p className={styles.emptyText}>{text}</p>
      <button
        onClick={() => {
          navigate(-1);
          onClickButton();
        }}
        className={styles.buttonBack}
      >
        Вернуться назад
        <Icon className={styles.arrowLeft} id={"arrowLeft"} />
      </button>
    </div>
  );
};


