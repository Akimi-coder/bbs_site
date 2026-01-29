"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { Dela_Gothic_One } from 'next/font/google';
import { Tektur } from 'next/font/google';
import Gallary from './Gallary';
import { motion } from "framer-motion"
import VacancyCard from './VacancyCard';
import WayCard from "./WayCard";


const tektur = Tektur({
    subsets: ['cyrillic'],
    variable: '--font-tektur',
});

const delaGothic = Dela_Gothic_One({
    subsets: ['cyrillic'],
    variable: '--font-dela',
    weight: '400',
});

export default function Footer() {

    return (
        <div className={`font-tektur ${tektur.variable} ${delaGothic.variable} flex flex-col overflow-hidden`}>
            <div className="mt-[7vw] sm:p-[1.5vw] p-[3vw] font-dela mx-[6vw] border-[0.2vw] border-white bg-[#363636] sm:text-[2.5vw] text-[4.5vw] text-white text-center">
                НЕ ЗНАЙШОВ ВІДПОВІДІ НА СВОЄ ПИТАННЯ — <span className="text-lime">ЗАТЕЛЕФОНУЙ НАМ</span>
            </div>
            <div className="my-[6vw] flex w-full justify-center">
                <img src="shewron.webp" alt="Іконка" className="sm:w-[17vw] sm:h-[19vw] w-[32vw] h-[36vw] brightness-60" />
            </div>
            <div id="contacts" className="mb-[10vw] flex justify-center text-lime sm:text-[8vw] text-[9vw] font-semibold">+38 (093) 611 27 79</div>
            <div className="flex flex-col bg-lime h-full pt-[4vw]">
                <div className="flex flex-col items-center h-full justify-around gap-[3vw] ">
                    <div className="flex sm:gap-[1vw] gap-[2vw]">
                        <a href="https://t.me/BBS_110" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/telegramBlack.svg"
                                alt="Telegram"
                                className="sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw] border border-transparent rounded-full hover:border-lime transition-all duration-300"
                            />
                        </a>

                        <a href="https://www.facebook.com/bbs110/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/facebookBlack.svg"
                                alt="Facebook"
                                className="sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw] border border-transparent rounded-full hover:border-lime transition-all duration-300"
                            />
                        </a>

                        <a href="https://www.youtube.com/@bbc_110" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/youtubeBlack.svg"
                                alt="YouTube"
                                className="sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw] border border-transparent rounded-full hover:border-lime transition-all duration-300"
                            />
                        </a>

                        <a href="https://www.instagram.com/110_bbs/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/instagramBlack.svg"
                                alt="Instagram"
                                className="sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw] border border-transparent rounded-full hover:border-lime transition-all duration-300"
                            />
                        </a>
                    </div>
                    <div className="flex font-semibold sm:text-[2vw] text-[4vw] text-black">
                        info@bbs110.army
                    </div>
                    <div className="w-full h-[0.2vw] bg-repeat-x bg-[length:4vw_0.3vw] bg-[linear-gradient(to_right,black_0_2vw,transparent_2vw_6vw)]"></div>
                    <div className="mb-[2vw] sm:text-[0.8vw] text-[1.6vw] text-black">
                        © УСІ ПРАВА ЗАХИЩЕНІ
                    </div>
                </div>

            </div>
        </div>
    );
}
