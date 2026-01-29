"use client";
import Image from 'next/image';
import { Dela_Gothic_One } from 'next/font/google'
import { Tektur } from 'next/font/google'

const tektur = Tektur({
  subsets: ['cyrillic'],
  variable: "--font-tektur"
})
const delaGothic = Dela_Gothic_One({
  subsets: ['cyrillic'],
  variable: '--font-dela',
  weight: '400',
});


export default function AboutSection() {
  return (
    <div id="about" className='flex flex-col bg-black'>
      <div
        className={`${delaGothic.variable} ${tektur.variable} sm:px-[3vw] px-[3vw] font-dela w-full sm:aspect-[16/9] aspect-[10/16] flex bg-no-repeat sm:bg-center bg-[position:center_40%] bg-size-[50%] bg-[url('/drone.webp')]`}
      >
        <div className='flex flex-col w-full h-full justify-between '>
          <div className="font-delas text-white sm:text-left text-center sm:text-[2.2vw] mt-[10vw] text-[5vw] justify-start sm:mt-[6vw] pl-[0.5vw] sm:w-[90%]">
            ВІЙНА ЗМІНИЛАСЬ
            <br className="block sm:hidden" />        {/* перенос для мобільних */}
            — ТЕПЕР <span className="text-lime">ПЕРЕМАГАЮТЬ </span> <br className="block sm:hidden" /> 
            НЕ ЛИШЕ СИЛА І КІЛЬКІСТЬ, А ПЕРЕДУСІМ ТЕХНОЛОГІЇ.
            <br className="block sm:hidden" />        {/* перенос для мобільних */}
            <br className="hidden sm:block" />        {/* перенос для десктопу */}

            {/* Цей блок видно тільки на десктопі */}
            <span className="hidden sm:inline">
              НАШ <span className="text-lime">БАТАЛЬЙОН БЕЗПІЛОТНИХ СИСТЕМ</span> 110 ОМБР
              СТОЇТЬ НА ПЕРЕДОВІЙ ЦІЄЇ ТРАНСФОРМАЦІЇ.
            </span>
          </div>
          <div className="flex w-full justify-end">
            <div className="font-tektur text-white sm:text-left text-center sm:text-[2vw] sm:mb-[0vw] mb-[15vw] text-[5vw] sm:max-w-[65%] sm:opacity-95">
              FPV, розвідувальні дрони та важкі бомбери —
              <br className="hidden sm:block" />
              <span className="text-lime font-semibold"> різні напрямки, одна мета.</span>
              {' '}Кожен виліт — шанс врятувати людей, нейтралізувати загрозу і наблизити перемогу.
              <br className="hidden sm:block" />
              <span className="text-lime font-semibold">І твоя участь</span>{' '}
              у цій технологічній боротьбі
              <span className="text-lime font-semibold"> має важливе значення для країни.</span>              </div>
          </div>

        </div>
      </div>
      <div className={`flex sm:flex-row flex-col sm:py-[1.5vw] sm:px-[1.5vw] py-[3vw] gap-[8vw] ${delaGothic.variable} sm:mt-[4vw] items-center justify-around font-dela sm:mx-[3vw] mx-[4vw] bg-lime leading-none`}>
        <div className='sm:text-left text-center sm:text-[2vw] text-[6vw] text-black'>
          ПРИЄДНУЙСЯ ДО ЛАВ ББС
        </div>
        <div className='hidden sm:block'>
          <img src="/arrowCircle.svg" alt="Іконка" className="w-[3vw] h-[3vw]" />
        </div>
        <div className='block sm:hidden'>
          <img src="/downArrow.svg" alt="Іконка" className="w-[10vw] h-[10vw]" />
        </div>
        <a href="#form">
          <div className="sm:text-[2vw] text-[6vw] sm:px-[2vw] sm:py-[2vw] py-[6vw] px-[4vw] bg-black text-white select-none hover:bg-white hover:text-black transition duration-300">
            ЗАПОВНЮЙ АНКЕТУ
          </div>
        </a>
      </div>

    </div>
  );
}
