"use client";
import { useState, useEffect } from "react";
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import { Tektur } from 'next/font/google';
import { Dela_Gothic_One } from 'next/font/google';

const tektur = Tektur({
  subsets: ['cyrillic'],
  variable: "--font-tektur"
});

const delaGothic = Dela_Gothic_One({
  subsets: ['cyrillic'],
  variable: '--font-dela',
  weight: '400',
});

export default function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("ukr");

  // 🚫 Блокуємо скрол сторінки, коли меню відкрите
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`flex flex-col w-full ${tektur.variable} ${delaGothic.variable} font-tektur bg-[url('/banner.webp')] bg-no-repeat sm:bg-center bg-[position:70%_center] bg-cover h-[100svh] min-h-[600px] max-h-[1000px] sm:max-h-full sm:h-fit sm:aspect-[16/9]`}
    >
      <div className="flex sm:h-[10%]  h-fit mb-[5vw] sm:mb-[0vw]">
        <div className="flex  justify-between sm:py-[1vw] sm:px-[2vw] px-[4vw] w-full mt-[4vw] sm:mt-[0.5vw] h-[14vw] sm:h-[0vw]">
          {/* Логотип */}
          <div className="flex h-full">
            <div className="relative z-[60] aspect-[16/8] w-[30vw] sm:w-[6vw] sm:h-[4vw] h-full">
              <Image src="/logo.png" alt="Логотип" fill className="object-contain" />
            </div>
          </div>

          {/* Текст зверху */}
          <h1 className="text-white text-[1.2vw] leading-tight hidden sm:block">
            Батальйон безпілотних систем <br />
            110 ОМБр ім. генерала-хорунжого <br />
            Марка Безручка
          </h1>

          {/* Іконки соцмереж */}
          <div className="gap-[0.8vw] hidden sm:flex">
            {[
              { src: "/telegramEmpty.svg", hover: "/telegramHover.svg", link: "https://t.me/BBS_110" },
              { src: "/facebookEmpty.svg", hover: "/facebookHover.svg", link: "https://www.facebook.com/bbs110/" },
              { src: "/youtubeEmpty.svg", hover: "/youtubeHover.svg", link: "https://www.youtube.com/@bbc_110" },
              { src: "/instagramEmpty.svg", hover: "/instagramHover.svg", link: "https://www.instagram.com/110_bbs/" }
            ].map(({ src, hover, link }, i) => (
              <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt="icon"
                  className="w-[3vw] h-[3vw] transition duration-300 hover:opacity-80"
                  onMouseEnter={(e) => (e.currentTarget.src = hover)}
                  onMouseLeave={(e) => (e.currentTarget.src = src)}
                />
              </a>
            ))}
          </div>

          {/* Мови */}
          <div className="hidden font-semibold items-center text-[1vw] h-[3vw] sm:flex">
            {/* УКР */}
            <div
              onClick={() => setLang("ukr")}
              className={`flex select-none h-full items-center cursor-pointer transition-all
          ${lang === "ukr"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:opacity-50 hover:text-black"}`}
            >
              <h2 className="px-[0.8vw]">укр</h2>
            </div>

            {/* ENG */}
            <div
              onClick={() => setLang("eng")}
              className={`flex select-none h-full items-center cursor-pointer transition-all
          ${lang === "eng"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:opacity-50 hover:text-black"}`}
            >
              <h2 className="px-[0.8vw]">eng</h2>
            </div>
          </div>

          {/* Бургер */}
          <div className="sm:hidden flex flex-col justify-center bg-lime z-[60] relative">
            <Hamburger toggled={open} toggle={setOpen} color="black" />
          </div>
        </div>
      </div>

      {/* Головний блок */}
      <div className="flex h-[90%] sm:flex-row px-[4vw] flex-col items-center sm:px-[2vw] text-white sm:justify-between justify-center">
        <div className="hidden sm:block text-[2vw] sm:w-[40%]">
          {["https://bbs110.army/history/","#about", "#vacancies", "#training", "#faq", "#contacts"].map((href, i) => (
            <a
              key={href}
              href={href}
              className="block hover:text-lime select-none leading-tight transition duration-300"
            >
              {["БОЙОВИЙ ШЛЯХ","ПРО БАТАЛЬЙОН", "ВАКАНТНІ ПОСАДИ", "ПІДГОТОВКА", "FAQ", "КОНТАКТИ"][i]}
            </a>
          ))}
        </div>

        {/* Центр */}
        <div className="flex sm:block flex-col h-full sm:h-min sm:mt-[0vw]">
          <div className="flex  flex-col h-full w-full justify-center -translate-y-[5%]">
            <h2 className="flex sm:text-[6vw] text-[10vw] font-bold sm:font-semibold sm:leading-none sm:mb-[1vw] mb-[2vw]">
              БОРОНИ БАТЬКІВЩИНУ РОЗУМОМ
            </h2>
            <h1 className="text-white text-[4vw] leading-tight flex sm:hidden sm:mb-[0vw] mb-[10vw]">
              Батальйон безпілотних систем <br /> 110 ОМБр ім. генерала-хорунжого <br /> Марка Безручка
            </h1>
            <div className="sm:mt-[1vw]">
              <a href="#form">
                <button className="sm:text-[1.5vw] text-[4.5vw] bg-lime hover:bg-white text-black font-dela sm:py-[1.5vw] sm:px-[2vw] py-[3vw] px-[3.5vw] transition duration-300">
                  ЗАПОВНЮЙ АНКЕТУ
                </button>
              </a>
            </div>
          </div>

          {/* Соцмережі (мобільна версія) */}
          <div className="sm:gap-[0.8vw] gap-[4vw] flex sm:hidden mb-[4vw]">
            {[
              { src: "/telegramEmpty.svg", hover: "/telegramHover.svg", link: "https://t.me/BBS_110" },
              { src: "/facebookEmpty.svg", hover: "/facebookHover.svg", link: "https://www.facebook.com/bbs110/" },
              { src: "/youtubeEmpty.svg", hover: "/youtubeHover.svg", link: "https://www.youtube.com/@bbc_110" },
              { src: "/instagramEmpty.svg", hover: "/instagramHover.svg", link: "https://www.instagram.com/110_bbs/" }
            ].map(({ src, hover, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={src}
                  alt="icon"
                  className="w-[11vw] h-[11vw] sm:w-[3vw] sm:h-[3vw] transition duration-300 hover:opacity-80"
                  onMouseEnter={(e) => (e.currentTarget.src = hover)}
                  onMouseLeave={(e) => (e.currentTarget.src = src)}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Мобільне меню */}
        {open && (
          <div
            className="fixed top-0 left-0 w-screen h-screen p-4 bg-black z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex w-full justify-between items-center rounded-md">

              </div>

              <div className="flex flex-col gap-[4vw] text-white w-full h-full items-center justify-center">
                <div className="w-full font-semibold items-center justify-center text-[4vw] h-[9vw] flex">
                  <div className="bg-white flex text-black select-none h-full items-center px-[1.5vw]">
                    <h2 className="px-[0.8vw]">укр</h2>
                  </div>
                  <div className="flex text-white select-none h-full px-[1.5vw] items-center hover:bg-white hover:opacity-50 hover:text-black">
                    <h2 className="px-[0.8vw]">eng</h2>
                  </div>
                </div>

                {/* Посилання з закриттям */}
                <div className="font-dela flex flex-col text-[7vw] gap-[4vw] text-center text-white">
                  {[
                    { href: "https://bbs110.army/history/", text: "БОЙОВИЙ ШЛЯХ" },
                    { href: "#about", text: "ПРО НАС" },
                    { href: "#vacancies", text: "ВАКАНСІЇ" },
                    { href: "#training", text: "ПІДГОТОВКА" },
                    { href: "#faq", text: "FAQ" },
                    { href: "#contacts", text: "КОНТАКТИ" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block hover:text-lime select-none transition duration-300"
                      onClick={() => setOpen(false)}
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              </div>

              {/* Кнопка */}
              <div className="flex sm:mt-[1vw] w-full justify-center">
                <a href="#form" onClick={() => setOpen(false)}>
                  <button className="sm:text-[1.5vw] text-[4.5vw] bg-lime hover:bg-white text-black font-dela sm:py-[1.5vw] sm:px-[2vw] py-[3vw] mb-[12vw] px-[3.5vw] transition duration-300">
                    ЗАПОВНЮЙ АНКЕТУ
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
