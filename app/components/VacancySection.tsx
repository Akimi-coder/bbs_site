"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { Dela_Gothic_One } from 'next/font/google';
import { Tektur } from 'next/font/google';
import Gallary from './Gallary';
import { motion } from "framer-motion"
import VacancyCard from './VacancyCard';


const tektur = Tektur({
  subsets: ['cyrillic'],
  variable: '--font-tektur',
});

const delaGothic = Dela_Gothic_One({
  subsets: ['cyrillic'],
  variable: '--font-dela',
  weight: '400',
});

export default function VacancySection() {
  const [count, setCount] = useState(7);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      console.log(width);

      if (width < 600) setCount(3);      // маленькие экраны
      else if (width < 1024) setCount(6); // планшеты
      else setCount(8);                  // большие экраны
    };

    updateCount(); // запустить при монтировании
    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <div id="vacancies" className={`font-tektur ${tektur.variable} flex flex-col mb-[10%] w-full overflow-hidden`}>
      <div className="flex">
        <div
          className="flex bg-lime flex-none w-full justify-between "
        >
          {Array.from({ length: count }, (_, i) => (
            <div
              className="sm:gap-[3vw] gap-[3vw] flex py-[1vw] items-center font-semibold"
              key={i}
            >
              <h3 className="text-[4.5vw] sm:text-[1.5vw] leading-none text-black">ВАКАНСІЇ</h3>
              <img
                src="/star.svg"
                alt="Іконка"
                className="flex w-[4.5vw] h-[4.5vw] sm:w-[1.5vw] sm:h-[1.5vw] "
              />
            </div>
          ))}
        </div>
        <div
          className="flex bg-lime flex-none w-full justify-between"
        >
          {Array.from({ length: count }, (_, i) => (
            <div
              className="sm:gap-[3vw] gap-[3vw] flex py-[1vw] items-center font-semibold"
              key={i}
            >
              <h3 className="text-[5vw] sm:text-[1.5vw] leading-none">ВАКАНСІЇ</h3>
              <img
                src="/star.svg"
                alt="Іконка"
                className="flex w-[5vw] h-[5vw] sm:w-[1.5vw] sm:h-[1.5vw] "
              />
            </div>
          ))}
        </div>
      </div>
      <div className='sm:aspect-[16/9] sm:mt-[3%] mt-[10vw] flex flex-col sm:h-full w-full select-none items-center sm:gap-[1vw] gap-[4vw]'>
        <div className='flex sm:flex-row flex-col sm:w-[90%] w-[80%] h-full sm:gap-[1.5vw] gap-[4vw]'>
          <VacancyCard backgroundUrl="/106.webp" title={'ПІЛОТ \nБПЛА ТИПУ MAVIC'} subtitle="Хто керує Мавіком, той керує ситуацією.
Ставай тим, хто тримає небо під контролем.
Потрібна тверда рука, гостре око і нуль жалю до противника." />
          <VacancyCard backgroundUrl="/9.webp" title={'ПІЛОТ\nFPV-ДРОНІВ'} subtitle="Тут усе вирішують секунди, метри і концентрація. Твоя точність — їхній кінець."/>
          <VacancyCard backgroundUrl="/101.webp" title={'ПІЛОТ \nВАЖКИХ БОМБЕРІВ'} subtitle="Важкий бомбер — це роль для тих, хто прагне впливу. Якщо хочеш працювати на масштабну перевагу - це твій вибір."/>
        </div>
        <div className='h-full sm:w-[90%] w-[80%] flex sm:flex-row flex-col sm:gap-[1.5vw] gap-[4vw]'>
          <VacancyCard backgroundUrl="/84.webp" title={'ПІЛОТ\nКРИЛА'} subtitle="Хто бачить — той контролює. Хто контролює — той перемагає. Приєднуйся до тих, хто забезпечує цю перевагу щодня."/>
          <VacancyCard backgroundUrl="/100.webp" title='ВОДІЙ' subtitle="Жодна місія не почнеться, поки ти не рушиш. Приєднуйся до тих, кому довіряють шлях."/>
          <VacancyCard backgroundUrl="/12.webp" title={'ШТУРМАН'} subtitle="Коли рахунок іде на секунди — потрібен холодний розум і сміливі рішення. Якщо ти живеш логікою і відповідальністю — твоє місце тут."/>
        </div>
      </div>
    </div>
  );
}
