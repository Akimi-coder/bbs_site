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


export default function ArticlePage() {
    return (
        <div className='flex flex-col overflow-hidden'>
            <div className={`${delaGothic.variable} ${tektur.variable} flex flex-col w-full font-tektur bg-[url('/article/1.webp')] bg-no-repeat sm:bg-center bg-[position:70%_center] bg-cover sm:max-h-full h-fit aspect-[16/9]`}>
                <div className='flex flex-col items-end justify-center h-full text-[4.3vw] text-white font-tektur mr-[6vw]'>
                    <h1 className='font-extrabold'>
                        БАТАЛЬЙОН БЕЗПІЛОТНИХ<br />
                        СИСТЕМ 110 ОМБР<br />
                        <span className='font-dela text-lime'>Історія бойового шляху</span>
                    </h1>
                </div>

            </div>
            <div className={`${delaGothic.variable} ${tektur.variable} px-[1.5vw] select-none flex flex-col bg-black h-full w-full`}>

                <div className='flex flex-col'>
                    <h2 className="flex w-full justify-center font-tektur font-bold text-center text-[3vw] text-lime py-[2vw]">ПОЧАТОК ШЛЯХУ</h2>
                    <div className='flex justify-between'>
                        <img src={"/article/2.webp"} className='w-[31vw] opacity-70' />
                        <img src={"/article/4.webp"} className='w-[31vw] opacity-70' />
                        <img src={"/article/3.webp"} className='w-[31vw] opacity-70' />
                    </div>
                    <div className='flex pt-[2vw] gap-[4vw]'>
                        <div className='flex flex-col w-[60%]  gap-[1.5vw] text-[1.2vw] text-white font-tektur'>
                            <h3>Україна стала однією з країн, яка в найкоротші терміни змогла
                                переосмислити можливості цивільних технологій і перетворити
                                їх на ефективну зброю. Саме так народився новий тип військових
                                підрозділів, що сьогодні визначає характер фронту — підрозділи
                                безпілотних систем.
                            </h3>
                            <h3>
                                Серед них — Батальйон безпілотних систем 110-ї окремої
                                механізованої бригади — підрозділ, який за короткий час
                                пройшов шлях від невеликої групи ентузіастів до одного з
                                найефективніших на східному та південному напрямках.
                            </h3>
                        </div>
                        <div className="w-[40%] flex items-center justify-center overflow-hidden">
                            <img
                                src="/article/5.webp"
                                className="w-full h-full object-cover opacity-70"
                                alt=""
                            />
                        </div>

                    </div>
                </div>
                <div className='flex flex-col'>
                    <h2 className="flex w-full justify-center font-tektur font-bold text-center py-[2vw] text-[3vw] text-lime">АВДІЇВКА</h2>
                    <div className='flex gap-[4vw]'>
                        <div className='w-[50%]'>
                            <img
                                src="/article/6.webp"
                                className="w-full h-full object-cover opacity-70"
                                alt=""
                            />
                        </div>
                        <div className='flex flex-col w-[50%] gap-[1vw] text-[1.2vw] text-white font-tektur'>
                            <h3>Історія Батальйону безпілотних систем 110-ї окремої механізованої
                                бригади розпочалася навесні 2023 року. На той час 110 ОМБр уже
                                понад рік перебувала в зоні бойових дій, тримаючи оборону Авдіївки
                                під час повномасштабного вторгнення Росії в Україну.</h3>
                            <h3>Українська армія стала однією з перших у світі, хто почав системно
                                застосовувати цивільні безпілотники у військових завданнях — для
                                розвідки, роботи бомберів і ударних дронів-камікадзе.</h3>
                            <h3>З часом у різних підрозділах бригади з’являлося дедалі більше
                                фахівців з експлуатації БПЛА. Хтось опановував ці знання самостійно,
                                вивчаючи відкриті джерела, хтось мав технічну освіту або цивільний
                                досвід роботи в галузі радіоелектроніки.</h3>
                            <h3>Саме з таких ентузіастів у березні 2023 року в бригаді була
                                сформована Рота безпілотних авіаційних комплексів, яка суттєво
                                підсилила можливості підрозділу зі стримування противника</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h2 className="flex w-full justify-center font-tektur font-bold text-center text-[3vw] py-[2vw] text-lime">СТВОРЕННЯ РУБпАК</h2>
                    <div className='flex h-[30vw] gap-[2vw] my-[1vw] overflow-hidden'>
                        <img
                            src="/article/31.webp"
                            className="w-[50%] object-cover opacity-70"
                            alt=""
                        />
                        <img
                            src="/article/32.webp"
                            className="w-[50%] object-cover opacity-70"
                            alt=""
                        />
                    </div>
                    <div className='flex gap-[1.5vw]'>
                        <div className='flex flex-col w-[70%] gap-[1vw] text-[1.2vw] text-white font-tektur'>
                            <h3>У березні 2023 року з цих фахівців сформували Роту ударних безпілотних авіаційних
                                комплексів — РУБпАК. Уперше у складі бригади з’явився підрозділ, який повністю
                                зосередився на роботі в повітрі</h3>
                            <h3>РУБпАК виконував бойові завдання як на передньому краї, під час ворожих наступів, так і в
                                глибокому тилу противника — там, куди раніше не могла дістати артилерія.</h3>
                            <h3>Постійна робота в тилу приносила відчутні результати: уражена ворожа техніка, знищений
                                особовий склад, склади боєприпасів та артилерійські системи.</h3>
                            <h3>Під час найзапекліших штурмів безпосередньо на лінії бойового зіткнення РУБпАК незмінно
                                працював у найгарячіших точках оборони бригади. За цей час було знищено тисячі
                                окупантів та одиниці броньованої техніки противника</h3>
                            <h3>В обороні Авдіївки саме дрони РУБпАК стали тією силою, що дозволила зберігати життя
                                піхоти та суттєво збільшувати втрати ворога.</h3>
                        </div>
                        <div className='w-[30%]'>
                            <img
                                src="/article/33.webp"
                                className="w-full h-full object-cover opacity-70"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h2 className="flex w-full justify-center font-tektur font-bold text-center text-[3vw] text-lime py-[2vw]">ВІД РУБпАК ДО ББС 110</h2>
                    <div className='text-center text-white text-[1.2vw] font-tektur px-[6vw] '>Після важкої кампанії в Авдіївці бригаду вивели на відновлення. За рік роботи РУБпАК активно розвивався та масштабувався. Стало
                        очевидно, що безпілотні системи — це не просто допоміжний інструмент, а окрема бойова сила, яка потребує власної структури,
                        інженерної бази, логістики та постійного технічного розвитку.</div>
                    <div className='flex overflow-hidden justify-between my-[1vw]'>
                        <img
                            src="/article/9.webp"
                            className="w-[32%] h-full object-cover opacity-70"
                            alt=""
                        />
                        <img
                            src="/article/10.webp"
                            className="w-[32%] h-full object-cover opacity-70"
                            alt=""
                        />
                        <img
                            src="/article/11.webp"
                            className="w-[32%] h-full object-cover opacity-70"
                            alt=""
                        />
                    </div>
                    <div className='text-center text-white text-[1.2vw] font-tektur'>Саме тому 29 березня 2024 року на базі РУБпАК було створено Батальйон безпілотних систем 110-ї окремої механізованої бригади.</div>
                    <div className='flex h-[30vw] gap-[2vw] my-[1vw]'>
                        <img
                            src="/article/14.webp"
                            className="w-[60%] object-cover opacity-70"
                            alt=""
                        />
                        <img
                            src="/article/13.webp"
                            className="w-[40%] object-cover opacity-70"
                            alt=""
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h2 className="flex w-full justify-center font-tektur font-bold text-center text-[3vw] py-[2vw] text-lime">СТРУКТУРА БАТАЛЬЙОНУ БЕЗПІЛОТНИХ СИСТЕМ 110 ОМБр</h2>
                    <div className='flex w-full text-white text-[1.2vw] justify-center font-tektur'>
                        <ul className="space-y-[0.5vw]">
                            <li className="flex items-center justify-center gap-[0.5vw]">
                                <span className="text-[1.2vw] leading-none">•</span>
                                технічний відділ FPV
                            </li>
                            <li className="flex items-center justify-center gap-[0.5vw]">
                                <span className="text-[1.2vw] leading-none">•</span>
                                майстерня з ремонту та модернізації розвідувальних дронів
                            </li>
                            <li className="flex items-center justify-center gap-[0.5vw]">
                                <span className="text-[1.2vw] leading-none">•</span>
                                майстерня з ремонту та модернізації квадрокоптерів важкого класу
                            </li>
                            <li className="flex items-center justify-center gap-[0.5vw]">
                                <span className="text-[1.2vw] leading-none">•</span>
                                інженерно-саперний відділ
                            </li>
                            <li className="flex items-center justify-center gap-[0.5vw]">
                                <span className="text-[1.2vw] leading-none">•</span>
                                відділ мінування
                            </li>
                            <li className="flex items-center justify-center gap-[0.5vw]">
                                <span className="text-[1.2vw] leading-none">•</span>
                                автомобільна майстерня
                            </li>
                            <li className="flex items-center justify-center gap-[0.5vw]">
                                <span className="text-[1.2vw] leading-none">•</span>
                                групи ударних FPV
                            </li>
                            <li className="flex items-center justify-center gap-[0.5vw]">
                                <span className="text-[1.2vw] leading-none">•</span>
                                групи важких бомберів
                            </li>
                            <li className="flex items-center justify-center gap-[0.5vw]">
                                <span className="text-[1.2vw] leading-none">•</span>
                                групи повітряної розвідки
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center font-bold font-tektur text-[1.2vw] text-white'>Батальйон став самодостатнім підрозділом, здатним виконувати повний спектр бойових завдань.</div>
                </div>
                <div className='flex flex-col'>
                    <h2 className="flex w-full justify-center font-tektur font-bold text-center text-[3vw] py-[2vw] text-lime">ПОКРОВСЬКИЙ НАПРЯМОК</h2>
                    <h3 className='text-[1.2vw] text-white font-tektur'>Уже в травні 2024 року батальйон розгорнув роботу на Покровському напрямку.</h3>
                    <div className='flex my-[1vw] gap-[2vw]'>
                        <img
                            src="/article/15.webp"
                            className="w-[50%] object-cover opacity-70"
                            alt=""
                        />
                        <img
                            src="/article/16.webp"
                            className="w-[50%] object-cover opacity-70"
                            alt=""
                        />
                    </div>
                    <h3 className='text-[1.2vw] text-white font-tektur'>Під селищем Очеретине Донецької області дронарі взяли під контроль усі виїзди з населеного пункту, знищивши значну кількість російської
                        бронетехніки, яка не встигала навіть покинути його межі</h3>
                    <h3 className='text-[1.2vw] text-white font-tektur'>Одночасно тривала активна робота зі стримування ворога на прилеглих ділянках — у районах Новоолександрівки, Воздвиженки, Іванівки,
                        Прогресу та інших населених пунктів.</h3>
                </div>
                <div className='flex flex-col'>
                    <h2 className="flex w-full justify-center font-tektur font-bold text-center text-[3vw] py-[2vw] text-lime">ЗАПОРІЗЬКИЙ НАПРЯМОК</h2>
                    <div className='flex gap-[1vw] items-center mb-[1vw] sm:h-[40vh] h-[10vh]'>
                        <img
                            src="/article/17.webp"
                            className="w-[33%] h-full object-cover opacity-70"
                            alt=""
                        />
                        <img
                            src="/article/18.webp"
                            className="w-[33%] h-full object-cover opacity-70"
                            alt=""
                        />
                        <img
                            src="/article/19.webp"
                            className="w-[33%] h-full object-cover opacity-70"
                            alt=""
                        />
                    </div>
                    <h3 className='text-[1.2vw] text-white font-tektur'>У листопаді підрозділ було переміщено на південь — у райони Щербаків, Малих Щербаків та Коновалового. Характер бойової роботи змінився
                        разом зі зміною умов фронту, однак її інтенсивність залишилася незмінною.</h3>
                </div>
                <div className='flex flex-col'>
                    <h2 className="flex w-full justify-center font-tektur font-bold text-center text-[3vw] py-[2vw] text-lime">НОВОПАВІВСЬКИЙ НАПРЯМОК</h2>
                    <div className='flex gap-[1vw] items-center mb-[1vw] sm:h-[40vh] h-[10vh]'>
                        <img
                            src="/article/45.webp"
                            className="w-[33%] h-full object-cover opacity-70"
                            alt=""
                        />
                        <img
                            src="/article/42.webp"
                            className="w-[33%] h-full object-cover opacity-70"
                            alt=""
                        />
                        <img
                            src="/article/41.webp"
                            className="w-[33%] h-full object-cover opacity-70"
                            alt=""
                        />
                    </div>
                    <div className='flex'>
                        <div className='w-[35%] flex flex-col gap-[1vw] text-[1.2vw] text-white font-tektur'>
                            <h3>У грудні 2024 року ББС-110 розгорнув роботу
                                на Новопавлівському напрямку. За короткий
                                час підрозділ провів сотні бойових операцій
                                у районах Великої Новосілки, Веремівки,
                                Нового Комара, Бурлацького, Вільного Поля,
                                Привільного та Шевченкового.</h3>
                            <h3>Тут робота була максимально насиченою та
                                різноплановою: від повітряної розвідки до
                                ударів по ворожій бронетехніці, перехоплення
                                безпілотників противника та дистанційного
                                мінування.</h3>
                            <h3>У батальйоні вибудувана ефективна взаємодія
                                з суміжними підрозділами. Завдяки цьому
                                ББС-110 неодноразово працював не лише в
                                інтересах 110-ї ОМБр, а й підтримував сусідні
                                підрозділи, власними засобами допомагаючи
                                відбивати ворожі штурми</h3>
                            <h3>Окрім щоденної бойової роботи з відбиття
                                атак та знищення противника, батальйон
                                виконував широкий спектр спеціальних
                                місій — від розвідки та виявлення цілей у
                                тилу ворога до цілевказання та коригування
                                артилерійських систем дальньої дії. Точну кількість цих операцій підрахувати неможливо.</h3>
                        </div>
                        <div className="w-[65%]">
                            <div className="relative pb-[35vw] overflow-hidden">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/U39aGGGXvqA"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col pt-[2vw] gap-[1vw] font-tektur'>
                        <h3 className='text-[1.2vw] text-white '>За час роботи на напрямку підрозділом було знищено сотні складів боєприпасів і ПММ, а також численні скупчення ворожої техніки та особового складу</h3>
                        <h3 className='text-[1.2vw] text-white '>Результати бойової роботи батальйону можна побачити на офіційних сторінках підрозділу в соціальних мережах — Facebook, Telegram та YouTube.</h3>
                    </div>
                </div>
                <div className='flex flex-col font-tektur'>
                    <h2 className="flex w-full justify-center font-bold text-center text-[3vw] py-[2vw] text-lime">ПОВІТРЯНІ ОПЕРАЦІЇ ББС 110</h2>
                    <div className='flex text-white justify-center gap-[3vw]'>
                        <div className='flex flex-col w-[30%] text-center gap-[1vw]'>
                            <h3 className='text-[1.5vw] font-dela '>Дистанційне мінування</h3>
                            <img
                                src="/article/28.webp"
                                className="sm:h-[40vh] h-[10vh] object-cover opacity-70"
                                alt=""
                            />
                            <h3 className='text-[1.2vw] '>ББС 110 став одним із підрозділів, який масово
                                застосовував дрони для дистанційного
                                мінування — встановлення протипіхотних
                                мін, перекриття доріг і напрямків можливих
                                проривів, створення пасток для ворожої
                                механізованої техніки.
                                Це — тисячі годин у небі та десятки тисяч
                                здійснених скидів мін.</h3>
                        </div>
                        <div className='flex flex-col w-[30%] text-center gap-[1vw]'>
                            <h3 className='text-[1.5vw] font-dela'>Логістичні місії</h3>
                            <img
                                src="/article/29.webp"
                                className="sm:h-[40vh] h-[10vh] object-cover opacity-70"
                                alt=""
                            />
                            <h3 className='text-[1.2vw] '>Під час оборони Великої Новосілки екіпажі
                                важких бомберів виконували не лише ударні,
                                а й логістичні та гуманітарні місії — доставляли
                                боєкомплект, провізію, зброю та медикаменти
                                на позиції, куди було надто небезпечно або
                                взагалі неможливо спрямувати наземний
                                транспорт.</h3>
                        </div>
                        <div className='flex flex-col w-[30%] text-center gap-[1vw]'>
                            <h3 className='font-dela text-[1.5vw]'>Координація</h3>
                            <img
                                src="/article/40.webp"
                                className="sm:h-[40vh] h-[10vh] object-cover opacity-70"
                                alt=""
                            />
                            <h3 className='text-[1.2vw] '>БПЛА вели повітряне спостереження за
                                пересуванням противника під час виходу
                                наших підрозділів із ділянок, де особовий
                                склад перебував під загрозою оточення. Це
                                дозволяло безпечно виво</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col font-tektur mb-[2vw]'>
                    <h2 className="flex w-full justify-center font-bold text-center text-[3vw] py-[2vw] text-lime">ЗАПОРІЗЬКИЙ НАПРЯМОК</h2>
                    <div className='flex gap-[2vw]'>
                        <div className='w-[50%] '>
                            <img
                                src="/article/46.webp"
                                className="object-cover opacity-70"
                                alt=""
                            />
                        </div>
                        <div className='flex flex-col w-[50%] gap-[1vw] text-[1.2vw] text-white font-tektur'>
                            <h3>Сьогодні Батальйон безпілотних систем у складі 110-ї окремої
                                механізованої бригади імені Марка Безручка продовжує бойову роботу.
                                Щодня — це нові вильоти та нові завдання, які підрозділ виконує з
                                максимальною ефективністю.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
