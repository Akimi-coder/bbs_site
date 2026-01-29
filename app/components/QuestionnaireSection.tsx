"use client";
import { useState } from "react";
import { Dela_Gothic_One } from 'next/font/google';
import { Tektur } from 'next/font/google';
import { Check, X } from "lucide-react";


const tektur = Tektur({
  subsets: ['cyrillic'],
  variable: '--font-tektur',
});

const delaGothic = Dela_Gothic_One({
  subsets: ['cyrillic'],
  variable: '--font-dela',
  weight: '400',
});

export default function QuestionnaireSection() {
  const [formData, setFormData] = useState({
    lastName: "",
    middleName: "",
    firstName: "",
    phone: "",
    messenger: "",
    military: "",
    position: "",
  });

  const [showCheck, setShowCheck] = useState(false);
  const [showError, setShowError] = useState(false);


  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    // Анімація галочки
    const last_name = formData.lastName;
    const first_name = formData.firstName;
    const phone = formData.phone;
    const comments = formData.position + " " + formData.messenger;

    console.log(phone);

    if(phone == ""){
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
      return;
    }

     const data = {
      title: last_name + " " + first_name,
      phone: [
        {
          value: "380" + phone,
          type: "personal",
        },
      ],
      source: "site",
      first_name: first_name,
      last_name: last_name,
      comments: comments,
    };

    const base_url = "https://uavarmy.uspacy.ua/company/v1/incoming_webhooks/run/ihMDgsDwRND5FdODg1OjphfTt1t3hql2";
    const lead_url = `${base_url}/crm/v1/entities/leads`;

    try {
      const response = await fetch(lead_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowCheck(true);
        setTimeout(() => setShowCheck(false), 2000);
        console.log("✅ Дані успішно відправлено:", formData);
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
        console.error("❌ Помилка відправлення:", response.status);
      }
    } catch (error) {
     
      console.error("❌ Помилка запиту:", error);
    }
  };

  return (
    <div id="form" className={`${delaGothic.variable} ${tektur.variable} flex sm:flex-row flex-col sm:aspect-[16/9] aspect-[9/16]`}>
      {/* Ліва частина */}
      <div className="sm:w-[50%] bg-[length:80%] my-[10vw] sm:my-[0vw] bg-center bg-no-repeat sm:bg-[linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url('/shewron.webp')]">
        <div className="flex flex-col sm:px-[8%] mx-[6vw] sm:mx-[0vw] text-white sm:mr-[5%]">
          <h2 className="font-dela sm:text-[2.5vw] text-[6vw] leading-tight text-white sm:mb-[2vw] mb-[5vw]">
            ЗАПОВНЮЙ АНКЕТУ - ЗРОБИ ПЕРШИЙ КРОК ДО <span className='text-lime'>ВСТУПУ В ББС 110</span>
          </h2>
          <h4 className="font-tektur sm:text-[1.3vw] text-[4.3vw]">
            Борони батькувщину розумом<br />в команді надійних побратимів
          </h4>
        </div>
      </div>

      {/* Права частина */}
      <div className="font-tektur flex flex-col sm:w-[50%] h-full sm:mr-[5%] sm:mx-[0vw] mx-[6vw] sm:gap-[0.4vw] gap-[1vw]">
        {/* ПІБ і телефон */}
        <div className="flex sm:flex-row flex-col bg-[#363636] gap-[2vw] sm:gap-[1vw] sm:justify-between justify-center sm:px-[4vw] px-[6vw] sm:items-center sm:h-[30%] h-[40%]">
          <div className="flex flex-col gap-[2vw] sm:gap-[1vw] sm:w-[48%] w-full">
            <div className="flex flex-col">
              <label className="text-white sm:text-[2vw] text-[4vw]">Прізвище*</label>
              <input
                type="text"
                placeholder="Ваше прізвище"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="sm:p-[0.3vw] p-[0.6vw] pl-[3vw] py-[1.5vw] sm:text-[1vw] text-[3vw]
                 border-[0.15vw] border-[#848484] text-[#848484] focus:border-white focus:text-white outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white sm:text-[2vw] text-[4vw]">Ім’я*</label>
              <input
                type="text"
                placeholder="Ваше ім’я"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="sm:p-[0.3vw] p-[0.6vw] pl-[3vw] py-[1.5vw] sm:text-[1vw] text-[3vw]
                 border-[0.15vw] border-[#848484] text-[#848484] focus:border-white focus:text-white outline-none"
              />
            </div>
            
          </div>

          <div className="flex flex-col gap-[2vw] sm:gap-[1vw] sm:w-[48%] w-full">
            <div className="flex flex-col">
              <label className="text-white sm:text-[2vw] text-[4vw]">По-батькові*</label>
              <input
                type="text"
                placeholder="Як вас по-батькові"
                value={formData.middleName}
                onChange={(e) => handleChange("middleName", e.target.value)}
                className="sm:p-[0.3vw] p-[0.6vw] pl-[3vw] py-[1.5vw] sm:text-[1vw] text-[3vw]
                 border-[0.15vw] border-[#848484] text-[#848484] focus:border-white focus:text-white outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white sm:text-[2vw] text-[4vw]">Телефон*</label>
              <input
                type="text"
                placeholder="+38"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="sm:p-[0.3vw] p-[0.6vw] pl-[3vw] py-[1.5vw] sm:text-[1vw] text-[3vw]
                 border-[0.15vw] border-[#848484] text-[#848484] focus:border-white focus:text-white outline-none"
              />
            </div>
          </div>
        </div>

        {/* Месенджери */}
        <div className="flex flex-col justify-center bg-[#363636] sm:h-[15%] h-[10%] gap-[0.2vw]">
          <label className="flex w-full justify-center m-1 text-white sm:text-[2vw] text-[4vw]">Зручний канал зв’язку*</label>
          <div className="flex justify-center w-full gap-[5vw]">
            {["whatsapp", "signal"].map((m) => (
              <label key={m} className="flex items-center sm:gap-[0.5vw] gap-[1.5vw] cursor-pointer">
                <input
                  type="radio"
                  name="messenger"
                  checked={formData.messenger === m}
                  onChange={() => handleChange("messenger", m)}
                  className="sm:w-[1.5vw] sm:h-[1.5vw] w-[4vw] h-[4vw] accent-[#B5F000]"
                />
                <span className="text-white sm:text-[1.5vw] text-[3.5vw] capitalize">{m}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Військовий статус і посада */}
        <div className="flex flex-col bg-[#363636] h-[30%] sm:gap-[0.5vw] gap-[7vw] sm:px-[4vw] pl-[6vw] pr-[10vw] justify-center">
          <div className="flex flex-col sm:gap-[0.1vw] gap-[2vw]">
            <h2 className="text-white sm:text-[2vw] text-[4vw]">Чи є чинним військовослужбовцем?</h2>
            <div className="flex w-full gap-[4vw]">
              {["yes", "no"].map((opt) => (
                <label key={opt} className="flex items-center sm:gap-[0.5vw] gap-[2vw] cursor-pointer">
                  <input
                    type="radio"
                    name="military"
                    checked={formData.military === opt}
                    onChange={() => handleChange("military", opt)}
                    className="sm:w-[1.5vw] sm:h-[1.5vw] w-[4vw] h-[4vw] accent-[#B5F000]"
                  />
                  <span className="text-white sm:text-[1.5vw] text-[3.5vw] capitalize">{opt === "yes" ? "Так" : "Ні"}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:gap-[0.1vw] gap-[2vw]">
            <h2 className="text-white sm:text-[2vw] text-[4vw]">Яку посаду обрав(-ла)?</h2>
            <select
              value={formData.position}
              onChange={(e) => handleChange("position", e.target.value)}
              className="sm:text-[1.5vw] text-[3.5vw] w-full border border-[#848484] sm:p-[1vw] p-[0.5vw] pl-[2vw] sm:py-[0.2vw] py-[1.5vw] bg-[#363636] text-white focus:outline-none"
            >
              <option value="">Оберіть посаду</option>
              <option value="Пілот Mavic">Пілот Mavic</option>
              <option value="Пілот FPV-дронів">Пілот FPV-дронів</option>
              <option value="Пілот важких бомберів">Пілот важких бомберів</option>
              <option value="Пілот крила">Пілот крила</option>
              <option value="Водій">Водій</option>
              <option value="Штурман">Штурман</option>
            </select>
          </div>
        </div>

        {/* Анімація галочки */}
        {showCheck && (
          <div className="fixed inset-0 flex justify-center items-start pt-[1vh] z-50">
            <Check className="text-lime animate-check w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]" />
          </div>
        )}

        {showError && (
        <div className="fixed inset-0 flex justify-center items-start pt-[1vh] z-50">
          <X className="text-red-500 animate-check w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]" />
        </div>
      )}

        {/* Кнопка */}
        <div onClick={handleSubmit} className="flex text-black bg-lime sm:h-[12%] h-[8%] justify-center items-center hover:bg-white cursor-pointer">
          <h2 className="font-dela sm:text-[2vw] text-[5vw]">ПОДАТИ ЗАЯВКУ</h2>
        </div>
      </div>
    </div>
  );
}
