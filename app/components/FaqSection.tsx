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

export default function FaqSection() {

    const [count, setCount] = useState(7);

    useEffect(() => {
        const updateCount = () => {
            const width = window.innerWidth;
            console.log(width);

            if (width < 600) setCount(8);      // маленькие экраны
            else if (width < 1024) setCount(12); // планшеты
            else setCount(12);                  // большие экраны
        };

        updateCount(); // запустить при монтировании
        window.addEventListener("resize", updateCount);

        return () => window.removeEventListener("resize", updateCount);
    }, []);

    return (
        <div id="faq" className={`font-tektur ${tektur.variable} ${delaGothic.variable} sm:aspect-[16/9] sm:h-fit  flex flex-col overflow-hidden`}>
            <div className="flex bg-lime">
                <div
                    className="flex flex-none w-full justify-between text-black"
                >
                    {Array.from({ length: count }, (_, i) => (
                        <div
                            className="gap-[1.5vw] flex items-center font-semibold"
                            key={i}
                        >
                            <h3 className="sm:text-[1.5vw] text-[3vw]">FAQ</h3>
                            <img
                                src="/dot.svg"
                                alt="Іконка"
                                className="sm:w-[0.7vw] sm:h-[0.7vw] w-[1.4vw] h-[1.4vw]"
                            />
                        </div>
                    ))}
                </div>
                <div
                    className="flex flex-none w-full justify-between"
                >
                    {Array.from({ length: 12 }, (_, i) => (
                        <div
                            className="flex items-center font-semibold"
                            key={i}
                        >
                            <h3 className="text-[clamp(0.9rem,1.8vw,2.2rem)]">FAQ</h3>
                            <img
                                src="/dot.svg"
                                alt="Іконка"
                                className="w-[clamp(1.2rem,1.5vw,2rem)] h-[clamp(1.2rem,1.5vw,2rem)]"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col sm:mt-[4vw] mt-[10vw] gap-[2vw] text-white sm:px-[4vw] px-[6vw] my-[2vw]">
                <div className="flex flex-col w-full sm:gap-[1vw] gap-[4vw]">
                    <div className="flex sm:flex-row flex-col sm:gap-[0vw] gap-[4vw]">
                        <div className="font-dela flex sm:w-[40%] w-full items-center sm:text-[2.2vw] text-[5.2vw]">
                            ЯК ДО ВАС ПОТРАПИТИ?
                        </div>
                        <div className="flex sm:w-[15%] w-full items-center justify-center">
                            <img
                                src="/arrowGreen.svg"
                                alt="Іконка"
                                className="sm:block hidden w-[3vw] h-[3vw] border-[0.1vw] border-lime rounded-full p-[0.5vw]"
                            />
                            <img
                                src="/arrowGreen.svg"
                                alt="Іконка"
                                className="sm:hidden block w-[8vw] h-[8vw] rotate-[90deg] border-[0.5vw] border-lime rounded-full p-[0.5vw]"
                            />
                        </div>
                        <div className="sm:w-[45%] w-full sm:text-[1.3vw] text-[2.8vw]">
                            Якщо ви цивільний, то ми супроводимо вас від початку БЗВП до зарахування в наш підрозділ. Якщо ви діючий військовослужбовець і хочете перевестись до нас, то через сервіс Армія+ ми допоможемо вам це зробити. Якщо ви наразі перебуваєте в статусі СЗЧ і маєте бажання потрапити до нас, ми також підкажемо вам як це зробити і супроводимо вас від початку вашого звернення до ВСП, до зарахування в наш підрозділ.
                        </div>
                    </div>
                    <div className="w-full h-[0.2vw] bg-repeat-x bg-[length:4vw_0.3vw] bg-[linear-gradient(to_right,#363636_0_2vw,transparent_2vw_6vw)]"></div>
                </div>
                <div className="flex flex-col w-full sm:gap-[1vw] gap-[4vw]">
                    <div className="flex sm:flex-row flex-col sm:gap-[0vw] gap-[4vw]">
                        <div className="font-dela flex sm:w-[40%] items-center sm:text-[2.2vw] text-[5.2vw]">
                            ЧИ НАВЧАЄТЕ ВИ УПРАВЛЯТИ? Є ЯКІСЬ КУРСИ?
                        </div>
                        <div className="flex sm:w-[15%] items-center justify-center">
                            <img
                                src="/arrowGreen.svg"
                                alt="Іконка"
                                className="sm:block hidden w-[3vw] h-[3vw] border-[0.1vw] border-lime rounded-full p-[0.5vw]"
                            />
                            <img
                                src="/arrowGreen.svg"
                                alt="Іконка"
                                className="sm:hidden block w-[8vw] h-[8vw] rotate-[90deg] border-[0.5vw] border-lime rounded-full p-[0.5vw]"
                            />
                        </div>
                        <div className="sm:w-[45%] sm:text-[1.3vw] text-[2.8vw]">
                            В будь-якому випадку спочатку на тебе чекає навчання в центрі підготовки, де ти здобудеш необхідні знання і отримаєш відповідну військову спеціальність. Далі буде бойове злагодження і багато годин відпрацювання на полігоні. Лише після цього вихід на бойові.                </div>
                    </div>
                    <div className="w-full h-[0.2vw] bg-repeat-x bg-[length:4vw_0.3vw] bg-[linear-gradient(to_right,#363636_0_2vw,transparent_2vw_6vw)]"></div>

                </div>

                <div className="flex flex-col w-full sm:gap-[1vw] gap-[4vw]">
                    <div className="flex sm:flex-row flex-col sm:gap-[0vw] gap-[4vw]">
                        <div className="font-dela flex sm:w-[40%] items-center sm:text-[2.2vw] text-[5.2vw]">
                            ЧИ ПОТРІБЕН ЯКИЙСЬ ДОСВІД НА ПОСАДУ ОПЕРАТОРА?
                        </div>
                        <div className="flex sm:w-[15%] items-center justify-center">
                            <img
                                src="/arrowGreen.svg"
                                alt="Іконка"
                                className="sm:block hidden w-[3vw] h-[3vw] border-[0.1vw] border-lime rounded-full p-[0.5vw]"
                            />
                            <img
                                src="/arrowGreen.svg"
                                alt="Іконка"
                                className="sm:hidden block w-[8vw] h-[8vw] rotate-[90deg] border-[0.5vw] border-lime rounded-full p-[0.5vw]"
                            />
                        </div>
                        <div className="sm:w-[45%] sm:text-[1.3vw] text-[2.8vw]">
                            Наявність досвіду безумовно буде перевагою. Але якщо ви маєте загальне розуміння керування БПЛА, та маєте бажання в цьому поглиблено розібратись, ми навчимо вас. Єдине не забувайте, що ви маєте бути готові працювати в зоні активних бойових дій.                </div>
                    </div>
                    <div className="w-full h-[0.2vw] bg-repeat-x bg-[length:4vw_0.3vw] bg-[linear-gradient(to_right,#363636_0_2vw,transparent_2vw_6vw)]"></div>
                </div>
                <div className="flex flex-col w-full sm:gap-[1vw] gap-[4vw] ">
                    <div className="flex sm:flex-row flex-col sm:gap-[0vw] gap-[4vw] ">
                        <div className="font-dela flex sm:w-[40%] items-center sm:text-[2.2vw] text-[5.2vw]">
                            ЯКА У ВАС ЗАРПЛАТА?
                        </div>
                        <div className="flex sm:w-[15%] items-center justify-center">
                            <img
                                src="/arrowGreen.svg"
                                alt="Іконка"
                                className="sm:block hidden w-[3vw] h-[3vw] border-[0.1vw] border-lime rounded-full p-[0.5vw]"
                            />
                            <img
                                src="/arrowGreen.svg"
                                alt="Іконка"
                                className="sm:hidden block w-[8vw] h-[8vw] rotate-[90deg] border-[0.5vw] border-lime rounded-full p-[0.5vw]"
                            />
                        </div>
                        <div className="sm:w-[45%] sm:text-[1.3vw] text-[2.8vw]">
                            Грошове забезпечення здійснюється відповідно до норм чинного законодавства. Від 20 000 до 120 000 гривень.                </div>
                    </div>
                    <div className="w-full h-[0.2vw] bg-repeat-x bg-[length:4vw_0.3vw] bg-[linear-gradient(to_right,#363636_0_2vw,transparent_2vw_6vw)]"></div>
                </div>
            </div>
        </div>
    );
}
