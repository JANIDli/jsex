import React from 'react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);

export default function Usage() {
  return (
    <main>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        navigation={true}
        scrollbar={{ draggable: true }}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </main>
  );
}
