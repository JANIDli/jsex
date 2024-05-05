import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const CustomSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="B1.jpg" alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src="B1.jpg" alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src="B1.jpg" alt="Slide 3" /></SwiperSlide>
      <SwiperSlide><img src="B1.jpg" alt="Slide 4" /></SwiperSlide>
      {/* ... more slides */}
    </Swiper>
  );
};
