"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
    const images = [
        '/banner/banner.png',
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
            <div className='w-[1486px] h-[446px]'>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-md shadow object-center"
              height={446}
              width={1486}
              style={{height:'100%',width:'100%'}}
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
