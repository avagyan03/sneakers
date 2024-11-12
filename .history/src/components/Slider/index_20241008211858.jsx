import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./slider.module.css";

const Slider = () => {
  return (
    <div className="container">
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        navigation
        className={styles.slider}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.content}>
            <img className={styles.logo} src="img/sliderLogo.png" alt="" />
            <h2 className={styles.title}>
              <span className={styles.span}>Stan Smith,</span>
              Forever!
            </h2>
            <button className={styles.button}>Купить</button>
          </div>
          <img className={styles.img} src="img/frog.png" alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Slider;