"use client";
import { Dela_Gothic_One } from 'next/font/google';
import { Tektur } from 'next/font/google';

type VacancyCardProps = {
  number: string;
  text: string;
  className: string;
};

const tektur = Tektur({
  subsets: ['cyrillic'],
  variable: '--font-tektur',
});

const delaGothic = Dela_Gothic_One({
  subsets: ['cyrillic'],
  variable: '--font-dela',
  weight: '400',
});

export default function WayCard({ number, text, active }: { number: string, text: string, active?: boolean }) {
  return (
    <div
      className={`flex flex-col bg-[#363636] sm:w-1/5 w-full sm:h-full h-[95%] sm:justify-start items-center sm:border-[0.2vw] border-[0.4vw] border-white aspect-square
        transition-all duration-300 hover:shadow-[0_0_4vw_0.5vw_rgba(181,240,0,0.6)] group ${
          active
            ? 'shadow-[0_0_8vw_0.5vw_rgba(181,240,0,0.6)] scale-100'
            : 'scale-[0.9]'
        }`}
    >
      <h2
        className={`sm:text-[10vw] text-[45vw] leading-none mt-[6vw] group-hover:text-lime sm:mt-[1vw] transition-colors duration-300 ${
          active ? 'text-lime' : 'text-white'
        }`}
      >
        {number}
      </h2>
      <div className="sm:text-[1.2vw] text-[5vw]  text-center xl:px-[clamp(1rem,-11rem+16vw,4rem)] sm:px-[0.1vw] px-[8vw]">
        {text}
      </div>
    </div>
  )
}