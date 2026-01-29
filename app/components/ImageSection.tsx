"use client";
import Image from 'next/image';
import { Dela_Gothic_One } from 'next/font/google';
import { Tektur } from 'next/font/google';
import Gallary from './Gallary';
import { motion } from "framer-motion"


const tektur = Tektur({
  subsets: ['cyrillic'],
  variable: '--font-tektur',
});

const delaGothic = Dela_Gothic_One({
  subsets: ['cyrillic'],
  variable: '--font-dela',
  weight: '400',
});

// Масив зображень
const imagesFirstRow = [
  { src: '/113.webp', alt: 'Фото 3' },
  { src: '/31.webp', alt: 'Фото 2' },
  { src: '/29.webp', alt: 'Фото 2' },
  { src: '/1.webp', alt: 'Фото 3' },
];

const imagesSecondRow = [
  { src: '/25.webp', alt: 'Фото 3' },
  { src: '/112.webp', alt: 'Фото 2' },
  { src: '/30.webp', alt: 'Фото 3' },
  { src: '/115.webp', alt: 'Фото 2' },
  { src: '/26.webp', alt: 'Фото 2' },
];

const imagesThirdRow = [
  { src: '/28.webp', alt: 'Фото 3' },
  { src: '/163.webp', alt: 'Фото 2' },
  { src: '/7.webp', alt: 'Фото 3' },
  { src: '/11.webp', alt: 'Фото 2' },
  { src: '/162.webp', alt: 'Фото 2' },
];

const imagesFourRow = [
  { src: '/168.webp', alt: 'Фото 3' },
  { src: '/161.webp', alt: 'Фото 2' },
  { src: '/164.webp', alt: 'Фото 3' },
  { src: '/165.webp', alt: 'Фото 2' },
];

export default function ImageSection() {
  return (
    <div className='flex flex-col sm:aspect-[16/9]  aspect-[9/16] w-full justify-center my-[10%]'>
      <div className='flex flex-col gap-[0.2vw] w-full h-full justify-center '>
       <Gallary animationClass='animate-infinite-scrollv2' images={imagesFirstRow}  />
        <Gallary images={imagesSecondRow}  />
        <Gallary animationClass='animate-infinite-scrollv2 sm:hidden block' images={imagesThirdRow}  />
    </div>
    </div>
  );
}
