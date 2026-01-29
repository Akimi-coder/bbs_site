"use client";
import { Dela_Gothic_One } from 'next/font/google';
import { Tektur } from 'next/font/google';

type VacancyCardProps = {
  backgroundUrl: string;
  title: string;
  subtitle: string;
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

export default function VacancyCard({ backgroundUrl, title, subtitle }: VacancyCardProps) {
  const handleClick = () => {
    const element = document.getElementById("form");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
    onClick={handleClick}
      className={`font-dela ${delaGothic.variable} ${tektur.variable} group relative flex h-full w-full bg-cover bg-center bg-no-repeat overflow-hidden`}
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
    >
      {/* Напівпрозорий фон */}
      <div className="bg-black/30 w-full sm:h-full h-[90vw] flex flex-col text-white p-4 transition-all duration-700">
        
        {/* Стрілка */}
        <div className="flex w-full justify-end group">
          <img
            src="/arrow.svg"
            alt="Іконка"
            className="sm:w-[2vw] sm:h-[2vw] w-[8vw] h-[8vw]
                       transform transition-all duration-700 ease-in-out
                       sm:group-hover:-translate-y-10 sm:group-hover:translate-x-10 sm:group-hover:opacity-0"
          />
        </div>

        {/* Контейнер тексту */}
        <div className="relative flex flex-col justify-center h-full gap-[1vw] overflow-hidden">
          
          {/* Основний текст */}
          <div
            className="font-semibold sm:text-[2vw] text-[8vw] break-words whitespace-pre-wrap leading-tight transition-all duration-700 ease-in-out transform sm:group-hover:-translate-y-[70%] sm:group-hover:text-lime"
          >
            {title}
          </div>

          {/* Підзаголовок */}
          <div
            className="absolute bottom-[25%] font-tektur sm:text-[1vw] text-[5vw] opacity-0 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-700 delay-150 ease-in-out"
          >
            {subtitle}
          </div>

          {/* Кнопка */}
          <div className="absolute bottom-[5%] right-[5%] opacity-0 translate-y-10 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-700 delay-300 ease-in-out">
            <button
              className="bg-lime text-black font-tektur sm:text-[1vw] text-[4vw] py-[1vw] px-[2vw] hover:bg-white transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("form");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Подати заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
