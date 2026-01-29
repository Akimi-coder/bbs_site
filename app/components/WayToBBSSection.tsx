"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { Dela_Gothic_One } from 'next/font/google';
import { Tektur } from 'next/font/google';
import Gallary from './Gallary';
import { motion } from "framer-motion"
import VacancyCard from './VacancyCard';
import WayCard from "./WayCard";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const tektur = Tektur({
  subsets: ['cyrillic'],
  variable: '--font-tektur',
});

const delaGothic = Dela_Gothic_One({
  subsets: ['cyrillic'],
  variable: '--font-dela',
  weight: '400',
});

export default function WayToBBSSection() {
  const cards = [
    { number: '01', text: 'Обери вакансію на сайті' },
    { number: '02', text: 'Заповни заявку та дочекайся дзвінка від наших рекрутерів' },
    { number: '03', text: 'Пройди співбесіду' },
    { number: '04', text: 'Збери необхідні речі і документи' },
    { number: '05', text: 'Прибудь до нас у визначений час' },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div id="training" className={`font-dela ${delaGothic.variable} ${tektur.variable} sm:aspect-[16/9] aspect-[14/16] flex flex-col overflow-hidden bg-[linear-gradient(rgba(0,0,0,0.93),rgba(0,0,0,0.93)),url('/shewron.webp')] bg-repeat-x bg-center sm:bg-[length:45%_90%] bg-[length:45%_60%] mb-[2vw]`}>
      <div className="flex bg-lime p-[0.5vw]">
        <div
          className="flex flex-none w-full justify-between text-black">
          <div
            className="flex sm:text-[2vw] text-[5.5vw] sm:py-[0vw] py-[2vw] font-semibold items-center justify-evenly w-full">
            <h3 className="">ТВІЙ</h3>
            <img src="/arrowCircle.svg" alt="Іконка" className="sm:w-[2vw] sm:h-[2vw] w-[5.5vw] h-[5.5vw]" />
            <h3 className="">ШЛЯХ</h3>
            <img src="/arrowCircle.svg" alt="Іконка" className="sm:w-[2vw] sm:h-[2vw] w-[5.5vw] h-[5.5vw]" />
            <h3 className="">ДО</h3>
            <img src="/arrowCircle.svg" alt="Іконка" className="sm:w-[2vw] sm:h-[2vw] w-[5.5vw] h-[5.5vw]" />
            <h3 className="">ББС</h3>
          </div>
        </div>
      </div>

      <div className="sm:flex hidden font-tektur text-white flex-col mt-[2vw]">
        <div className="flex gap-[0.1vw] justify-center h-[1/3]">
          <WayCard number="01" text="Обери вакансію на сайті" />
          <WayCard number="02" text="Заповни заявку та дочекайся дзвінка від наших рекрутерів" />
          <WayCard number="03" text="Пройди співбесіду" />
        </div>
        <div className="flex gap-[0.1vw] justify-center h-[1/3]">
          <WayCard number="04" text="Збери необхідні речі і документи" />
          <WayCard number="05" text="Прибудь до нас у визначений час" />
        </div>
      </div>
      <div className="flex font-tektur sm:hidden w-full h-full items-center text-white">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        className="w-full h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {cards.map((c, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center w-full pt-[10vw]">
            <WayCard number={c.number} text={c.text} active={i === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}
