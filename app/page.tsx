import Image from "next/image";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ImageSection from "./components/ImageSection";
import VacancySection from "./components/VacancySection";
import WayToBBSSection from "./components/WayToBBSSection";
import QuestionnaireSection from "./components/QuestionnaireSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <div className="bg-black select-none">
      <Header/>
      <AboutSection/>
      <ImageSection/>
      <VacancySection/>
      <WayToBBSSection/>
      <QuestionnaireSection/>
      <FaqSection/>
      <Footer/>
      <Script
        strategy="afterInteractive" // скрипт виконається після завантаження сторінки
        src="https://application-bucket-b02u.s3.eu-west-1.amazonaws.com/68/03/6803a96a5a1534ea3655a28c/widget.js"
      />
    </div>
  );
}
