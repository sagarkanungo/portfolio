'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import { data } from '../skill/skillData';

function Skill() {
  return (
    <>
      <div className="p-8" id="about">
        <h1 className="text-center text-3xl font-semibold font-serif">
          Skills
        </h1>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true} 
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000 }} 
        pagination={false} 
        modules={[Autoplay]}
        className="p-5"
      >
        {data.map((skill, index) => (
          <SwiperSlide key={index}>
          <div id='skill' className="shadow-lg p-5 hover:scale-105 transform transition duration-300 ease-in-out">
            <img 
              src={skill.image} 
              alt={skill.title} 
              className="h-16 w-auto mx-auto object-contain" 
            />
            <h2 className="text-sm text-white font-bold text-center mt-4">{skill.title}</h2>
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
    </>
  );
}

export default Skill;
