import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Carousel.module.scss';
import { Navigation, Autoplay } from 'swiper/modules';

function Carousel() {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.prev}`,
        }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className={styles.carousel}
      >
        <SwiperSlide>
          <div className={styles.slide}>
            <img src="slide1.jpg" alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <img src="slide2.jpg" alt="Slide 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <img src="slide3.jpg" alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <img src="/slider1.jpg" alt="Slide 4" />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Navigation Arrows with images from the public folder */}
      <div className={styles.prev}>
        <img src="/left button.png" alt="Previous" />
      </div>
      <div className={styles.next}>
        <img src="/Right Button.png" alt="Next" />
      </div>
    </div>
  );
}

export default Carousel;
