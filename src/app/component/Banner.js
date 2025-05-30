"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function App() {
    const images = [
        'https://placehold.co/600x140?text=Slide+1',
        'https://placehold.co/600x140?text=Slide+3',
        'https://placehold.co/600x140?text=Slide+4',
        'https://placehold.co/600x140?text=Slide+2',
      ];
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
            delay:5000,
        }}
        loop={true}
        freeMode={true}
        grabCursor={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
         {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-md shadow"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
